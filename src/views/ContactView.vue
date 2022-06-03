<template>
  <main class="mx-6 bg-gray-100 sm:mx-32 md:mx-44 md:mt-6 md:mb-24 lg:m-0 lg:grid lg:grid-cols-6">
    <div class="col-span-2"></div>
    <div class="col-span-2">
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase text-cyan-700">Contact</h1>
      <form class="mt-6 flex flex-col items-start gap-4">
        <div class="flex w-full flex-col items-start gap-3">
          <label for="nom" class="font-barlow text-xl font-bold uppercase text-cyan-700">Nom</label>
          <input type="text" name="nom" class="h-8 w-full border-[1px] border-solid border-cyan-800" />
        </div>
        <div class="flex w-full flex-col items-start gap-3">
          <label for="mail" class="font-barlow text-xl font-bold uppercase text-cyan-700">Mail</label>
          <input type="email" name="mail" class="h-8 w-full border-[1px] border-solid border-cyan-800" />
        </div>
        <div class="flex w-full flex-col items-start gap-3">
          <label for="sujet" class="font-barlow text-xl font-bold uppercase text-cyan-700">Sujet</label>
          <input type="text" name="sujet" class="h-8 w-full border-[1px] border-solid border-cyan-800" />
        </div>
        <div class="flex w-full flex-col items-start gap-3">
          <label for="message" class="font-barlow text-xl font-bold uppercase text-cyan-700">Message</label>
          <input type="text" name="message" class="h-28 w-full border-[1px] border-solid border-cyan-800" />
        </div>
        <button type="submit" class="self-end bg-cyan-700 px-7 py-1 font-barlow text-lg font-bold uppercase text-gray-100">Envoyer</button>
        <img src="../assets/Fondzellige.jpg" alt="fond de zellige oriental" class="mt-6" />
      </form>
      <h2 class="mt-6 font-barlow text-2xl font-bold uppercase text-cyan-700">Carte</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4578201312584!2d-7.621807384758294!3d33.593423849216165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29ae28e5e59%3A0xbc873ee84be63091!2s45%20Bd%20de%20Paris%2C%20Casablanca%2020070%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1654260651836!5m2!1sen!2sfr"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="my-6 w-full md:h-80"
      ></iframe>
      <p class="mt-6 text-center font-barlow text-sm font-normal md:mb-10">
        Musicca <br />
        45 Bd de Paris, Casablanca 20070, Morocco
      </p>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
};
</script>