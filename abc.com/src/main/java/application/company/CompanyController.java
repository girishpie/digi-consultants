/**
 * Created by gipai on 9/26/2017.
 */
package application.company;

import application.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/company")
public class CompanyController {

    private final CompanyRepository companyRepository;


    @Autowired
    CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_COMPANY')")
    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<IResponse> add(@RequestBody Company input) {
    	if(input.getCompanyName() != null && !input.getCompanyName().isEmpty()) {
    		Company company = companyRepository.save(new Company(input.getCompanyName(),
    				input.getAddress()));
    		return ResponseWrapper.getResponse(new RestResponse( company.getId()));
    	}else {
    		return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST,"COMPANY_NAME_NULL"));
    	}
    }

    @PreAuthorize("hasAuthority('DELETE_COMPANY')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<IResponse> delete(@PathVariable String id) {
        long res = companyRepository.deleteById(id);
        return ResponseWrapper.getResponse( new RestResponse( id));
    }

    //Update Specific company
    @PreAuthorize("hasAuthority('UPDATE_COMPANY')")
    @RequestMapping(value = "/{companyId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String companyId, @RequestBody Company input){
        Company company = companyRepository.findById(companyId);
        if(company == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "COMPANY_UPDATE_FAIL",  companyId));
        }
        if(input.getCompanyName() != null && !input.getCompanyName().isEmpty()) {
	        company.setCompanyName(input.getCompanyName());
	        company.setAddress(input.getAddress());
	        company.update();
	        company = companyRepository.save(company);
	        return ResponseWrapper.getResponse(new RestResponse(company));
        }
        else
        {
        	return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST,"COMPANY_NAME_NULL"));
        }
    }
    
    @PreAuthorize("hasAuthority('READ_COMPANY')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<IResponse> getAll() {
        List<Company> companies = companyRepository.findAll();
        if (companies.isEmpty()) {
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "COMPANIES_NOT_FOUND"));
        }
        return ResponseWrapper.getResponse( new RestResponse( companies));
    }

    @PreAuthorize("hasAuthority('READ_COMPANY')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<IResponse> get(@PathVariable("id") String id) {
        Company company = companyRepository.findById(id);
        if (company == null) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "COMPANY_NOT_FOUND", id));

        }
        return ResponseWrapper.getResponse(  new RestResponse( company));
    }
}