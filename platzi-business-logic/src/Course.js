class Course {
    constructor({
        name,
        modules = {
            module1: [],
            module2: [],
            module3: [],
            module4: []
        },
        clases = [],
        isFree = false,
        isStartupCourse = false
    }) {
        this.name = name
        this.clases = clases
        this.modules = modules
        this.isFree = isFree
        this.isStartupCourse = isStartupCourse
    }
}

export default Course