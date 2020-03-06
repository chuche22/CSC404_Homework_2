//this is similar to the main file, but is used for testing

"use strict";

const HomePage = require("./HomePage");
const GradeInput = require("./GradeInput");
const QualifiedStudents = require("./QualifiedStudents");

//Array of names for testing
let names = [""," ","Mark Cameron Richmond","Si Hu","Zachary Colangelo","Abcdefghijklmnop Qrstuvwxyzabcdefghijklmnopshidbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"];

//Array of grades to facilitate testing by checking against. Letter Grade, Upper Bound, Lower Bound, Outside of boundry.
let grades = ["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F","Z"];

//All of these will be called multiple times with varing inputs to test that the functions return the expected output
HomePage.displayInfo();

var name, csc141, csc142, csc240, csc241, gpa141, gpa142, gpa240, gpa241, gpa;

function convertGrade(grade) {
    switch (grade) {
        case 'A':
           return 4.0;
           break;
        case 'A-':
           return 3.67;
           break;
        case 'B+':
           return 3.33;
           break;
        case 'B':
           return 3.0;
           break;
        case 'B-':
           return 2.67;
           break;
        case 'C+':
           return 2.33;
           break;
        case 'C':
           return 2;
           break;
        case 'C-':
           return 1.67;
           break;
        case 'D+':
           return 1.33;
           break;
        case 'D':
           return 1;
           break;
        case 'D-':
            return 0.67
        case 'F':
           return 0;
           break;
        default:
           return -1;
        }
}

//use names and grades arrays to randomly test values
var i;
for (i = 0; i < 10; i++){
   name = names[Math.floor((Math.random() * 5) + 1)];
   csc141 = grades[Math.floor((Math.random() * 12) + 1)];
   csc142 = grades[Math.floor((Math.random() * 12) + 1)];
   csc240 = grades[Math.floor((Math.random() * 12) + 1)];
   csc241 = grades[Math.floor((Math.random() * 12) + 1)];
   gpa141 = convertGrade(csc141);
   gpa142 = convertGrade(csc142);
   gpa240 = convertGrade(csc240);
   gpa241 = convertGrade(csc241);

   gpa = ((gpa141 + gpa142 + gpa240 + gpa241)/4);
   console.log("Name: " + name);
   console.log("GPA: " + gpa.toFixed(1));
    if (gpa < 2.5)
      console.log("This GPA does not meet the requirement of 2.5" + "\n");
   else
      console.log("This GPA meets the requirement of 2.5" + "\n");
}
