<template>
  <div class="w-full">
    <h1
      class="text-4xl font-extrabold capitalize ml-5 sm:ml-24 py-14"
    >
      CALCULA EL PESO DE TU PAQUETE
    </h1>
    <div class="mx-auto my-5">
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-wrap xl:justify-center">
          <img src="../assets/Calculadora.png" class="h-auto max-w-sm" alt="" />
        </div>
        <div class="bg-[#D9D9D9] mx-auto">
          <h2 class="text-3xl md:ml-10 font-extrabold text-center mt-5">
            Calculadora de peso volumétrico
          </h2>
          <div class="w-full  grid grid-cols-6 items-center pt-5">
            <label
              class="col-span-1 mx-4 md:mx-10 text-gray-700 text-xl sm:lg font-bold"
              for="inline-alto"
              >Alto:</label
            >
            <input
              class="col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800"
              v-model="calculos.alto"
              type="text"
              name="inline-alto"
              placeholder="Alto"
            />
            <span
              class="col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold"
              >cm</span
            >
          </div>
          <div
            class="container grid-container grid grid-cols-6 my-4 items-center"
          >
            <label
              class="col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold"
              for="inline-ancho"
              >Ancho:</label
            >
            <input
              class="col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800"
              v-model="calculos.ancho"
              type="text"
              name="inline-ancho"
              placeholder="Ancho"
            />
            <span
              class="col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold"
              >cm</span
            >
          </div>

          <div
            class="container grid-container grid grid-cols-6 my-4 items-center"
          >
            <label
              class="col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold"
              for="inline-largo"
              >Largo:</label
            >
            <input
              class="col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800"
              v-model="calculos.largo"
              type="text"
              name="inline-largo"
              placeholder="Largo"
            />
            <span
              class="col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold"
              >cm</span
            >
          </div>
          <div class="my-4">
            <div class="flex items-cener justify-center">
              <span
                class="col-span-1 mx-4 md:mx-10 text-black text-xl font-bold"
                >Peso: {{ peso }} Kg</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="xl:h-auto xl:w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl xl:pl-0 xl:pr-0"
    >
      <p>UTILIZA LA FÓRMULA:</p>
      <p>(Alto(cm) * Ancho(cm) * Largo(cm))/6000</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const calculos = ref({
  largo: 0,
  ancho: 0,
  alto: 0,
});
const peso = computed({
  get: () => {
    let resultado = 0;
    resultado =
      (calculos.value.largo * calculos.value.ancho * calculos.value.alto) /
      6000;
    return resultado.toFixed(2);
  },
  set: (value) => {
    calculos.value.largo = value;
    calculos.value.ancho = value;
    calculos.value.alto = value;
  },
});
</script>
