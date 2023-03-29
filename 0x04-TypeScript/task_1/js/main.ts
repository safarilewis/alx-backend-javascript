export interface Teacher{
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployment: boolean
    yearsOfExperience: number
    location: string
    [index:string]: any
}

export interface Directors extends Teacher{
    numberOfReports: number
}

export interface printFunction{
    (firstName: string, lastName: string): string;
};

export function printTeacher(firstName: string, lastName: string){
    return `${firstName[0] + lastName}`
};

export interface StudentClassConstructor{
    (firstName: string, lastName: string): string;
};

export interface StudentClass{
    workOnHomeWork(): string;
    displayName(): string;
}

export class StudentClass{
    firstName: string
    lastName: string

    constructor(firstName: string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork(){
        return 'Currently working';
    }

    displayName(){
        return `${this.firstName}`;
    }
}