package application.mom;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import application.project.Project;
import application.project.ProjectRepository;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;


@RestController
@RequestMapping("/api/mom")
public class MomController {
	
	@Autowired
	private final MomRepository momRepository;
	@Autowired
	private final ProjectRepository projectRepository;
	
	MomController(MomRepository momRepository, ProjectRepository projectRepository){
		this.momRepository = 	momRepository;
		this.projectRepository = projectRepository;
	}
	
	@PreAuthorize("hasAuthority('CREATE_MOM')")
    @RequestMapping(value = "/{projectId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String projectId, @RequestBody Mom input ) {
		Project project = projectRepository.findById(projectId);
        if(project == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "PROJECT_NOT_FOUND", projectId));
        }
    	if(input.getTitle() != null && !input.getTitle().isEmpty()) {
			Mom mom = new Mom();
			
			mom.setTitle(input.getTitle());
			mom.setObjective(input.getObjective());
			mom.setDate(input.getDate());
		mom.setMeetingType(input.getMeetingType());
			mom.setVenue(input.getVenue());
			mom.setMeetingNo(input.getMeetingNo());
			mom.setPplList(input.getPplList());
			///mom.setAbsentees(input.getAbsentees());
			mom.setDiscussionItems(input.getDiscussionItems());
			//mom.setDiscussedItems(input.getDiscussedItems());
			mom = momRepository.save(mom);
			project.addMeeting(mom.getId());
			projectRepository.save(project);
	        return ResponseWrapper.getResponse(new RestResponse(mom));
    	}else {
    		return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST,"MOM_TITLE_NULL"));
    	}
    }

	 @PreAuthorize("hasAuthority('DELETE_MOM')")
	    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
	    ResponseEntity<?> delete(@PathVariable String id) {
	    	Mom mom = momRepository.findById(id);
	        if(mom == null){
	            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "MOM_NOT_FOUND", id));
	        }
	        Project project = projectRepository.findById(mom.getProjectId());
	        if(project != null){
	        	project.deleteMeeting(id);
	        	projectRepository.save(project);
	            //return ResponseWrapper.getResponse( new RestError("Project With: "+ mom.getProjectId()+ " does not exist", HttpStatus.NOT_FOUND));
	        }
	        long res = momRepository.deleteById(id);
	        return ResponseWrapper.getResponse( new RestResponse(res));

	    }
	    
	    @PreAuthorize("hasAuthority('UPDATE_MOM')")
	    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
	    ResponseEntity<IResponse> update(@PathVariable String id, @RequestBody Mom input){
	    	Mom mom = momRepository.findById(id);
	        if(mom == null){
	            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "MOM_NOT_FOUND", id));
	        }
	        if(input.getTitle() != null && !input.getTitle().isEmpty()) {
		        mom.setTitle(input.getTitle());
				mom.setObjective(input.getObjective());
				mom.setDate(input.getDate());
				mom.setVenue(input.getVenue());
				mom.setMeetingNo(input.getMeetingNo());
				mom.setPplList(input.getPplList());
			//	mom.setAgenda(input.getAgenda());
				//mom.setDiscussionItems(input.getDiscussionItems());
			//	mom.setDiscussedItems(input.getDiscussedItems());
				mom.update();
				mom = momRepository.save(mom);
		      
		        return ResponseWrapper.getResponse(new RestResponse(mom));
	        }else {
	    		return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST,"MOM_TITLE_NULL"));
	    	}
	    }

	    @PreAuthorize("hasAuthority('READ_MOM')")
	    @RequestMapping(method = RequestMethod.GET)
	    public ResponseEntity<?> getAll() {
	        List<Mom> meetings = momRepository.findAll();
	        if (meetings.isEmpty()) {
	            RestError restError = new RestError(HttpStatus.NOT_FOUND, "MEETIGNS_NOT_FOUND");
	            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
	        }
	        RestResponse response = new RestResponse(meetings);
	        return new ResponseEntity<Object>(response,  new HttpHeaders(),HttpStatus.OK);
	    } 
	        

	    @PreAuthorize("hasAuthority('READ_MOM')")
	    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
	    public ResponseEntity<?> get(@PathVariable("id") String id) {
	    	Mom meeting = momRepository.findById(id);
	        if (meeting == null) {
	            RestError restError = new RestError(HttpStatus.NOT_FOUND, "MOM_NOT_FOUND", id);
	            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
	        }
	        RestResponse response = new RestResponse(meeting);
	        return new ResponseEntity<Object>(response,  new HttpHeaders(),HttpStatus.OK);
	    }
}
