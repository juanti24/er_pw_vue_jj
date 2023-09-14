import axios from "axios"

//Fachadas

export const insertarProfesorFachada = async (body) =>{
    insertarProfesor(body)
}

export const buscarProfesorIdFachada = async (body) =>{
   return await buscarProfesorId(body)
}

export const buscarTodasProfesoresFachada = async () =>{
   return await buscarTodasProfesores()
}

export const eliminarProfesorFachada = async (body) =>{
    return await eliminarProfesor(body);
} 


//CRUD
const insertarProfesor = (body) =>{
    axios.post(`http://localhost:8081/API/V1.0/Matricula/profesores`, body).then(r=>r.data)
}


const buscarProfesorId = (codigo) =>{
    const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/profesores/Completa/${cedula}`).then(r=>r.data)
    return data
}

const buscarTodasProfesores = () =>{
    const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/profesores`).then(r=>r.data)
    return data;
}

const eliminarProfesor = (codigo) =>{
    axios.delete(`http://localhost:8081/API/V1.0/Matricula/profesores/${cedula}`).then(r=>r.data)
}
