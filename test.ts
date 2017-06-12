namespace Geometry{
  interface Idrawable{
    draw(color : string);
  }
  export interface IMoveable{
    doMove(location: number[]);
  }
  export class Rectangle implements IMoveable{
    XLocation : number;
    YLocation :number;
    doMove(location : number[]){
      this.XLocation = location[0];
      this.YLocation = location[1];
      var myVar = new Measure();
      myVar.Area(this);
    }
  }

   class Measure{
     Area(rect : IMoveable){
      return rect.doMove([1,2]);
    }
  }
}
