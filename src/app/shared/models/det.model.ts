export class Det{
    id: number;
    name:string;
    status: boolean;

     
      constructor(id:number, name: string){
          this.id=id;
          this.name=name;
          Math.random()>0.5 ? this.status= true : this.status=false;
      }
    
}
