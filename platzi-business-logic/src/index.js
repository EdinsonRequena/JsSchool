import Carrer from "./LearningPath";
import Student from "./Student";
import Course from './Course'

const javascriptSchool = new Carrer({
    name: 'Javascript School',
    courses: [ 'js', 'node', 'react', 'vue', 'angular', 'svelte' ],
})

const dataScience = new Carrer({
    name: 'Data Science',
    courses: [ 'Python', 'R', 'Spark' ],
})

const Andrea = new Student({
    name: 'Andrea',
    lastName: 'Vinas',
    age: 20,
    email: 'andrea@email.com',
    learningPath: [javascriptSchool, dataScience],
});

const python = new Course({
    name: 'Python Course',
    modules: {
        module1: ['clase 1', 'clase 2', 'clase 3'],
        module2: ['clase 2', 'clase 3', 'clase 4'],
        module3: ['clase 5', 'clase 6', 'clase 7'],
        module4: ['clase 8', 'clase 9', 'clase 10']
    }
})