<template lang="html">
    <div>
        <h2>Componente contador</h2>
        <p>Proyecto para ver como funciona el binding {{ nombre }}</p>
        <span>{{ contador }}</span>
        <div class="col">
            <button class="btn btn-primary" @click = "incrementar">Incrementar</button>
            <button class="btn btn-success" @click="decrementar">Decrementar</button>
        </div>  
    </div>
</template>
<script>
export default {
    name: 'ContadorComponent',
    data() {
        return {
            contador:0,
            nombre: "Patricia"
        }
    }, methods: {
        incrementar: function() {
            this.contador +=1
        },
        decrementar: function() {
            this.contador -= 1
        }
    },
    
}
</script>
