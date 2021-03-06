package application.section;

import java.util.ArrayList;
import java.util.List;

public class SectionDto {
	
	private String id;
	private String sectionName;
	private List<String> drawingIds = new ArrayList<String>();
	private String boqId;
	private String specificationName;
	private String specId;
	private List<String> productNames = new ArrayList<String>();
	private int NoOfProducts;
  
	public SectionDto(Section section,String specId, String specificationName, List<String> productNames, int NoOfProducts) {
		this.id = section.getId();
		this.sectionName = section.getSectionName();
		this.drawingIds = section.getDrawingIds();
		this.boqId = section.getBoqId();
		this.specificationName = specificationName;
		this.productNames = productNames;
		this.NoOfProducts = NoOfProducts;
		this.specId = specId;
	}

	
	
	public String getSpecId() {
		return specId;
	}



	public void setSpecId(String specId) {
		this.specId = specId;
	}



	public int getNoOfProducts() {
		return NoOfProducts;
	}



	public void setNoOfProducts(int noOfProducts) {
		NoOfProducts = noOfProducts;
	}



	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getSectionName() {
		return sectionName;
	}


	public void setSectionName(String sectionName) {
		this.sectionName = sectionName;
	}


	public List<String> getDrawingIds() {
		return drawingIds;
	}


	public void setDrawingIds(List<String> drawingIds) {
		this.drawingIds = drawingIds;
	}


	public String getBoqId() {
		return boqId;
	}


	public void setBoqId(String boqId) {
		this.boqId = boqId;
	}

	public String getSpecificationName() {
		return specificationName;
	}

	public void setSpecificationName(String specificationName) {
		this.specificationName = specificationName;
	}

	public List<String> getProductNames() {
		return productNames;
	}

	public void setProductNames(List<String> productNames) {
		this.productNames = productNames;
	}
	
	
}
