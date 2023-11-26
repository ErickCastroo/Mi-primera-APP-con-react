import{ createContext,useState,useEffect } from "react"
import {task as data} from '../Data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) 
{
    const [tasks, setTasks] = useState([]);

function creatTask(task) {
    setTasks([...tasks,{
    id:tasks.length,
    titulo:task.titulo,
    descripcion: task.descripcion 
    }])
}

function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id != taskId))
}

useEffect (()=>
{
    setTasks(data)
},[])

    return  (
            <TaskContext.Provider value={{ 
                tasks,
                deleteTask,
                creatTask
                }}>
                    {props.children}
            </TaskContext.Provider>
            )
}
