//* Object de-structuring 
const course  = {
    courseName: "Chai aur JavaScript",
    price: "Free",
    Instructor: "Hitesh Choudhary"
}

//* lets de-structure it

const {Instructor} = course;

console.log(Instructor)
    // >> Hitesh Choudhary
//* I can also rename it accordingly

const {Instructor: tutor} = course;
console.log(tutor)
    // >> Hitesh Choudhary

