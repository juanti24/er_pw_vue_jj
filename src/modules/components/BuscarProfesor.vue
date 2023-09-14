<template>
    <div>
      <div id="divpag">
        <fieldset>
          <legend>Buscar Profesores</legend>
        </fieldset>
        <div>
          <button @click="buscarTodas" class="btn btn-outline-info">BUSCAR</button>
        </div>
  
        <div>
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">Cedula</th>
                <th scope="col">Nombre</th>
                <th scope="col">Ver</th>
                <th scope="col">Borrar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in lista" v-bind:key="item">
                <th scope="row">{{ item.cedula }}</th>
                <td class="table-info">{{ item.nombre }}</td>
                <td class="table-info"><button @click="buscarProfesor(item.cedula)">Ver</button></td>
                <td class="table-info"><button @click="eliminar(item.cedula)">Borrar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
  
      </div>
  
      <div class="componente2">
        <div class="input-group mb-3">
          <span class="input-group-text" id="codigo">Cedula: {{ cedula}} </span>
        </div>
  
        <div class="input-group mb-3">
          <span class="input-group-text" id="profesor">Nombre: {{ nombre }}</span>
        </div>
  
      </div>
  
      <div v-if="mensaje" class="alert alert-info" role="alert">
        {{ mensaje }}
      </div>
    </div>
  </template>
   
  <script>
  import { buscarProfesorIdFachada, buscarTodasProfesoresFachada, eliminarProfesorFachada } from '../helpers/procesarProfesores'
  export default {
    data() {
      return {
        cedula: null,
        nombre: null,
        mensaje: "",
        lista: []
      }
    },
    methods: {
      async buscarTodas() {
        const data = await buscarTodasProfesoresFachada()
        this.lista = data
        console.log(this.lista)
        return this.lista
      },
      async eliminar(cedula) {
        await eliminarProfesorFachada(cedula)
        this.msj = true
      },
      async buscarProfesor(cedula) {
        this.$emit("item", await buscarProfesorIdFachada(cedula));
      }
    }
  }
  </script>
   
  <style>
  table {
    margin-top: 20px;
    text-align: center;
    margin-left: 535px;
  }
  
  .componente2 {
    margin-top: 50px;
    font-family: 'Courier New', Courier, monospace;
    ;
  }
  
  input-group mb-3 span {
    margin-top: 25px;
    padding: 15px;
  }
  
  .table th {
    padding: 10px;
  }
  
  .alert {
    margin-top: 25px;
    background-color: aquamarine;
    padding: 15px;
    width: fit-content;
    text-align: center;
    margin-left: 625px;
  }
  
  button {
    background-color: darkcyan;
    font-family: 'Courier New', Courier, monospace;
    color: white;
  }</style>