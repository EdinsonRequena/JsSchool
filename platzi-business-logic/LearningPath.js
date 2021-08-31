class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
    addCourse(newCourse) {
        let courses = this.courses
        let res = Boolean
        for(let course of courses) {
            if(course === newCourse) {
                res = false
                break
            } else res = true
        }
        res != false
            ? courses.push(newCourse) && console.log(`The course ${newCourse} was adedd`)
            : console.log(`The course ${newCourse} already exists`)
        return courses
    }
    updateCourseName(oldName, newName) {
        let courses = this.courses
        let res
        if(courses.indexOf(newName) != -1) {
            console.log(`The ${newName} course already exists`)
            return courses
        } else {
            for(let course of courses) {
                if (course === oldName) {
                    courses.splice(courses.indexOf(course), 1, newName)
                    res = true
                    break
                } else res = false
            }
        }
        res === true
            ? console.log(`The ${oldName} name course was update for ${newName} course`)
            : console.log(`The ${oldName} course was not found`)
        return courses
    }
    readAllCourses() {
        let courses = this.courses
        return console.log(`The courses list is ${courses}`);
    }
    readCourse(name) {
        let courses = this.courses
        let res = Boolean
        for (let course of courses) {
            if(course === name) { res = true; break }
            else res = false
        }
        res != false
            ? console.log(`The ${name} course exist in the learnig path`)
            : console.log(`The ${name} course was not found`)
        return courses
    }
    deleteCourseWithMap(name) {
        /*
        This method working, but not generate console.log
        This method generate a new array
        */
        let courses = this.courses
        let deleteCourse = courses.map(course => {
            course === name
            ? courses.splice(courses.indexOf(course), 1)
            : null
        })
        return deleteCourse
    }

    deleteCourse(name){
        /*
        This method working better than the other one
        This method apply the in place algorithm
        */
        let res = Boolean
        let courses = this.courses
        for (let course of courses) {
            if(course === name){
                courses.splice(courses.indexOf(course), 1)
                res = true
                break
            } else res = false
        }
        res != false
            ? console.log(`The ${name} course was deleted`)
            : console.log(`The ${name} course was not found`)
        return courses
    }
}