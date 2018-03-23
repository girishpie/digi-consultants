package application.BoQ;

import java.util.ArrayList;
import java.util.List;

public class BoQDto {

    private String id;
	private String departmentName;
	private List<String> sectionIds = new ArrayList<String>();
	private int version;
	private int totalVersions;
	private String projectNumber;
	private String projectName;
	private String boqNumber;
	
	public BoQDto(BoQ boQ, String departmentName, String projectNumber, String projectName, String boqNumber) {
		this.id = boQ.getId();
		this.departmentName = departmentName;
		this.sectionIds = boQ.getSectionIds();
		BoQVersion boQVersion = boQ.getLatestVersion();
		this.version = boQVersion.getVersionNumber();
		this.totalVersions = boQ.getVersions().size();
		this.projectNumber = projectNumber;
		this.projectName = projectName;
		this.boqNumber = boqNumber;
	}
	
	public String getBoqNumber() {
		return boqNumber;
	}

	public void setBoqNumber(String boqNumber) {
		this.boqNumber = boqNumber;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	

        
        public String getProjectNumber() {
		return projectNumber;
	}

	public void setProjectNumber(String projectNumber) {
		this.projectNumber = projectNumber;
	}

		public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public List<String> getSectionIds() {
		return sectionIds;
	}

	public void setSectionIds(List<String> sectionIds) {
		this.sectionIds = sectionIds;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}
        

	public int getTotalVersions() {
		return totalVersions;
	}

	public void setTotalVersions(int totalVersions) {
		this.totalVersions = totalVersions;
	}


}
