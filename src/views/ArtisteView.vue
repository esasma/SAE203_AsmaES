<template>
  <main class="mx-6 bg-gray-100 sm:mx-32 sm:mb-56 md:mx-44 md:mt-6 lg:m-0 lg:mt-10 lg:grid lg:grid-cols-6">
    <div class="col-span-2"></div>
    <div class="col-span-2">
      <RouterLink to="/artistes">
        <button type="submit" class="self-end bg-cyan-700 px-7 py-1 font-barlow text-lg font-bold uppercase text-gray-100">
          Tous les artistes
        </button>
      </RouterLink>
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase">{{ artiste.nom }}</h1>
      <div class="bg-cyan-800 text-white">
        <img :src="imageActuelle" :alt="'photo de ' + artiste.nom" class="mx-auto mt-6 sm:w-full" />
        <div class="p-9 pt-2">
          <h2 class="mt-6 font-barlow text-xl font-bold uppercase">Bio</h2>
          <p class="mt-6 font-barlow text-sm font-normal">
            {{ artiste.bio }}
          </p>
          <h2 class="mt-6 font-barlow text-xl font-bold uppercase">Catégorie</h2>
          <p class="mt-6 font-barlow text-sm font-normal">{{ artiste.categorie }}</p>
        </div>
      </div>
      <div>
        <div class="mr-9 mt-14 ml-9 flex w-24 md:w-48 lg:ml-6 lg:w-36">
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
              lg:ml-6 lg:h-14 lg:w-[432px] lg:p-4
            "
          >
            Decouvrez les artistes présenrt le même jour
          </p>
        </RouterLink>
      </div>
      <div class="md:h-64 lg:h-0"></div>
    </div>
  </main>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDoc,
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {},
  data() {
    return {
      artiste: {
        img: null,
        nom: null,
        categorie: null,
        bio: null,
      },
      refArtiste: null,
      imageActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
  },
  methods: {
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistes", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.artiste = this.refArtiste.data();
        this.imageActuelle = this.artiste.img;
      } else {
        this.console.log("artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "artistes/" + this.artiste.img);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageActuelle = url;
        })
        .catch((error) => {
          console.log("erreur dl", error);
        });
    },
  },
};
</script>
