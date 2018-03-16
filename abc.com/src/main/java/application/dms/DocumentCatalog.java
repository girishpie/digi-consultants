package application.dms;

import application.common.BasicInfo;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotNull;

/**
 * Created by gipai on 9/30/2017.
 */
public class DocumentCatalog extends BasicInfo  {
    @Id
    private String id;
    private String displayName;
    private List<Version> versions = new ArrayList<Version>();
    private String projectId;
    @NotNull
    private String type;

    public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public List<Version> getVersions() {
        return versions;
    }

    public void setVersions(List<Version> versions) {
        this.versions = versions;
    }

    public void addVersion(Version version){
        versions.add(version);
    }

    public boolean deleteVersion(int versionId){
        for(int i= 0 ; i< versions.size(); i++ ){
            if(versions.get(i).getVersionNumber() == versionId){
                versions.remove(i);
                return true;
            }
        }
        return false;
    }

    public Version getLatestVersion() {
        return versions.get(versions.size()-1);
    }


    public Version getVersion(int versionId){
        for(int i= 0 ; i< versions.size(); i++ ){
            if(versions.get(i).getVersionNumber() == versionId){
                return versions.get(i);
            }
        }
        return null;
    }

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
    
}
