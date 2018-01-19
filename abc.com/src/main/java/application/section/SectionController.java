package application.section;

import application.BoQ.BoQ;
import application.BoQ.BoQRepository;
import application.client.Client;
import application.client.ClientDto;
import application.company.Company;
import application.product.Product;
import application.product.ProductRepository;
import application.project.Project;
import application.project.ProjectDto;
import application.section.SectionRepository;
import application.specification.Specification;
import application.specification.SpecificationRepository;
import application.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/section")
public class SectionController {

	@Autowired
    private final SectionRepository sectionRepository;
    @Autowired
	private final BoQRepository boqRepository;
    @Autowired
	private final SpecificationRepository specificationRepository;
    @Autowired
	private final ProductRepository productRepository;
    
    SectionController(SectionRepository sectionRepository, BoQRepository boqRepository, SpecificationRepository specificationRepository, ProductRepository productRepository ) {
        this.sectionRepository = sectionRepository;
        this.boqRepository = boqRepository;
        this.specificationRepository = specificationRepository;
        this.productRepository = productRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_SECTION')")
    @RequestMapping(value = "/{boqId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String boqId , @RequestBody Section input ) {
        BoQ boq = boqRepository.findById(boqId);
        if(boq == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "BOQ_NOT_EXISTS", boqId));

        }
        if(input.getSectionName() != null && !input.getSectionName().isEmpty()) {
	        Section section = new Section(input.getSectionName(), boqId);
	        Section sec = sectionRepository.save(section);
	        boq.addSection(sec.getId());
	        boqRepository.save(boq);
	        return ResponseWrapper.getResponse(new RestResponse(sec.getId()));
        }
        else
        {
        	return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST,"SECTION_NAME_NULL"));
        }
    }

    @PreAuthorize("hasAuthority('DELETE_SECTION')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	Section section = sectionRepository.findById(id);
        RestError restError ;
        if(section == null){
            return ResponseWrapper.getResponse( new RestError( HttpStatus.NOT_FOUND, "SECTION_NOT_FOUND", id));
        }
        BoQ boq = boqRepository.findById(section.getBoqId());
        if(boq != null){
        	 boq.deleteSection(id);
             boqRepository.save(boq);
        }
        long res = sectionRepository.deleteById(id);
       
        return ResponseWrapper.getResponse( new RestResponse(id));

    }
    
    //Update Specific section
    @PreAuthorize("hasAuthority('UPDATE_SECTION')")
    @RequestMapping(value = "/{sectionId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String sectionId, @RequestBody Section input){
        Section section = sectionRepository.findById(sectionId);
        if(section == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "SECTION_NOT_FOUND" ,  sectionId));
        }

        if(input.getSectionName() != null && !input.getSectionName().isEmpty()) {
	        section.setSectionName(input.getSectionName());
	        section.setBoqId(input.getBoqId());
	       
	        section.update();
	        section = sectionRepository.save(section);
	        return ResponseWrapper.getResponse(new RestResponse(section));
        } 
        else
        {
        	return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST,"SECTION_NAME_NULL"));
        }
    }

    @PreAuthorize("hasAuthority('READ_SECTION')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Section> sections = sectionRepository.findAll();
        List<SectionDto> sectionDtos = new ArrayList<SectionDto>();
        
        if (sections.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "SECTIONS_NOT_FOUND"));
         }
        for(int i = 0; i < sections.size(); i++ ) {
        	List<String> productNames = new ArrayList<String>();
        	if(!sections.get(i).getProductIds().isEmpty()) {
	        	for(int j =0; j < sections.get(i).getProductIds().size(); j++) {
	        		Product product = productRepository.findById(sections.get(i).getProductIds().get(j));
	        		productNames.add(product.getName());
	        	}
        	}
        	String specName = ""; 
        	if(sections.get(i).getSpecId() != null) {
        		Specification specification = specificationRepository.findById(sections.get(i).getSpecId());
        		specName = specification.getSpecificationName();
        	}
        	SectionDto sectionDto = new SectionDto(sections.get(i), specName , productNames);
        	
        	sectionDtos.add(sectionDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(sectionDtos));

    }

    @PreAuthorize("hasAuthority('READ_SECTION')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	Section section = sectionRepository.findById(id);
        if (section == null) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "SECTION_NOT_FOUND", id));
        }
    	List<String> productNames = new ArrayList<String>();
    	if(!section.getProductIds().isEmpty()) {
	    	for(int j =0; j < section.getProductIds().size(); j++) {
	    		Product product = productRepository.findById(section.getProductIds().get(j));
	    		productNames.add(product.getName());
	    	}
    	}
    	String specName = ""; 
    	if(section.getSpecId() != null) {
    		Specification specification = specificationRepository.findById(section.getSpecId());
    		specName = specification.getSpecificationName();
    	}
    	SectionDto sectionDto = new SectionDto(section, specName, productNames);

       
        return ResponseWrapper.getResponse( new RestResponse(sectionDto));
    }
}
