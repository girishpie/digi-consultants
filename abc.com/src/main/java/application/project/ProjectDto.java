package application.project;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import application.company.Company;
import application.company.CompanyRepository;
import application.employee.Employee;
import application.employee.EmployeeDto;
import application.employee.EmployeeRepository;

public class ProjectDto {

	private String id;
	private String projectName;
	private String jobNumber;
	private String siteAddress;
	private Date startDate;
	private String description;
	private String clientName;
	private List<EmployeeDto> employees = new ArrayList<EmployeeDto>();
	
 	public ProjectDto(Project project, String clientName,
		EmployeeRepository employeeRepository,
		CompanyRepository companyRepository) {
		this.id = project.getId();
		this.projectName = project.getProjectName();
		this.jobNumber = project.getJobNumber();
		this.siteAddress = project.getSiteAddress();
		this.startDate = project.getStartDate();
		this.description = project.getDescription();
		this.clientName = clientName;
		List<String> emps = project.getEmployeeIds();
		for(int i= 0; i < emps.size(); i++) {
			Employee emp = employeeRepository.findById(emps.get(i));
			Company company = companyRepository.findById(emp.getCompanyId());
			EmployeeDto empDto = new EmployeeDto(emp,company.getCompanyName());
			this.employees.add(empDto);
		}
	}
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getJobNumber() {
		return jobNumber;
	}

	public void setJobNumber(String jobNumber) {
		this.jobNumber = jobNumber;
	}

	public String getSiteAddress() {
		return siteAddress;
	}

	public void setSiteAddress(String siteAddress) {
		this.siteAddress = siteAddress;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	
	public List<EmployeeDto> getEmployees() {
		return employees;
	}

	public void setEmployees(List<EmployeeDto> employees) {
		this.employees = employees;
	}


}
