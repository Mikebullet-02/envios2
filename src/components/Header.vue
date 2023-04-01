<template>
  <div class="w-screen sm:w-auto">
    <header class="w-screen">
      <div class="bg-[#FFFFFF] sm:pt-5">
        <nav
          class="container px-6 py-8 mr-4 md:mr-20 mx-auto md:flex md:justify-between md:items-center"
        >
          <div class="flex items-center justify-between">
            <!-- Mobile menu button -->
            <div @click="toggleNav" class="flex md:hidden">
              <button
                type="button"
                class="text-[#003368] hover:text-gray-900 focus:outline-none focus:text-gray-800"
              >
                <svg viewBox="0 0 24 24" class="w-20 h-18 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col mt-10 mr-20 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 bg-white lg:bg-white md:bg-white sm:bg-[#003368]"
          >
            <li
              class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"
            >
              <a href="#">Tipos<br />de envíos</a>
            </li>
            <li
              class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"
            >
              <a href="#"
                >Cobertura<br />
                de envíos</a
              >
            </li>
            <li
              class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"
            >
              <a href="#"
                >Calcula<br />
                tu paquete</a
              >
            </li>
            <li
              class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"
            >
              <a href="#"
                >Tarifas<br />
                preferenciales</a
              >
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="bg-inherit py-5 px-6 sm:py-5 sm:px-16 lg:py-16 lg:px-48 text-start text-neutral-800"
      >
        <h1
          class="mb-6 text-[#003368] text-4xl sm:text-5xl md:text-6xl font-bold blue:bg-neutral-700 sm:pl-[20px] md:pl-[30px] lg:pl-[-30px] xl:ml-[10px] tracking-widest"
        >
          AHORRA HASTA 60% EN  <p> LOGÍSTICA PARA TU</p> 
          <p>EMPRESA</p>
        </h1>
        <div class="mx-auto max-w-[900px] sm:ml-5">
          <ul
            class="flex flex-col space-y-2 py-5 sm:pt-5 pb-10 text-lg sm:text-3xl text-gray-800"
          >
            <li>Tarifas preferenciales para empresas</li>
            <li>
              Envía y recibe paquetes el mismo día
              <p class="text-gray-500 inline">(sin costo extra)</p>
            </li>
            <li>
              Cobertura en zonas extendidad
              <p class="text-gray-500 inline">(sin costo extra)</p>
            </li>
            <li>
              Servicio ocurre, en más de 50 ciudades
              <p class="text-gray-500 inline">
                (Bajío, Norte y Centro del país)
              </p>
            </li>
          </ul>
        </div>

        <div
          class="mx-auto max-w-[600px] sm:pt-[-100px] lg:pt-5 sm:ml-20 sm:py-20 sm:px-20"
        >
          <button
            class="bg-[#003368] sm:w-auto h-14 sm:h-28 hover:bg-blue-600 text-white text-xl sm:text-4xl font-extrabold py-2 px-14 sm:py-2 sm:px-28 rounded-full"
          >
            Tarifas preferenciales
          </button>
        </div>
        <div
          class="flex flex-auto mx-auto w-auto sm:w-80 h-auto mr-32 lg:mt-[-675px] opacity-0 2xl:opacity-100 hidden 2xl:block"
        >
          <img src="../assets/personajeODM.png" />
        </div>
      </div>
    </header>
  </div>
</template>

<style>
.personaje {
  margin-left: 800px;
}
</style>
<script>
import { ref } from "vue";

export default {
  setup() {
    let showMenu = ref(false);

    const toggleNav = () => {
      showMenu.value = !showMenu.value;
    };

    return { showMenu, toggleNav };
  },
};
</script>
