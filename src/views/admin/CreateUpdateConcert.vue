<template>
    <main class="mx-6 sm:mx-32 md:mx-44 md:mt-6 lg:mx-64 lg:grid lg:grid-cols-2 lg:gap-40">
        <form @submit.prevent="saveConcert">
            <h1 class="mb-10 font-barlow text-2xl font-bold uppercase">Création d'un concert</h1>
            <div class="mb-10 flex w-full">
                <div class="bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">Numéro</div>
                <input type="text" placeholder="Numéro" class="w-full border-[1px] border-gray-400 bg-gray-100 p-2.5 font-barlow text-xl font-bold uppercase text-gray-900" v-model="concert.session"/>
            </div>
            <div class="mb-10 flex w-full">
                <div class="bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">Artiste</div>
                <select v-model="concert.artiste">
                    <option value="Choisir un artiste" selected disabled>Choisir un artiste</option>
                    <option :value="artiste.nom" v-for="artiste in listeArtistes">{{ artiste.nom }}</option>
                </select>
            </div>
            <div class="mb-10 flex w-full">
                <div class="bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">Jour</div>
                <select v-model="concert.jour">
                    <option value="Choisir un artiste" selected disabled>Choisir un jour</option>
                    <option :value="i.day" v-for="i in listeDays">{{ i.day }}</option>
                </select>
            </div>
            <div class="mb-10 flex w-full">
                <div class="bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">Horaires</div>
                <input type="text" placeholder="Horaires du concert" class="w-full border-[1px] border-gray-400 bg-gray-100 p-2.5 font-barlow text-xl font-bold uppercase text-gray-900" v-model="concert.horaire"/>
            </div>
            <div class="flex flex-row justify-between gap-5">
                <button type="submit" class="w-full bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">Enregistrer</button>
                <button class="w-full bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">
                    <router-link to="/listec">Annuler</router-link>
                </button>
            </div>
        </form>
    </main>
</template>
<script>
    import {
        getFirestore,
        collection,
        doc,
        getDoc,
        getDocs,
        addDoc,
        updateDoc,
        deleteDoc,
        onSnapshot,
        query,
        orderBy,
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';

    export default {
        name: 'CreateConcert',
        data() {
            return {
                listeArtistes: [],
                listeDays: [],
                concert: null,
            };
        },
        created() {
            this.init();
        },
        mounted() {
            this.getArtistes();
            this.getDays();
        },
        methods: {
            init() {

                this.concert = {
                    session: null,
                    artiste: null,
                    horaire: null,
                    jour: null,
                };

                if (this.$route.params.id) {
                    this.getConcert(this.$route.params.id)
                }
            },
            async getDays() {
                const firestore = getFirestore();
                const db = collection(firestore, 'jours');
                await onSnapshot(db, (snapshot) => {
                    this.listeDays = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                });
            },
            async getConcert(id) {
                const firestore = getFirestore();
                const docRef = doc(firestore, "concert", id);

                this.ref = await getDoc(docRef);
                if (this.ref.exists()) {
                    this.concert = this.ref.data();
                } else {
                    this.console.log("concert inexistant");
                }
            },
            async getArtistes() {
                const firestore = getFirestore();
                const dbartiste = collection(firestore, 'artistes');
                await onSnapshot(dbartiste, (snapshot) => {
                    this.listeArtistes = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                });
            },
            async saveConcert() {
                const firestore = getFirestore();

                if (this.$route.params.id) {
                    const firestore = getFirestore();
                    const docRef = doc(firestore, 'concert', this.$route.params.id);
                    await updateDoc(docRef, {
                        artiste: this.concert.artiste,
                        session: this.concert.session,
                        horaire: this.concert.horaire,
                        jour: this.concert.jour,
                    });
                } else {
                    const dbconcert = collection(firestore, 'concert');
                    await addDoc(dbconcert, {
                        session: this.concert.session,
                        horaire: this.concert.horaire,
                        artiste: this.concert.artiste,
                        jour: this.concert.jour,
                    });

                }

                await this.$router.push({name: 'ListeConcert'});
            },
        },
    };
</script>
<style>
    select {
        width: 100%;
    }
</style>
