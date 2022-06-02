<template>
  <div class="flex flex-grow flex-col items-center justify-center gap-2 self-stretch px-0.5" :style="{backgroundColor : color}">
    <h3 class="text-center font-barlow text-xl font-bold uppercase text-white"> {{ artiste }}</h3>
    <h3 class="text-center font-barlow text-xl uppercase text-white">Session {{ session }} - {{ horaire }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    artiste: String,
    session: String,
    horaire: String,
  },
};
</script>
