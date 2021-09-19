import Student from "./Student";

class BasicStudent extends Student {
    constructor(props) {
        super(props)
    }

    takeCourse(course) {
        if(course.isStartupCourse) console.log(`Platzi is better when you take the Expert suscription. Do it now!!!`)
        else {
            if(this.inProgressCourse.indexOf(course) === -1) { // if the course is not in the array
                this.inProgressCourse.push(course)
                console.log(`The ${course.name} course was taken`)
                return this.inProgressCourse
            } else {
                console.log(`The ${course.name} course was already taken`)
                return this.inProgressCourse
            }
        }
    }
}

export default BasicStudent