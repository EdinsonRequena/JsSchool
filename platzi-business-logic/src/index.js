import LearningPath from "./LearningPath";
import Student from "./Student";
import FreeStudent from "./FreeStudent";
import BasicStudent from "./BasicStudent";
import ExpertStudent from "./ExpertStudent";
import Course from './Course'


const Python = new Course({
    name: 'Python Course',
    modules: {
        module1: ['clase 1', 'clase 2', 'clase 3'],
        module2: ['clase 2', 'clase 3', 'clase 4'],
        module3: ['clase 5', 'clase 6', 'clase 7'],
        module4: ['clase 8', 'clase 9', 'clase 10']
    }
})

const BasicPrograming = new Course({
    name: 'Basic Progaming Course',
    isFree: true,
    modules: {
        module1: ['clase 1', 'clase 2', 'clase 3'],
        module2: ['clase 2', 'clase 3', 'clase 4'],
        module3: ['clase 5', 'clase 6', 'clase 7'],
        module4: ['clase 8', 'clase 9', 'clase 10']
    }
})

const StartupCourse = new Course({
    name: 'Startup Course',
    isStartupCourse: true,
    modules: {
        module1: ['clase 1', 'clase 2', 'clase 3'],
        module2: ['clase 2', 'clase 3', 'clase 4'],
        module3: ['clase 5', 'clase 6', 'clase 7'],
        module4: ['clase 8', 'clase 9', 'clase 10']
    }
})



const dataScience = new Carrer({
    name: 'Data Science',
    courses: [ Python.name, BasicPrograming.name, 'R', 'Spark' ],
})


const javascriptSchool = new Carrer({
    name: 'Data Science',
    courses: [ BasicPrograming.name, 'ReactJs', 'React Native' ],
})

const dataScience = new LearningPath({
    name: 'Data Science',
    courses: [ 'Python', 'R', 'Spark' ],
})

const Andrea = new BasicStudent({
    name: 'Andrea',
    lastName: 'Vinas',
    userName: 'andreavinas',
    age: 20,
    email: 'andrea@email.com',
    learningPath: [javascriptSchool, dataScience],
});