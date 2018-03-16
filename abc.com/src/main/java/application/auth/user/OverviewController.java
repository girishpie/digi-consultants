package application.auth.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import application.auth.roles.RoleRepository;
import application.company.CompanyRepository;
import application.dms.DocumentCatalogRepository;
import application.project.ProjectRepository;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestResponse;

@RestController
@RequestMapping("/overview")
public class OverviewController {

	@Autowired
    private final UserRepository userRepository;
    @Autowired
    private final CompanyRepository companyRepository;
    @Autowired
    private final ProjectRepository projectRepository;
    @Autowired
    private final DocumentCatalogRepository documentCatalogRepository;
	public OverviewController(UserRepository userRepository, CompanyRepository companyRepository,
			ProjectRepository projectRepository, DocumentCatalogRepository documentCatalogRepository) {
		super();
		this.userRepository = userRepository;
		this.companyRepository = companyRepository;
		this.projectRepository = projectRepository;
		this.documentCatalogRepository = documentCatalogRepository;
	}
    
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<IResponse> getOveriview() {
    	int companies = companyRepository.findAll().size();
    	int projects = projectRepository.findAll().size();
    	int users = userRepository.findAll().size();
    	int documents = documentCatalogRepository.findAll().size();
    	OverviewDto overview = new OverviewDto(companies, projects, users, documents );
    	 return ResponseWrapper.getResponse(new RestResponse(overview));

    }

	
    
}
