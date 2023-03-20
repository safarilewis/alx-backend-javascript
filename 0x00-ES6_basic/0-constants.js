//Function to instantiate variables using const
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}
//getLast function
export function getLast() {
    return ' is okay';
}
//Function to instatiate variables using let
export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}
