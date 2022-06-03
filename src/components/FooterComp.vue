<template>
  <footer class="flex flex-col justify-between bg-gray-100 md:h-52">
    <div class="relative mt-12 flex flex-row items-center justify-between p-6">
      <LogoBase class="ml-1 mr-2 w-36" />
      <router-link to="/mentions" class="text-semibold font-barlow text-sm text-black lg:text-lg lg:font-bold"
        >Mentions légales</router-link
      >
      <RouterLink to="/admin">
        <button
          type="submit"
          class="text-semibold self-end bg-cyan-700 px-4 py-2 font-barlow font-bold uppercase text-gray-100 lg:px-7 lg:py-1 lg:text-lg"
        >
          Admin
        </button>
      </RouterLink>
    </div>
  </footer>
</template>

<script>
import LogoBase from "./logo/LogoBase.vue";
export default {
  components: { LogoBase },
};
</script>