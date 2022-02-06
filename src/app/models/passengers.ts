export class Passengers{

    constructor(
        
        public name:string, 
        public gender:string, 
        public age:number,
        public seatNumber?:number,
        public isMealReqd?:boolean, 
        public pnrNumber?:number,
        public passengerId?:number 
    ){}


}