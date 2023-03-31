<template>
  <router-view />
  <Header></Header>
  <Envios></Envios>
  <div class="cobertura max-w-full">
    <h1>COBERTURA DE ENVÍOS</h1>
    <div>
      <section class="main-section">
        <form>
          <div class="caja">
            <select>
              <option value="selected">¿Dónde dejar tus paquetes?</option>
              <option v-for="origenes in elementos" :key="origenes.id">
                {{ origenes.id }}
              </option>
            </select>
          </div>
          <div class="card">
            <h2>Dirección</h2>
            <h3>De:</h3>
            <p v-for="destinos in elementos" :key="destinos.sobre">
              {{ destinos.data.direccion_destino }}
            </p>
          </div>
          <div class="caja">
            <select>
              <option value="selected">¿Dónde recoger tus paquetes?</option>
              <option v-for="destinos in elementos" :key="destinos._id">
                {{ destinos.data._id }}
              </option>
            </select>
          </div>
          <div class="card">
            <h2>Dirección</h2>
            <h3>De:</h3>
            <p v-for="destinos in elementos" :key="destinos.sobre">
              {{ destinos.data.direccion_destino }}
            </p>
          </div>
        </form>
        <div class="card">
          <h2>Sobres</h2>
          <h3>Hasta 25 hojas</h3>
          <p>$</p>
          <p v-for="destinos in elementos" :key="destinos.sobre">
            {{ destinos.data.sobre }}
          </p>
        </div>
        <div class="card">
          <h2>Paquetes</h2>
          <h3>De 0 a 1 Kg</h3>
          <p>$</p>
          <p v-for="destinos in elementos" :key="destinos.paquete">
            {{ destinos.data.caja1 }}
          </p>
        </div>

        <div class="card">
          <h2>Cajas</h2>
          <h3>De 1 a 10 Kg</h3>
          <p>$</p>
          <p v-for="destinos in elementos" :key="destinos.caja1">
            {{ destinos.data.caja1 }}
          </p>
        </div>
        <div class="card">
          <h2>Cajas</h2>
          <h3>De 11 a 20 Kg</h3>
          <p>$</p>
          <p v-for="destinos in elementos" :key="destinos.caja2">
            {{ destinos.data.caja2 }}
          </p>
        </div>
        <div class="card">
          <h2>Maletas</h2>
          <h3>De 21 a 30 Kg</h3>
          <p>$</p>
          <p v-for="destinos in elementos" :key="destinos.caja3">
            {{ destinos.data.caja3 }}
          </p>
        </div>
        <div class="h-e-a-d-w-e-b-rectangle">
          <span class="h-e-a-d-w-e-b-text02">
            <span>
              <span> ***VALOR DE REFERENCIA SUJETO A CAMBIOS*** </span>
            </span>
          </span>
        </div>
      </section>
    </div>
  </div>

  <Calculadora></Calculadora>
  <Formulario></Formulario>
  <Footer></Footer>
</template>

<script setup>
import Header from "./components/Header.vue";
import Landing from "./components/Landing.vue";
import Envios from "./components/Envios.vue";
import Calculadora from "./components/Calculadora.vue";
import Footer from "./components/Footer.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { userDatabaseStore } from "./stores/database.js";
import Formulario from "./components/Formulario.vue";
const databaseStore = userDatabaseStore();
const elementos = ref([]);
onMounted(async () => {
  await databaseStore.getOrigenes();
  elementos.value = databaseStore.$state.documents;
  //console.log(elementos.value);
});
const destinos = ref([]);
onMounted(async () => {
  await databaseStore.getDestinos();
  destinos.value = databaseStore.$state.documents;
  //console.log(destinos.value)
});
</script>


<style>
@import url("./style.css");
</style>