<template>
  <main class="ml-2 mr-2 sm:mx-32 md:mx-14 md:mt-7 lg:mx-56 lg:grid">
    <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase text-sky-700">El Mharajan Casablanca</h1>
    <img src="../assets/Fondzellige.jpg" alt="fond de zellige oriental" class="mt-10" />

    <div class="mt-8 flex">
      <img src="../assets/imm.jpg" alt="structure avec du zellige" class="h-60 w-40 md:h-96 md:w-80" />
      <div>
        <h2 class="m-6 font-barlow text-xl font-bold uppercase text-sky-700 lg:text-2xl">Le festival</h2>
        <p class="mt-7 ml-6 font-barlow text-xs font-normal lg:text-base">
          Nous avons le plaisir de vous annoncer que le festival El Maharajan Casablanca ouvrira ses portes le vendredi 15, samedi 16 et
          dimanche 17 juillet. En attendant on vous laisse decouvrir l’intégralité du festival et ce qu'il propose.
        </p>
        <RouterLink to="/festival">
          <button type="submit" class="mt-6 ml-6 self-end bg-cyan-700 px-7 py-1 font-barlow text-lg font-bold uppercase text-gray-100">
            En savoir plus
          </button>
        </RouterLink>
      </div>
    </div>

    <div>
      <div class="mr-9 mt-14 ml-9 flex w-24 md:w-48 lg:ml-28 lg:w-64">
        <img src="../assets/Balqees.jpg" alt="Chanteuse Balqees" /> <img src="../assets/Tiiwtiiw 1.jpg" alt="Chateur TiiwTiww" />
        <img src="../assets/Manal 1-2.png" alt="Chnateuse Manal" />
      </div>
      <RouterLink to="/prog">
        <p
          class="
            text-1xl
            mr-9
            ml-9
            w-72
            bg-red-600
            py-2
            text-center
            font-barlow font-bold
            uppercase
            text-white
            md:w-[576px]
            lg:ml-28 lg:h-14 lg:w-[769px] lg:p-4
          "
        >
          Decouvrez la programmation
        </p>
      </RouterLink>
    </div>

    <img src="../assets/Concert4.jpg" alt="Photo de scènes de concert" class="mt-14" />

    <div>
      <div class="mr-9 mt-14 ml-9 flex w-24 md:w-48 lg:ml-28 lg:w-64">
        <img src="../assets/Chaama.jpg" alt="Chanteuse Chaama" /> <img src="../assets/Khaled.jpg" alt="Chateur Khaled" />
        <img src="../assets/Dystinct 1.jpg" alt="Chnateur Dystinct" />
      </div>
      <RouterLink to="/artistes">
        <p
          class="
            text-1xl
            mr-9
            ml-9
            w-72
            bg-cyan-700
            py-2
            text-center
            font-barlow font-bold
            uppercase
            text-white
            md:w-[576px]
            lg:ml-28 lg:h-14 lg:w-[769px] lg:p-4
          "
        >
          Decouvrez tous les artistes
        </p>
      </RouterLink>
    </div>
    <h2 class="mt-14 text-center font-barlow text-xl font-bold uppercase text-sky-700 lg:text-2xl">📍 Casablanca 📍</h2>
    <img src="../assets/fondcasa.jpg" alt="fond de zellige oriental" class="mt-9" />

    <div class="mx-4 mt-14 flex w-24 space-x-3.5 md:mx-0 md:w-52 lg:ml-28 lg:w-64">
      <img src="../assets/S1.jpg" alt="Image de scene" /> <img src="../assets/S2.jpg" alt="Image de scene" />
      <img src="../assets/S3.jpg" alt="Image de scene" />
    </div>
  </main>
</template>

<script>
</script>