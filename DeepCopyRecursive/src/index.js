import deepCopy from "./DeepCopy";

const obj1 = {
    name: 'Andrea',
    lastName: 'Vinas',
    email: 'andre',
    age: 21,
    objectTest: {
        a: 'a',
        b: 'b',
        1: '1',
    },
    aprovedCourse: ['JavaScript', 'NodeJS', 'ReactJS'],
    addCourse(newCourse) {
        this.aprovedCourse.push(newCourse);
    }
}

const obj2 = deepCopy(obj1)