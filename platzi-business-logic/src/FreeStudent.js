import Course from "./Course";
import { Python, BasicPrograming, StartupCourse } from './index.js'
import Student from "./Student";

class FreeStudent extends Student {
    constructor(props) {
        super(props)
    }

    takeCourse(course) {
        if(course.isFree) {
            if(this.inProgressCourse.indexOf(course) === -1) { // if the course is not in the array
                this.inProgressCourse.push(course)
                console.log(`The ${course.name} course was taken`)
                return this.inProgressCourse
            } else {
                console.log(`The ${course.name} course was already taken`)
                return this.inProgressCourse
            }
        } else console.log(`Platzi is better when you take the Expert or Basic suscription. Do it now!!!`)
    }
}

export default FreeStudent