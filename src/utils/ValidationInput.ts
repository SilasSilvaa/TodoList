import { Task } from "../contexts/TaskContexts";
import { toastContent, toastMessages } from "./ToasMessages";


// Valida se o id é valido
export function checkValidId(tasks: Task[]): string {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const newId = String(randomNumber);
    const currentIds = tasks.map((task) => task.id);

    if (currentIds.includes(newId)) {
        return checkValidId(tasks);
    }

    return newId;
}


// Valida se o input é valido
export function checkIsValidInput(inputValue: string, tasks: Task[]) {

    const tasksDescription = tasks.map((task) => task.description.trimEnd());
    try {
        if (inputValue === '') {
            throw new Error(toastContent.inputIsEmpty);
        }

        if (tasks.length === 100) {
            throw new Error(toastContent.limitCreateTasks);
        }

        if (tasksDescription.includes(inputValue.trimEnd())) {
            throw new Error(toastContent.taskExits);
        }

        return true;
    } catch (err: any) {
        toastMessages(err.message);
        return false;
    }
}