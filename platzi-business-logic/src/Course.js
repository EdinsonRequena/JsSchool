
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
    }) {
        this.name = name
        this.clases = clases
        this.modules = modules
    }
}

export default Course