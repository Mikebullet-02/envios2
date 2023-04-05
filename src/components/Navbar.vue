<template>
  <div class="sm:bg-transparent sm:pt-5 sticky top-0">
    <nav
      class="px-6 pt-5 sm:py-8 mr-4 md:mr-32 mx-auto md:flex md:justify-between md:items-center"
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
      <img
        src="../assets/ODMenvios.png"
        class="sm:hidden w-44 h-auto m-5"
        :class="showMenu ? 'flex' : 'hidden'"
      />
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-0 mr-20 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368]"
      >
        <li
          class="pl-1 border-b border-white hover:text-blue-600 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"
        >
          <a href="#"
            >Tipos <br />
            de envíos</a
          >
        </li>

        <li
          class="border-b border-white hover:text-blue-600 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"
        >
          <a href="#"
            >Cobertura <br />
            de envíos</a
          >
        </li>
        <li
          class="border-b border-white hover:text-blue-600 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"
        >
          <a href="#"
            >Calcula<br />
            tu paquete</a
          >
        </li>
        <li
          class="border-b border-white hover:text-blue-600 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"
        >
          <a href="#"
            >Tarifas<br />
            preferenciales</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Navbar",
  inject: ["isSticky"],
  computed: {
    navbarClass() {
      return this.isSticky ? "sticky top-0" : "";
    },
  },
  setup() {
    let showMenu = ref(false);

    const toggleNav = () => {
      showMenu.value = !showMenu.value;
    };

    return { showMenu, toggleNav };
  },
};
</script>
