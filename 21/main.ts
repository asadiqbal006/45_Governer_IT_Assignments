//Defining an interface of a student
interface student {
  name: string;
  class: number;
  section: string;
  rollNumber: number;
}

//creating an object of student's information
let studentInformation: student = {
  name: "Asad Iqbal",
  class: 11,
  section: "A",
  rollNumber: 15,
};

//Printing the object with the information

console.log(studentInformation);
