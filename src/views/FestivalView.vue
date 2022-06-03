<template>
  <main class="bg-gray-100 sm:mx-32 md:mx-14 md:mt-6 lg:mx-44 lg:grid">
    <div class="col-span-2"></div>
    <div class="col-span-2">
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase">EL Mahajan Festival</h1>
      <div class="h-67 mt-6 flex">
        <img
          src="../assets/festival.jpg"
          alt="structure avec du zellige"
          class="md:h-54 mt-6 h-36 w-40 md:w-60 lg:mt-14 lg:mr-11 lg:h-72 lg:w-96"
        />
        <div>
          <h2 class="m-6 font-barlow text-xl font-bold uppercase lg:mt-14">L’histoire du festival</h2>
          <p class="mt-6 ml-6 font-barlow text-xs font-normal lg:text-base">
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electron
          </p>
        </div>
      </div>

      <div class="h-67 mt-6 flex">
        <div>
          <h2 class="m-6 ml-1 font-barlow text-xl font-bold uppercase">Casablanca, Maroc 📍</h2>
          <p class="mt-6 ml-1 font-barlow text-xs font-normal lg:text-base">
            Nous avons le plaisir de vous annoncer que le festival El Maharajan Casablanca ouvrira ses portes le samedi 16, 17 et 18
            juillets. En attendant on vous laisse decouvrir l’intégralité du festival
          </p>
        </div>
        <img src="../assets/Map.jpg" alt="Carte de Casablanca" class="md:h-54 mt-6 h-36 w-40 md:w-60 lg:ml-32 lg:h-72 lg:w-96" />
      </div>

      <h2 class="mt-6 mb-6 text-center font-barlow text-2xl font-bold uppercase lg:mt-20">Scènes</h2>
      <img src="../assets/Scenes.jpg" alt="differentes secenes du festival" class="lg:ml-56 lg:h-96 lg:w-3/5" />

      <h2 class="mt-6 text-center font-barlow text-2xl font-bold uppercase lg:mt-20">Souvenir</h2>
      <div
        class="
          grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
          gap-x-5
          md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
          lg:grid-cols-[repeat(auto-fit,minmax(224px,1fr))]
        "
      >
        <img src="../assets/S1.jpg" alt="photo du festival" class="mt-6 sm:w-full" />
        <img src="../assets/S2.jpg" alt="photo du festival" class="mt-6 sm:w-full" />
        <img src="../assets/S3.jpg" alt="photo du festival" class="mt-6 sm:w-full" />
        <img src="../assets/S4.png" alt="photo du festival" class="mt-6 sm:w-full" />
        <img src="../assets/S5.jpg" alt="photo du festival" class="mt-6 sm:w-full" />
      </div>
    </div>
  </main>
</template>