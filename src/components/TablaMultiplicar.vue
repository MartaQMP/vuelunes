<template>
    <div id="div1">
        <h1>Tabla Multiplicar</h1>
        <label class="form-label">Introduzca un numero:</label>
        <input class="form-control" type="number" v-model="numero" />
        <br />
        <button @click="generarTabla()" class="btn btn-primary">Generar tabla HTML</button>
        <hr />
        <h2>CODIGO HTML</h2>
        <br />
        <table>
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="tabla"></tbody>
        </table>
        <hr />
        <h2>CODIGO DIRECTIVAS CON BUCLE</h2>
        <br />
        <table>
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contador in 10" :key="contador">
                    <td>{{ numero + " * " + contador }}</td>
                    <td>{{ numero * contador }}</td>
                </tr>
            </tbody>
        </table>
        <hr />
        <h2>CODIGO FILTERS</h2>
        <br />
        <table>
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contador in 10" :key="contador">
                    <td>{{ $filters.getOperacion(numero, contador) }}</td>
                    <td>{{ $filters.getResultado(numero, contador) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data() {
        return {
            numero: 0,
            tabla: "",
        };
    },
    methods: {
        generarTabla() {
            let html = "";
            for (let i = 1; i <= 10; i++) {
                html += "<tr>";
                html += "<td>" + this.numero + " * " + i + "</td>";
                html += "<td>" + this.numero * i + "</td>";
                html += "</tr>";
            }
            this.tabla = html;
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
h2 {
    width: 60%;
    margin: auto;
    text-align: center;
    background-color: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
}
table {
    border: 2px solid black;
    border-collapse: collapse;
    text-align: center;
    width: 60%;
    margin: auto;
}
td {
    border: 1px solid grey;
    border-collapse: collapse;
}
th {
    border: 2px solid black;
    border-collapse: collapse;
}
button {
    margin: auto;
    display: block;
}
input {
    width: 50%;
    margin: auto;
}
label {
    display: block;
    text-align: center;
}
</style>
