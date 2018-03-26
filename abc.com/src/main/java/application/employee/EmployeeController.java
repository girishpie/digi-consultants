package application.employee;

import java.util.ArrayList;
import java.util.List;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.eclipse.jetty.http.HttpHeader;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import application.company.Company;
import application.company.CompanyRepository;
import application.dms.DocumentRepository;

import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	
	@Autowired
	private final EmployeeRepository employeeRepository;
	@Autowired
	private final CompanyRepository companyRepository;
	@Autowired
    private final DocumentRepository documentRepository;
	
	EmployeeController(EmployeeRepository employeeRepository, CompanyRepository companyRepository, DocumentRepository documentRepository) {
        this.employeeRepository = employeeRepository;
        this.companyRepository = companyRepository;
        this.documentRepository = documentRepository;
    }
	
	@PreAuthorize("hasAuthority('CREATE_EMPLOYEE')")
    @RequestMapping(value = "/{companyId}", headers = "content-type=multipart/*", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable("companyId") String companyId , @RequestPart("inputStr") String inputStr, @RequestPart("file")  MultipartFile file ) {
		Company company = companyRepository.findById(companyId);
        if(company == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "COMPANY_NOT_FOUND", companyId));

        }
        try {
        	Employee input = new ObjectMapper().readValue(inputStr, Employee.class);
        
	        if(input.getFirstname() != null && !input.getFirstname().isEmpty()) {
	        	if(file != null) {
		        	try {
		            	String id = documentRepository.storeDocument(file.getOriginalFilename(),
		                    file.getContentType(),
		                    file.getInputStream());
		            	
		            	input.setImgId(id);
		            } catch (IOException e) {
		                e.printStackTrace();
		                return ResponseWrapper.getResponse(new RestError(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR));
		            }
	        	}
		        Employee employee = new Employee(input.getImgId(), input.getFirstname(), input.getLastname(), input.getDOB(), input.getGender(), input.getRole(), input.getEmail(),
		    			input.getAddress(), input.getCity(), input.getCountry(), input.getMobile(), input.getTelephone(), input.getCompanyId());
		       // employee.addProject(input.getProjectIds().get(0));
		        Employee emp = employeeRepository.save(employee);
		        company.addEmployee(emp.getId());
		        companyRepository.save(company);
		        return ResponseWrapper.getResponse(new RestResponse(emp.getId()));
	    	}else {
	    		return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST,"EMPLOYEE_NAME_NULL"));
	    	}
        
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseWrapper.getResponse(new RestError(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR));
        }
        
    }

    @PreAuthorize("hasAuthority('DELETE_EMPLOYEE')")
    @RequestMapping(value = "/{id}",  method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	Employee employee = employeeRepository.findById(id);
        RestError restError ;
        if(employee == null){
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "EMPLOYEE_NOT_FOUND", id));
        }
        Company company = companyRepository.findById(employee.getCompanyId());
        if(company != null){
            company.deleteEmployee(id);
            companyRepository.save(company);
         }
        long res = employeeRepository.deleteById(id);

        return ResponseWrapper.getResponse( new RestResponse(id));

    }
    
    @PreAuthorize("hasAuthority('UPDATE_EMPLOYEE')")
    @RequestMapping(value = "/{empId}", headers = "content-type=multipart/*", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable("empId") String empId, @RequestPart("inputStr") String inputStr, @RequestPart("file")  MultipartFile file){
    	Employee employee = employeeRepository.findById(empId);
        if(employee == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "EMPLOYEE_NOT_FOUND", empId));
        }
        try {
        	Employee input = new ObjectMapper().readValue(inputStr, Employee.class);
	        if(input.getFirstname() != null && !input.getFirstname().isEmpty()) {
	        	if(file != null) {
		        	try {
		            	String id = documentRepository.storeDocument(file.getOriginalFilename(),
		                    file.getContentType(),
		                    file.getInputStream());
		            	
		            	employee.setImgId(id);
		            } catch (IOException e) {
		                e.printStackTrace();
		                return ResponseWrapper.getResponse(new RestError(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR));
		            }
	        	}
		        employee.setFirstname(input.getFirstname());
		        employee.setLastname(input.getLastname());
		        employee.setEmail(input.getEmail());
		        employee.setDOB(input.getDOB());
		        employee.setGender(input.getGender());
		        employee.setRole(input.getRole());
		        employee.setCountry(input.getCountry());
		        employee.setAddress(input.getAddress());
		        employee.setCity(input.getCity());
		        employee.setMobile(input.getMobile());
		        employee.setTelephone(input.getTelephone());
		        employee.setCompanyId(input.getCompanyId());
		        employee.update();
		        employee = employeeRepository.save(employee);
		        return ResponseWrapper.getResponse(new RestResponse(employee));
	        }else {
	    		return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST,"EMPLOYEE_NAME_NULL"));
	    	}
    	} catch (IOException e) {
            e.printStackTrace();
            return ResponseWrapper.getResponse(new RestError(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }

    @PreAuthorize("hasAuthority('READ_EMPLOYEE')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Employee> employees = employeeRepository.findAll();
        
        if (employees.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "EMPLOYEES_NOT_FOUND"));
         }
        List<EmployeeDto> employeeDtos = new ArrayList<EmployeeDto>();
        for(int i = 0; i < employees.size(); i++ ) {
        	 Company company = companyRepository.findById(employees.get(i).getCompanyId());
        	EmployeeDto employeeDto = new EmployeeDto(employees.get(i), company.getCompanyName());
            employeeDtos.add(employeeDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(employeeDtos));

    }
        
    @PreAuthorize("hasAuthority('READ_EMPLOYEE')")
    @RequestMapping(value = "/{projectId}",method = RequestMethod.GET)
    public ResponseEntity<?> getAllEmployeeByProject(@PathVariable("projectId") String projectId) {
        List<Employee> employees = employeeRepository.findByProjectId(projectId);
        
        if (employees.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "EMPLOYEES_NOT_FOUND"));
         }
        List<EmployeeDto> employeeDtos = new ArrayList<EmployeeDto>();
        for(int i = 0; i < employees.size(); i++ ) {
        	 Company company = companyRepository.findById(employees.get(i).getCompanyId());
        	EmployeeDto employeeDto = new EmployeeDto(employees.get(i), company.getCompanyName());
            employeeDtos.add(employeeDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(employeeDtos));

    }

}
