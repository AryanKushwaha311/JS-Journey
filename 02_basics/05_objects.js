//OBJECT DESTRUCTURING

const course= {
    coursename: "JS in hindi",
    price : 999,
    courseInstructor : "Hitesh Choudhary"
}

//method-01
console.log(course.courseInstructor);

//method-02
const {courseInstructor} = course;     //(important)
console.log(courseInstructor);       

//method-03
const {courseInstructor : instructor} = course;
console.log(instructor);
