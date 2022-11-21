import { Measures } from "./measures.model";

export class Species {
  id: number; 
  phylumName: string; 
  familyName: string; 
  scientificName: string; 
  measures: Measures; 
  className: string; 

  constructor(id: number, phylumName: string, familyname: string, scientificName: string, className: string, measures: Measures){
    this.id = id; 
    this.phylumName = phylumName; 
    this.familyName = familyname; 
    this.scientificName = scientificName; 
    this.className = className;
    this.measures = measures;
  }
}
/*
class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor() {
    this.x = x;
    this.y = y;
  }
} */