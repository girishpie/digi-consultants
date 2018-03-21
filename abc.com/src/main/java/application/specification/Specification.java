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
	private String label;
	private String answer;
	
	
	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

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

	public Specification(String specificationName, String label, String answer) {

		this.specificationName = specificationName;
		this.label = label;
		this.answer = answer ;
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
