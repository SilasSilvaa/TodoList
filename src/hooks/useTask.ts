import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContexts";


export function useTask() {

    const { tasks } = useContext(TaskContext)


    const tasksAsFineshed = tasks.filter((task) => {
        if (task.completed) {
            return {
                id: task.id,
                description: task.description,
                created: task.created,
                completed: task.completed
            }
        }
    })

    const taskIsProgress = tasks.filter((task) => {
        if (!task.completed) {
            return {
                id: task.id,
                description: task.description,
                created: task.created,
                completed: task.completed
            }
        }
    })

    return {
        tasksAsFineshed,
        taskIsProgress
    }

}