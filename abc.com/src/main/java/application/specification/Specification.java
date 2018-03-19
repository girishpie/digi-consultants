package application.specification;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class Specification extends BasicInfo{
	
	@Id
    private String id;
	private String specificationName;
	private String sectionId;
	private String sectionName;
	
	public String getSectionName() {
		return sectionName;
	}

	public void setSectionName(String sectionName) {
		this.sectionName = sectionName;
	}

	public String getSectionId() {
		return sectionId;
	}

	public void setSectionId(String sectionId) {
		this.sectionId = sectionId;
	}

	public Specification(String specificationName, String sectionId, String sectionName) {

		this.specificationName = specificationName;
		this.sectionId = sectionId;
		this.sectionName = sectionName ;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSpecificationName() {
		return specificationName;
	}

	public void setSpecificationName(String specificationName) {
		this.specificationName = specificationName;
	}
	
	public Specification() {

		super();
	}

}
