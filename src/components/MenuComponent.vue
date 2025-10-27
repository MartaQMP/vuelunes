<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <p class="navbar-brand">Menu</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/collatz" class="nav-link">Collatz</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/collatzv2" class="nav-link">Collatz V2</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/tablamultiplicar" class="nav-link">Tabla Muliplicar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "MenuComponent",
};
</script>

<style scoped>
ul#menu li {
    display: inline;
    padding: 10px;
}
</style>
