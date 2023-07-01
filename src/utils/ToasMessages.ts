import { toast } from "react-toastify";


export const toastContent = {
    inputIsEmpty: 'Preencha uma tarefa!',
    createdTask: 'Tarefa Cadastrada!',
    limitCreateTasks: 'Limite de tarefas atingido!',
    taskExits: 'Tarefa já cadastrada!',
    deletedTask: 'Tarefa excluida!',
    taskEditing: 'Tarefa Editada!'
};

export function toastMessages(message: string) {

    switch (message) {

        case toastContent.createdTask:
            return toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
            });

        case toastContent.deletedTask:
            return toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
            });

        case toastContent.inputIsEmpty:
            return toast.error(message, {
                position: toast.POSITION.TOP_RIGHT,
            });

        case toastContent.taskExits:
            return toast.error(message, {
                position: toast.POSITION.TOP_RIGHT,
            });

        case toastContent.taskEditing:
            return toast.info(message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        case toastContent.limitCreateTasks:
            return toast.info(message, {
                position: toast.POSITION.TOP_RIGHT,
            });

        default:
            break;
    }
}