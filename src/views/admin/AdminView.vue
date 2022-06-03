<template>
  <main class="mx-6 mb-96 sm:mx-32 sm:mb-56 md:mx-44 md:mt-6 lg:m-0 lg:mb-96 lg:grid lg:grid-cols-6">
    <div class="col-span-2"></div>
    <div class="col-span-2">
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase text-cyan-700">Administration</h1>

      <div class="mt-10">
        <RouterLink to="/listea">
          <button
            type="submit"
            class="mt-14 h-20 w-60 self-end bg-cyan-700 px-7 py-1 font-barlow text-lg font-bold uppercase text-gray-100 lg:ml-28"
          >
            Artistes
          </button>
        </RouterLink>
      </div>
      <div class="mt-6">
        <RouterLink to="/listec">
          <button
            type="submit"
            class="mt-14 h-20 w-60 self-end bg-cyan-700 px-7 py-1 font-barlow text-lg font-bold uppercase text-gray-100 lg:ml-28"
          >
            Concerts
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="h-72"></div>
  </main>
</template>

<script>
import ButtonBlue from "../../components/icon/ButtonBlue.vue";
export default { components: { ButtonBlue } };
</script>