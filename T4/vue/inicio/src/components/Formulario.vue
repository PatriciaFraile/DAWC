<template lang="html">
    <div>
        <h2>Componente Componente</h2>
        <input placeholder="Nombre" type="text" class="form-control mt-3" v-model="nombre">        
        <input placeholder="Apellido" type="text" class="form-control mt-3" v-model="apellido">
        <input placeholder="Telefono" type="number" class="form-control mt-3" v-model="telefono">
        <input placeholder="Correo" type="text" class="form-control mt-3" v-model="email">
        <select class="form-select" v-model="perfil">
            <option value="administracion">Administrador</option>
            <option value="usuario">Usuario</option>
            <option value="invitado">Invitado</option>

        </select>
        <button @click="agregarUsuario" class="btn btn-success mt-3">Enviar datos</button>

        <div v-if="nombre.lenght>0" class="mt-3">
            <p>Lista de usuarios</p>
            <ul class="list-group">
                <li class="list-group-item" v-for="(item,index) in usuarios" :key="index">{{ item }}</li>

            </ul>
        </div>
        <p v-else class="mt-3"> No hay usuarios</p>


    </div>
</template>
<script lang="ts">
export default {
    name:"FormularioComponent",
    data() {
        return {
            nombre:"",
            apellido:"",
            telefono:0,
            email:"",
            perfil:"",
            usuarios:[]
        }
    },methods: {
        agregarUsuario:function() {
            this.usuarios.push(this.nombre)
        }
    },
    
}
</script>
<style lang="">
    
</style>