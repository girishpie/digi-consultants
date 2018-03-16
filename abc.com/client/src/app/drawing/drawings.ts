import {Injectable} from "@angular/core";
import {Drawing} from "./drawing";


@Injectable()
export class Drawings {

  private  drawings: Array<Drawing> = new Array<Drawing>();
  private  totalItems:number;

  public setDrawings(drawings: Array<Drawing>) {
    this.drawings = drawings;
  }
  public getDrawings(): Array<Drawing> {
    return this.drawings;
  }
   public deleteDrawing(drawingId: string) {
    let drawingFound: Drawing = this.drawings.find(drawing => drawingId === drawing.getId());
    const index: number = this.drawings.indexOf(drawingFound);
    if (index !== -1) {
      this.drawings.splice(index, 1);
      this.totalItems--;
    }
  }
 public addDrawing(drawing: Drawing) {
    this.drawings.push(drawing);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
