package application.BoQ;

import java.util.ArrayList;
import java.util.List;

public class BoQDto {

    private String id;
	private String departmentName;
	private List<String> sectionIds = new ArrayList<String>();
	private int version;
	private int totalVersions;
	private String projectId;
	private String projectName;
	
	public BoQDto(BoQ boQ, String departmentName, String projectId, String projectName) {
		this.id = boQ.getId();
		this.departmentName = departmentName;
		this.sectionIds = boQ.getSectionIds();
		BoQVersion boQVersion = boQ.getLatestVersion();
		this.version = boQVersion.getVersionNumber();
		this.totalVersions = boQ.getVersions().size();
		this.projectId = projectId;
		this.projectName = projectName;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
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
