package application.section;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class Section extends BasicInfo{

	    @Id
	    private String id;
	    private String sectionName;
	    private List<String> productIds = new ArrayList<String>();
	    private List<String> drawingIds = new ArrayList<String>();
	    private List<String> sectionIds = new ArrayList<String>();
	    private String specId;
	    private String boqId;
	    
	    public Section() {
	    	
	    }
		public Section(String sectionName, String boqId, String SpecId) {
			this.sectionName = sectionName;
			this.specId = SpecId;
			this.boqId = boqId;
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
		public List<String> getProductIds() {
			return productIds;
		}
		public void setProductIds(List<String> productIds) {
			this.productIds = productIds;
		}
		public List<String> getDrawingIds() {
			return drawingIds;
		}
		public void setDrawingIds(List<String> drawingIds) {
			this.drawingIds = drawingIds;
		}
		public String getSpecId() {
			return specId;
		}
		public void setSpecId(String specId) {
			this.specId = specId;
		}
		public String getBoqId() {
			return boqId;
		}
		public void setBoqId(String boqId) {
			this.boqId = boqId;
		}
		public void deleteProduct(String id2) {
			for (int i = 0; i < this.productIds.size(); i++) {
	            if (this.productIds.get(i).equals(id2)) {
	                this.productIds.remove(i);
	            }
	        }	
			
		}
		public void addProduct(String id2) {
			productIds.add(id2);
			
		}

}
