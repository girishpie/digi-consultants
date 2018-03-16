package application.project;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import application.client.Client;
import application.client.ClientRepository;
import application.company.CompanyRepository;
import application.employee.Employee;
import application.employee.EmployeeRepository;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

	@Autowired
	private final ProjectRepository projectRepository;
	@Autowired
	private final EmployeeRepository employeeRepository;
	@Autowired
	private final ClientRepository clientRepository;
	@Autowired
	private final CompanyRepository companyRepository;

	ProjectController(ClientRepository clientRepository, ProjectRepository projectRepository,
			EmployeeRepository employeeRepository, CompanyRepository companyRepository) {
		this.projectRepository = projectRepository;
		this.clientRepository = clientRepository;
		this.employeeRepository = employeeRepository;
		this.companyRepository = companyRepository;
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
		Project project = projectRepository.findById(id);
		RestError restError;
		if (project == null) {
			return ResponseWrapper
					.getResponse(new RestError("Project With: " + id + " does not exist", HttpStatus.NOT_FOUND));
		}
		Client client = clientRepository.findById(project.getClientId());
		if (client != null) {
			client.deleteProject(id);
			clientRepository.save(client);
		}
		long res = projectRepository.deleteById(id);

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
			ProjectDto projectDto = null;
			if (client == null) {
				projectDto = new ProjectDto(projects.get(i), "", employeeRepository, companyRepository);
			} else {
				projectDto = new ProjectDto(projects.get(i), client.getName(), employeeRepository, companyRepository);
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
		ProjectDto projectDto = new ProjectDto(project, client.getName(), employeeRepository, companyRepository);

		return ResponseWrapper.getResponse(new RestResponse(projectDto));
	}
}
