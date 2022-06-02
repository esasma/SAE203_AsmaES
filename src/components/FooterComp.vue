<template>
  <footer class="flex flex-col justify-between bg-gray-100 md:h-52">
    <div class="relative mt-12 flex flex-row items-center justify-between p-6">
      <LogoBase class="w-12" />
      <router-link to="/mentions" class="font-barlow text-sm font-normal text-gray-900">Mentions légales</router-link>
      <router-link to="/admin" class="just font-barlow text-base font-bold uppercase text-red-600">Administrateur</router-link>
    </div>
    <p class="text-center font-barlow text-xs font-normal text-gray-900">El maharajn festival - 2022</p>
  </footer>
</template>

<script>
import LogoBase from "./logo/LogoBase.vue";
export default {
  components: { LogoBase },
};
</script>