import { getProf, getPerson, Person } from "./Person";
import {log} from "./utils"
import { Student } from "./Student";

let prof:Person = getProf("Larry", "Cai");
console.log(prof.getTitle()); 
log(getPerson());

let student:Student = new Student("Larry", "Cai");
log(student.getTitle());