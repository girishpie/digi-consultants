package application.drawing;


import application.project.Project;
import application.project.ProjectRepository;
import application.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping("/api/drawing")
public class DrawingController {

    @Autowired
    private final DrawingCatalogRepository drawingCatalogRepository;
    @Autowired
    private final DrawingRepository drawingRepository;
    @Autowired
    private final ProjectRepository projectRepository;
    
    public DrawingController(DrawingCatalogRepository drawingCatalogRepository, DrawingRepository drawingRepository, ProjectRepository projectRepository) {
        this.drawingCatalogRepository = drawingCatalogRepository;
        this.drawingRepository = drawingRepository;
        this.projectRepository =  projectRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_DRAWING')")
    @RequestMapping(value = "/{projectId}", headers = "content-type=multipart/*", method = RequestMethod.POST)
    ResponseEntity<IResponse> add(@PathVariable("projectId") String projectId, @RequestParam("file")  MultipartFile file) {
    	Project project = projectRepository.findById(projectId);
        if(project == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "PROJECT_NOT_FOUND", projectId));

        }
        try {
            //First store the file
            String id = drawingRepository.storeDrawing(file.getOriginalFilename(),
                                                        file.getContentType(),
                                                        file.getInputStream());
            //Make an entry to drawing catalog.
            //first check if this drawing already has a version in the catalog.
            DrawingCatalog catalog = drawingCatalogRepository.findByDisplayName(file.getOriginalFilename());
            //first time creation
            int majorVersion = 1;
            //no versions yet
            if(catalog != null) {
               List<Version> versions = catalog.getVersions();
                majorVersion = versions.get(versions.size()-1).getVersionNumber() + 1;
            } else {
                catalog = new DrawingCatalog();
                catalog.setDisplayName(file.getOriginalFilename());
                catalog.setProjectId(projectId);
            }
            //create a new catalog
            Version version = new Version();
            version.setFileStoreId(id);
            version.setVersionNumber(majorVersion);
            catalog.addVersion(version);
            catalog.setType("Drawing");
            int size = drawingCatalogRepository.findAll().size();
			String numberAsString = String.valueOf(size);
			StringBuilder sb = new StringBuilder();
			while (sb.length() + numberAsString.length() < 3) {
				sb.append('0');
			}
			sb.append(size);
			String paddedNumberAsString = sb.toString();
			// String value = String.format("%011d", size+1);
			String year = Integer.toString(Calendar.getInstance().get(Calendar.YEAR)).substring(2);
			String drawingNumber = year + paddedNumberAsString;
			catalog.setDrawingNumber(drawingNumber);
            catalog = drawingCatalogRepository.save(catalog);
            return ResponseWrapper.getResponse(new RestResponse(catalog));

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseWrapper.getResponse(new RestError(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }
    
  
    @PreAuthorize("hasAuthority('READ_DRAWING')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody HttpEntity<byte[]> get(@PathVariable("id") String id) {
        DrawingCatalog catalog = drawingCatalogRepository.findById(id);
        if (catalog !=null ) {
            Version version = catalog.getLatestVersion();
            DrawingRepository.Drawing drawing = drawingRepository.getDrawingStream(version.getFileStoreId());
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_TYPE, drawing.getContentType());
            return new HttpEntity<>(drawing.getOs().toByteArray(), headers);
        }
        return  null;
    }

    @PreAuthorize("hasAuthority('READ_DRAWING')")
    @RequestMapping(value = "/{id}/{version}", method = RequestMethod.GET)
    public @ResponseBody HttpEntity<byte[]> getVersion(@PathVariable("id") String id , @PathVariable("version") int versionNumber) {
        DrawingCatalog catalog = drawingCatalogRepository.findById(id);
        if (catalog != null) {
            Version version = catalog.getVersion(versionNumber);
            if(version!=null) {
                DrawingRepository.Drawing drawing = drawingRepository.getDrawingStream(version.getFileStoreId());
                HttpHeaders headers = new HttpHeaders();
                headers.add(HttpHeaders.CONTENT_TYPE, drawing.getContentType());
                return new HttpEntity<>(drawing.getOs().toByteArray(), headers);
            }
        }
        return null;
    }

    @PreAuthorize("hasAuthority('READ_DRAWING')")
    @RequestMapping(value = "/versions/{id}", method = RequestMethod.GET)
    public ResponseEntity<IResponse> getAllDrawingVersions(@PathVariable("id") String id ) {
        DrawingCatalog catalog = drawingCatalogRepository.findById(id);
        if (catalog == null) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "DRAWING_NOT_FOUND", id));
        }
        return ResponseWrapper.getResponse( new RestResponse(catalog.getVersions()));
    }
    
    @PreAuthorize("hasAuthority('READ_DRAWING')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<DrawingCatalog> catalogs = drawingCatalogRepository.findAll();
        if (catalogs.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "DRAWINGS_NOT_FOUND"));
         }
        List<DrawingCatalogDto> catalogDtos = new ArrayList<DrawingCatalogDto>();
        for(int i = 0; i < catalogs.size(); i++ ) {
        	Project project = projectRepository.findById(catalogs.get(i).getProjectId());
        	DrawingCatalogDto catalogDto = new DrawingCatalogDto(catalogs.get(i), project.getProjectName());
        	if(catalogs.get(i).getType().equals("Drawing")) {
        		catalogDtos.add(catalogDto);
        	}
        }
        return ResponseWrapper.getResponse(new RestResponse(catalogDtos));

    }
}
