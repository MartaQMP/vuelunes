<template>
    <div id="div1">
        <h1>Collatz Version 2</h1>
        <hr />
        <label class="form-label">Introduce un numero: </label>
        <input type="number" class="form-control" v-model="numero" />
        <br />
        <button class="btn btn-primary" @click="hacerCollatz()">Collatz</button>
        <!-- AQUI DENTRO DEL li DIBUJO LO Q ME DEVUELVE EL METODO DE FILTERS -->
        <ul v-if="numeros.length > 0">
            <li v-for="numero in numeros" :key="numero" v-html="$filters.evaluarNumero(numero)"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "CollatzV2",
    data() {
        return {
            numero: 1,
            numeros: [],
        };
    },
    methods: {
        hacerCollatz() {
            let aux = [];
            while (this.numero !== 1) {
                if (this.numero % 2 == 0) {
                    this.numero /= 2;
                } else {
                    this.numero = this.numero * 3 + 1;
                }
                aux.push(this.numero);
            }
            this.numeros = aux
        },
    },
};
</script>

<style scoped>
#div1 {
    margin: auto;
    width: 80%;
}
h1 {
    text-align: center;
    background-color: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
}
</style>
