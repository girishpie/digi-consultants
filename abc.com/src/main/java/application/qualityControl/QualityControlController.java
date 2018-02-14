package application.qualityControl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import application.dms.DocumentRepository;
import application.project.Project;
import application.project.ProjectRepository;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/qualityControl")
public class QualityControlController {
	@Autowired
	private final QualityControlRepository qualityControlRepository;

	@Autowired
    private final ProjectRepository projectRepository;
	
	@Autowired
    private final DocumentRepository documentRepository;
 
	QualityControlController(QualityControlRepository qualityControlRepository, DocumentRepository documentRepository, ProjectRepository projectRepository) {
        this.qualityControlRepository = qualityControlRepository;
        this.projectRepository = projectRepository;
        this.documentRepository = documentRepository;
    }
    
    
    @PreAuthorize("hasAuthority('CREATE_CR')")
    @RequestMapping(value = "/{projectId}", method = RequestMethod.POST)
    ResponseEntity<IResponse> add(@PathVariable("projectId") String projectId, @RequestBody QualityControl input ) {
        Project project = projectRepository.findById(projectId);
        if(project == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "PROJECT_NOT_FOUND", projectId ));

        } 
        /*try {
        	String id = documentRepository.storeDocument(file.getOriginalFilename(),
                file.getContentType(),
                file.getInputStream());
        	
        	//input.addDocumentId(id, file.getOriginalFilename());
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseWrapper.getResponse(new RestError(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR));
        }*/
        
        QualityControl qc = qualityControlRepository.save(input);
        project.addCR(qc.getId());
        projectRepository.save(project);
        return ResponseWrapper.getResponse(new RestResponse(qc.getId()));
    }

    //Delete Specific cr
    @PreAuthorize("hasAuthority('DELETE_CR')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	QualityControl qc = qualityControlRepository.findById(id);
        if(qc == null){ 
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "CR_NOT_FOUND", id));
        }
        Project project = projectRepository.findById(qc.getProjectId());
        if(project != null){
            project.deleteCR(id);
            projectRepository.save(project);
        }
        long res = qualityControlRepository.deleteById(id);

        return ResponseWrapper.getResponse( new RestResponse(id));

    }
    
    //Update Specific cr
    @PreAuthorize("hasAuthority('UPDATE_CR')")
    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String id, @RequestBody QualityControl input){
    	QualityControl qc = qualityControlRepository.findById(id);
        if(qc == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "QUALITYCONTROL_NOT_FOUND", id));
        }
        
        qc.setStatus(input.getStatus());
        qc.addActivityLog(input.getRemarks(), input.getType());
        qc.update();
        qc = qualityControlRepository.save(qc);
        return ResponseWrapper.getResponse(new RestResponse(qc));
    }

    @PreAuthorize("hasAuthority('READ_CR')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<QualityControl> qcs = qualityControlRepository.findAll();
        if (qcs.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "CRS_NOT_FOUNDN"));
         }
        List<QualityControlDto> qcDtos = new ArrayList<QualityControlDto>();
        for(int i = 0; i < qcs.size(); i++ ) {
        	Project project = projectRepository.findById(qcs.get(i).getProjectId());
        	QualityControlDto qcDto = new QualityControlDto(qcs.get(i), project.getProjectName());
        	qcDtos.add(qcDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(qcDtos));

    }

    @PreAuthorize("hasAuthority('READ_CR')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	QualityControl qc = qualityControlRepository.findById(id);
    	if (qc == null) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "CR_NOT_FOUND", id));
        }
    	Project project = projectRepository.findById(qc.getProjectId());
    	QualityControlDto qcDto = new QualityControlDto(qc, project.getProjectName());
        
        return ResponseWrapper.getResponse( new RestResponse(qcDto));
    }
    
}
