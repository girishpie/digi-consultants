import {Injectable} from "@angular/core";
import {Office} from "./office";


@Injectable()
export class Offices {

  private  offices: Array<Office> = new Array<Office>();
  private  totalItems: number;

  public setOffices (offices: Array<Office>) {
    this.offices = offices;
  }
  public getOffices(): Array<Office> {
    return this.offices;
  }

  public addOffice(office: Office) {
    this.offices.push(office);
    this.totalItems++;
  }

  public deleteOffice(id: string) {
    let officeFound: Office = this.offices.find(office => id === office.getId());
    const index: number = this.offices.indexOf(officeFound);
    if (index !== -1) {
      this.offices.splice(index, 1);
      this.totalItems--;
    }
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
