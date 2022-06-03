<template>
  <footer class="flex flex-col justify-between bg-gray-100 md:h-52">
    <div class="relative mt-12 flex flex-row items-center justify-between p-6">
      <LogoBase class="w-36" />
      <router-link to="/mentions" class="font-barlow text-lg font-bold text-black">Mentions légales</router-link>
      <RouterLink to="/admin">
        <button type="submit" class="self-end bg-cyan-700 px-7 py-1 font-barlow text-lg font-bold uppercase text-gray-100">Admin</button>
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