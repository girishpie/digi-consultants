package application.project;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import application.BoQDepartment.BoQDepartment;
import application.BoQDepartment.BoQDepartmentRepository;
import application.client.Client;
import application.client.ClientRepository;
import application.company.CompanyRepository;
import application.dms.DocumentCatalog;
import application.dms.DocumentCatalogRepository;
import application.drawing.DrawingCatalog;
import application.drawing.DrawingCatalogRepository;
import application.employee.Employee;
import application.employee.EmployeeRepository;
import application.mom.Mom;
import application.mom.MomRepository;
import application.phase.PhaseRepository;
import application.qualityControl.QualityControl;
import application.qualityControl.QualityControlRepository;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

	@Autowired
	private final BoQDepartmentRepository boQDepartmentRepository;
	@Autowired
	private final ProjectRepository projectRepository;
	@Autowired
	private final PhaseRepository phaseRepository;
	@Autowired
	private final EmployeeRepository employeeRepository;
	@Autowired
	private final ClientRepository clientRepository;
	@Autowired
	private final CompanyRepository companyRepository;
	@Autowired
	private final QualityControlRepository qualityControlRepository;
	@Autowired
	private final MomRepository momRepository;
	@Autowired
	private final DocumentCatalogRepository documentCatalogRepository;
	@Autowired
	private final DrawingCatalogRepository drawingCatalogRepository;

	ProjectController(ClientRepository clientRepository, ProjectRepository projectRepository,
			EmployeeRepository employeeRepository, CompanyRepository companyRepository,PhaseRepository phaseRepository,
			QualityControlRepository qualityControlRepository,MomRepository momRepository,
			DocumentCatalogRepository documentCatalogRepository, DrawingCatalogRepository drawingCatalogRepository,
			BoQDepartmentRepository boQDepartmentRepository) {
		this.projectRepository = projectRepository;
		this.clientRepository = clientRepository;
		this.employeeRepository = employeeRepository;
		this.companyRepository = companyRepository;
		this.phaseRepository = phaseRepository;
		this.qualityControlRepository = qualityControlRepository;
		this.momRepository = momRepository;
		this.documentCatalogRepository = documentCatalogRepository;
		this.drawingCatalogRepository = drawingCatalogRepository;
		this.boQDepartmentRepository = boQDepartmentRepository;
	}

	@PreAuthorize("hasAuthority('CREATE_PROJECT')")
	@RequestMapping(value = "/{clientId}", method = RequestMethod.POST)
	ResponseEntity<?> add(@PathVariable String clientId, @RequestBody Project input) {
		Client client = clientRepository.findById(clientId);
		if (client == null) {
			return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "CLIENT_NOT_FOUND", clientId));

		}
		if (input.getProjectName() != null && !input.getProjectName().isEmpty()) {
			int size = projectRepository.findAll().size();
			String numberAsString = String.valueOf(size);
			StringBuilder sb = new StringBuilder();
			while (sb.length() + numberAsString.length() < 3) {
				sb.append('0');
			}
			sb.append(size);
			String paddedNumberAsString = sb.toString();
			// String value = String.format("%011d", size+1);
			String year = Integer.toString(Calendar.getInstance().get(Calendar.YEAR)).substring(2);
			String jobnumber = year + paddedNumberAsString;
            String projectNumber = year + paddedNumberAsString;
			Project project = new Project(input.getProjectName(), jobnumber, input.getSiteAddress(),
					input.getDescription(), input.getStartDate(), input.getClientId(), input.getPhase(), projectNumber);
			Project proj = projectRepository.save(project);
			client.addProject(proj.getId());
			clientRepository.save(client);
			return ResponseWrapper.getResponse(new RestResponse(proj.getId()));
		} else {
			return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST, "PROJECT_NAME_NULL"));
		}
	}

	// Delete Specific project
	@PreAuthorize("hasAuthority('DELETE_PROJECT')")
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	ResponseEntity<?> delete(@PathVariable String id) {
		int i;
		Project project = projectRepository.findById(id);
		//RestError restError;
		if (project == null) {
			return ResponseWrapper
					.getResponse(new RestError("Project With: " + id + " does not exist", HttpStatus.NOT_FOUND));
		}
		if(!(project.getClientId().equals(""))){
			System.out.println("In Client");
			Client client = clientRepository.findById(project.getClientId());
			if (client != null) {
				client.deleteProject(id);
				clientRepository.save(client);
				System.out.println("Project from Client Deleted");
			}
		}
		
		for (i = 0; i < project.getEmployeeIds().size(); i++) {
			System.out.println("In Employee");
			if(!(project.getEmployeeIds().get(i).equals(""))) {
				Employee employee = employeeRepository.findById(project.getEmployeeIds().get(i));
				for (int j = 0; j < employee.getProjectIds().size(); j++) {
					if(employee.getProjectIds().get(j).equals(id)) {
						employee.deleteProject(id);
						System.out.println("Project from Employee Deleted");
					}
				}
			}
			
		}
		for (i = 0; i < project.getCrIds().size(); i++) {
			System.out.println("In QC");
			QualityControl qualityControl = qualityControlRepository.findById(project.getCrIds().get(i));
			if(qualityControl.getProjectId().equals(id)) {
				qualityControl.setProjectId("");
				System.out.println("Project from Quality Control Deleted");
			}	
		}
//		for (i = 0; i < project.getMeetingIds().size(); i++) {
//			System.out.println("In Meeting");
//			Mom mom = momRepository.findById(project.getMeetingIds().get(i));
//			if(mom.getProjectId().equals(id)) {
//				mom.setProjectId("");
//				System.out.println("Project from MOM Deleted");
//			}	
//		}
		for (i = 0; i < project.getBoqDepartmentIds().size(); i++) {
			System.out.println("In BoQDept");
			BoQDepartment boqDepartment = boQDepartmentRepository.findById(project.getBoqDepartmentIds().get(i));
			if(boqDepartment.getProjectId().equals(id)) {
				boqDepartment.setProjectId("");
				System.out.println("Project from BoQDepartment Deleted");
			}	
		}
		System.out.println("In Drawing");
		DrawingCatalog drawingCatalog = drawingCatalogRepository.findByProjectId(id);
		if(drawingCatalog!= null) {
			drawingCatalogRepository.delete(drawingCatalog.getId());
		}
		System.out.println("In Document");
		DocumentCatalog documentCatalog = documentCatalogRepository.findByProjectId(id);
		if(documentCatalog!= null) {
			documentCatalogRepository.delete(documentCatalog.getId());
		}
		projectRepository.deleteById(id);

		return ResponseWrapper.getResponse(new RestResponse(id));

	}

	// Update Specific project
	@PreAuthorize("hasAuthority('UPDATE_PROJECT')")
	@RequestMapping(value = "/{projectId}", method = RequestMethod.PATCH)
	ResponseEntity<IResponse> update(@PathVariable String projectId, @RequestBody Project input) {
		Project project = projectRepository.findById(projectId);
		if (project == null) {
			return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "PROJECT_NOT_FOUND", projectId));
		}

		List<String> existingEmployees = project.getEmployeeIds();
		List<String> newEmployees = input.getEmployeeIds();
		List<String> addList = new ArrayList<String>();
		List<String> deleteList = new ArrayList<String>();
		// compute add list
		for (int i = 0; i < newEmployees.size(); i++) {
			if (!existingEmployees.contains(newEmployees.get(i))) {
				addList.add(newEmployees.get(i));
			}
		}
		// compute delete list
		for (int i = 0; i < existingEmployees.size(); i++) {
			if (!newEmployees.contains(existingEmployees.get(i))) {
				deleteList.add(existingEmployees.get(i));
			}
		}
		project.setProjectName(input.getProjectName());
		project.setJobNumber(input.getJobNumber());
		project.setSiteAddress(input.getSiteAddress());
		project.setDescription(input.getDescription());
		project.setPhase(input.getPhase());
		project.setEmployeeIds(input.getEmployeeIds());

		for (int i = 0; i < addList.size(); i++) {
			Employee emp = employeeRepository.findById(addList.get(i));
			if (emp != null) {
				emp.addProject(project.getId());
				emp.update();
				employeeRepository.save(emp);
			}
		}
		for (int i = 0; i < deleteList.size(); i++) {
			Employee emp = employeeRepository.findById(deleteList.get(i));
			if (emp != null) {
				emp.deleteProject(project.getId());
				emp.update();
				employeeRepository.save(emp);
			}
		}

		project.update();

		project = projectRepository.save(project);
		return ResponseWrapper.getResponse(new RestResponse(project));
	}

	@PreAuthorize("hasAuthority('READ_PROJECT')")
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<?> getAll() {
		List<Project> projects = projectRepository.findAll();

		if (projects.isEmpty()) {
			return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "PROJECTS_NOT_FOUND"));
		}
		List<ProjectDto> projectDtos = new ArrayList<ProjectDto>();
		for (int i = 0; i < projects.size(); i++) {
			Client client = clientRepository.findById(projects.get(i).getClientId());
			String phaseName = "";
			if( projects.get(i).getPhase()!=null) {
				phaseName = phaseRepository.findById(projects.get(i).getPhase()).getName();
				
			}
			ProjectDto projectDto = null;
			if (client == null) {
				projectDto = new ProjectDto(projects.get(i), "", employeeRepository, companyRepository,phaseName );
			} else {
				projectDto = new ProjectDto(projects.get(i), client.getName(), employeeRepository, companyRepository, phaseName);
			}
			projectDtos.add(projectDto);
		}
		return ResponseWrapper.getResponse(new RestResponse(projectDtos));

	}

	@PreAuthorize("hasAuthority('READ_PROJECT')")
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> get(@PathVariable("id") String id) {
		Project project = projectRepository.findById(id);
		if (project == null) {
			return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "PROJECT_NOT_FOUND", id));
		}
		Client client = clientRepository.findById(project.getClientId());
		String phaseName = phaseRepository.findById(project.getPhase()).getName();
		ProjectDto projectDto = new ProjectDto(project, client.getName(), employeeRepository, companyRepository,phaseName );

		return ResponseWrapper.getResponse(new RestResponse(projectDto));
	}
}
