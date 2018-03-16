package application.auth.user;

public class OverviewDto {

	int totalCompany;
	int totalProjects;
	int totalUsers;
	int totalDocuments;
	
	public OverviewDto(int totalCompany, int totalProjects, int totalUsers, int totalDocuments) {
		super();
		this.totalCompany = totalCompany;
		this.totalProjects = totalProjects;
		this.totalUsers = totalUsers;
		this.totalDocuments = totalDocuments;
	}
	
	public OverviewDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getTotalCompany() {
		return totalCompany;
	}
	public void setTotalCompany(int totalCompany) {
		this.totalCompany = totalCompany;
	}
	public int getTotalProjects() {
		return totalProjects;
	}
	public void setTotalProjects(int totalProjects) {
		this.totalProjects = totalProjects;
	}
	public int getTotalUsers() {
		return totalUsers;
	}
	public void setTotalUsers(int totalUsers) {
		this.totalUsers = totalUsers;
	}
	public int getTotalDocuments() {
		return totalDocuments;
	}
	public void setTotalDocuments(int totalDocuments) {
		this.totalDocuments = totalDocuments;
	}
	
	
}
