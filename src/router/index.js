import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgView from '../views/ProgView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import MentionsView from '../views/MentionsView.vue'
import AdminView from '../views/admin/AdminView.vue'
import ListeArtistes from '../views/admin/ListeArtistes.vue'
import ListeConcert from '../views/admin/ListeConcert.vue'
import CreateArtiste from '../views/admin/CreateArtiste.vue'
import CreateConcert from '../views/admin/CreateUpdateConcert.vue'
import UpdateArtiste from '../views/admin/UpdateArtiste.vue'
import DeleteArtiste from '../views/admin/DeleteArtiste.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/prog', name: 'ProgView', component: ProgView },
    { path: '/artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/festival', name: 'FestivalView', component: FestivalView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/concert', name: 'ConcertView', component: ConcertView },
    { path: '/artiste/:id', name: 'ArtisteView', component: ArtisteView },
    { path: '/mentions', name: 'MentionsView', component: MentionsView },
    { path: '/admin', name: 'AdminView', component: AdminView },
    { path: '/listea', name: 'ListeArtistes', component: ListeArtistes },
    { path: '/listec', name: 'ListeConcert', component: ListeConcert },
    { path: '/createArtiste', name: 'CreateArtiste', component: CreateArtiste },
    { path: '/createConcert', name: 'CreateConcert', component: CreateConcert },
    { path: '/updateConcert/:id', name: 'UpdateConcert', component: CreateConcert },
    { path: '/updateArtiste/:id', name: 'UpdateArtiste', component: UpdateArtiste },
    { path: '/deleteArtiste/:id', name: 'DeleteArtiste', component: DeleteArtiste },
    { path: '/404', name: 'PageNotFound', component: PageNotFound },
    { path: '/:pathMatch(.*)*', redirect: '/404' },

    // ici les autre routes
  ]
})

export default router
