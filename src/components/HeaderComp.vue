<template>
  <nav class="relative flex flex-row justify-between bg-gray-100 py-5 px-9 lg:items-center lg:justify-center lg:gap-12 lg:pr-36">
    <Menu>
      <MenuButton>
        <MenuIcon class="lg:hidden" />
        <div class="sr-only">Menu</div></MenuButton
      >
      <MenuItems class="absolute top-full left-0 right-0 flex w-full flex-col items-center gap-2 bg-gray-100 py-5">
        <MenuItem v-slot="{ active }">
          <RouterLink
            to="/"
            :class="{ 'bg-gray-400 text-gray-100': active, 'text-cyan-800 ': !active }"
            class="font-barlow text-xl font-bold uppercase"
            >Accueil</RouterLink
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <RouterLink
            to="/prog"
            :class="{ 'bg-gray-400 text-gray-100': active, 'text-cyan-800 ': !active }"
            class="font-barlow text-xl font-bold uppercase"
            >Programmation</RouterLink
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <RouterLink
            to="/artistes"
            :class="{ 'bg-gray-400 text-gray-100': active, 'text-cyan-800 ': !active }"
            class="font-barlow text-xl font-bold uppercase"
            >Artistes</RouterLink
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <RouterLink
            to="/festival"
            :class="{ 'bg-gray-400 text-gray-100': active, 'text-cyan-800 ': !active }"
            class="font-barlow text-xl font-bold uppercase"
            >Festival</RouterLink
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <RouterLink
            to="/contact"
            :class="{ 'bg-gray-400 text-gray-100': active, 'text-cyan-800 ': !active }"
            class="font-barlow text-xl font-bold uppercase"
            >Contact</RouterLink
          >
        </MenuItem>
      </MenuItems>
    </Menu>
    <RouterLink to="/"> <LogoBase /></RouterLink>
    <router-link to="/prog" class="hidden font-barlow text-xl font-bold uppercase text-gray-500 lg:block">Programmation</router-link>
    <router-link to="/artistes" class="hidden font-barlow text-xl font-bold uppercase text-gray-500 lg:block">Artistes </router-link>
    <router-link to="/festival" class="hidden font-barlow text-xl font-bold uppercase text-gray-500 lg:block">Festival</router-link>
    <router-link to="/contact" class="hidden font-barlow text-xl font-bold uppercase text-gray-500 lg:block">Contact</router-link>
    <div class="w-8 lg:hidden"></div>
  </nav>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import LogoBase from "./logo/LogoBase.vue";
import MenuIcon from "./icon/MenuIcon.vue";
export default {
  components: { Menu, MenuButton, MenuItems, MenuItem, MenuIcon, LogoBase },
};
</script>