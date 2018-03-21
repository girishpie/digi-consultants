package application.company;

import application.common.BasicInfo;

/**
 * Created by gipai on 9/26/2017.
 */

import application.department.Department;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Document
public class Company extends BasicInfo{

    @Id
    private String id;

    @NotNull
    private String companyName;
    private String address;
    private String contact;

    private List<String> employeeIds = new ArrayList<String>();
    private List<String> clientIds = new ArrayList<String>();
    private List<String> officeIds = new ArrayList<String>();

    private int noOfEmployee;
    private int noOfoffice;
    public Company() {}

    public Company(String companyName, String address, String contact) {
        this.companyName = companyName;
        this.address = address;
        this.contact = contact;
    }

    
    public int getNoOfEmployee() {
		return noOfEmployee;
	}

	public void setNoOfEmployee(int noOfEmployee) {
		this.noOfEmployee = noOfEmployee;
	}

	public int getNoOfoffice() {
		return noOfoffice;
	}

	public void setNoOfoffice(int noOfoffice) {
		this.noOfoffice = noOfoffice;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public void setId(String id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<String> getEmployeeIds() {
        return employeeIds;
    }

    public void setEmployeeIds(List<String> employeeIds) {
        this.employeeIds = employeeIds;
    }


	public List<String> getClientIds() {
		return clientIds;
	}

	public void setClientIds(List<String> clientIds) {
		this.clientIds = clientIds;
	}
    
    public void addClient(String clientIds){
        this.clientIds.add(clientIds);
    }

    public String getId(){
        return this.id;
    }

	public void deleteClient(String id2) {
		for (int i = 0; i < this.clientIds.size(); i++) {
            if (this.clientIds.get(i).equals(id2)) {
                this.clientIds.remove(i);
            }
        }		
	}

	public void deleteOffice(String id2) {
		for (int i = 0; i < this.officeIds.size(); i++) {
            if (this.officeIds.get(i).equals(id2)) {
                this.officeIds.remove(i);
            }
        }		
	}

	public void addOffice(String id2) {
		this.officeIds.add(id2);
	}

	public void addEmployee(String id2) {
		this.employeeIds.add(id2);
		
	}

	public void deleteEmployee(String id2) {
		for (int i = 0; i < this.employeeIds.size(); i++) {
            if (this.employeeIds.get(i) == id2) {
                this.employeeIds.remove(i);
            }
        }
	}

	public List<String> getOfficeIds() {
		return officeIds;
	}

	public void setOfficeIds(List<String> officeIds) {
		this.officeIds = officeIds;
	}

	public void addDepartment(String id2) {
		// TODO Auto-generated method stub
		
	}

	public void deleteDepartment(String id2) {
		// TODO Auto-generated method stub
		
	}
}