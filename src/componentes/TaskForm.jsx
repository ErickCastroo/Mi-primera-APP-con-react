import {useContext, useState} from 'react'
import { Toaster, toast } from 'sonner'
import {TaskContext} from '../context/TaskContext'
import { task } from '../Data/tasks';

function TaskForm() {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    
    const {creatTask} = useContext(TaskContext)

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(titulo != "")
        {
            creatTask({
                titulo,
                descripcion
            });
            setTitulo ('');
            setDescripcion ('');
        }
    }

    const agregarToast = () =>
    {
        if(titulo != ""){
            toast.success('Se agrego corectamente')
        }

    }

return  (
        <div className='max-w-md mx-auto'>
            <form className='bg-slate-700 p-10 mb-3 text-white' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold mb-3'>Crear tarea</h1>
                <input placeholder='Escribe tu tarea'
                onChange={(e)=> {setTitulo(e.target.value)}}
                value={titulo}
                className='bg-slate-200 text-black p-3 w-full mb-2'
                autoFocus
                /> 
    
                <textarea placeholder='Escribe la descripcion de tu tarea' onChange={(e) => {setDescripcion(e.target.value)}}
                value={descripcion}
                className='bg-slate-200 text-black p-3 w-full mb-2'

                />
    
                <Toaster />
                <button  onClick={agregarToast} className='bg-indigo-500 px-3 rounded-sm py-1'>Guardar</button>
                
            </form>
        </div>
        )
}

export default TaskForm