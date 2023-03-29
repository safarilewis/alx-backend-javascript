export interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: 'Lewis',
    lastName: 'Safari',
    age: 19,
    location: 'Nairobi',
}

const student2: Student = {
    firstName: 'Python',
    lastName: 'Bot',
    age: 199,
    location: 'server',
}

const studentList: Array<Student> = [student1, student2]
export const displayStudents = (students: Array<Student>):void =>{

}