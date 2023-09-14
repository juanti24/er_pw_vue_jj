<template>
    <div>
  <fieldset>
    <legend>Ingresar Profesor</legend>

    <form>
      <div class="input-group mb-3">
        <span class="input-group-text" id="codigo">Cedula: </span>
        <input type="text" class="form-control" v-model="codigo" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="profesor">Nombre: </span>
        <input type="text" class="form-control" v-model="profesor" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="numCreditos">Apellido: </span>
        <input type="text" class="form-control" v-model="numCreditos" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="nombre">Fecha de Nacimiento: </span>
        <input type="text" class="form-control" v-model="nombre" required />
      </div>

      <div>
        <button class="btn btn-outline-info" type="button" @click="registrarProfesor">REGISTRAR</button>
      </div>
    </form>
    <br />
    <div v-if="mensaje" class="alert alert-info" role="alert">
      {{ mensaje }}
    </div>
  </fieldset>
  </div>

</template>

<script>
import {insertarProfesorFachada} from '../helpers/procesarProfesores'
export default {
    data(){
        return{
            cedula: null,
            apellido: null,
            fechaNacimiento: null,
            nombre:null,
            mensaje: ""
        }
    },
    methods:{
        registrarProfesor(){
            const materia={
                cedula:this.cedula,
                apellido: this.apellido,
                fechaNacimiento : this.fechaNacimiento,
                nombre: this.nombre
            }
            const response = insertarProfesorFachada(profesor)
            if(response != null){
                this.mensaje = "Ingresado correctamente"
                this.cedula = null
                this.apellido = null
                this.fechaNacimiento = null
                this.nombre = null
            }else{
                this.mensaje = "Ocurrio un error"
            }
        }
    }
}
</script>

<style scoped>
fieldset {
  height: fit-content;
  width: fit-content;
  margin: auto;
}
input-group mb-3 span, input{
  margin: auto;
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  align-content: center;
  display: block;
  
}
form{
    width: 400px;
}
button {
  margin-top: 25px;
  background-color:darkcyan;
  font-family: 'Courier New', Courier, monospace;
  color: white;
}
.alert{
  margin-top: 25px;
  background-color: aquamarine;
  padding: 15px;
  width: fit-content;
  text-align: center;
  margin-left: 95px;
}
</style>