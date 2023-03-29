export interface DirectorInterface{
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
};

export interface TeacherInterface{
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
};

export class Director implements DirectorInterface{
    workFromHome(): string {
        return 'Working from home'
    }
}