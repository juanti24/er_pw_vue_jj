<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style="background-color: #72f27f;">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarText">
            <router-link class="nav-link active text-dark" aria-current="page" to="/profesor/ingresar">Crear nuevo Profesor</router-link> 
            <router-link class="nav-link active text-dark" aria-current="page" to="/profesor/buscar">Consultar Profesores</router-link> 
      </div>
    </div>
  </nav>
  </template>

  <script>
  export default {
  }
  </script>

  <style>
  .nav-link{
    padding-left: 15px;
    padding-right: 5px;
  }
  </style>