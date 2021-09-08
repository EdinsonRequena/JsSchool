class Student {
    constructor({
        name,
        lastName,
        age,
        email,
        userName = 'defaultUserName',
        learningPath = [],
        inProgressCourse = [],
        donedCourse = [],
        facebook = undefined,
        twitter = undefined,
        instagram = undefined
        })
        {
        this.inProgressCourse = inProgressCourse
        this.userName = userName;
        this.name = name;
        this.socialMedia = {
            facebook,
            twitter,
            instagram
            }
        this.learningPath = learningPath
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.donedCourse = donedCourse;
    }

    takeCourse(course) {
        if(this.inProgressCourse.indexOf(course) === -1) { // if the course is not in the array
            this.inProgressCourse.push(course)
            console.log(`The ${course} course was taken`)
            return this.inProgressCourse
        } else {
            console.log(`The ${course} course was already taken`)
            return this.inProgressCourse
        }
    }

    finishCourse(newCourse) {
        let donedCourse = this.donedCourse

        if(this.inProgressCourse.indexOf(newCourse) === -1) {
            console.log(`The ${newCourse} course was not taken. You don't finish a course that not have been start`)
            return this.inProgressCourse
        } else {
        if(donedCourse.indexOf(newCourse) != -1) { // if the course exists
            console.log(`The ${newCourse} course already finished`)
            return donedCourse
        } else {
            donedCourse.push(newCourse)
            console.log(`Congrats!!! You doned the ${newCourse} course`)
            return donedCourse
        }
    }
}
    editUsername(newUsername) {
        if(newUsername === this.userName) {
            console.log('The new user name is the same')
            return console.log(`Actual user name ${this.userName}
            The user name that you type: ${newUsername}
            `)
        } else {
            console.log(`The user name ${this.userName} was changed for ${newUsername}`)
            this.userName = newUsername
            return this.userName
        }
    }
    editEmail(newEmail){
        if(newEmail === this.email) {
            console.log('The new email is the same')
            return console.log(`Actual email ${this.email}
            The user name that you type: ${newEmail}
            `)
        } else {
            console.log(`The user name ${this.email} was changed for ${newEmail}`)
            this.email = newEmail
            return this.email
        }
    }
}