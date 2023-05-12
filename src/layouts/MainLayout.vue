<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark">
    <q-header class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
        >
          <img
            alt="Menu Icon"
            src="~assets/icon-menu.svg"
            style="width: 42px; height: 42px"
          >
        </q-btn>

        <q-btn
          flat
          dense
          round
          class="icon-notifications"
        >
          <div style="border: 2px solid #FFFFFF; border-radius: 20px; text-align: center" @click="showModal">
            <q-icon name="add" style="font-size: 30px"/>
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="menu-left"
    >
      <q-list>
        <q-item-label
          header
        >
          Invest Minder
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <ModalBuy :open="modalOpen" @close="handleModalClose" />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import ModalBuy from "components/ModalBuy.vue";

const linksList = [
  {
    title: 'Inatel',
    caption: 'Inatel',
    icon: 'school',
    link: 'https://inatel.br/home/'
  },
  {
    title: 'Github Dimitri',
    caption: 'github.com/dimeleone',
    icon: 'code',
    link: 'https://github.com/dimeleone'
  },
  {
    title: 'Github Ítalo',
    caption: 'github.com/itmoura',
    icon: 'code',
    link: 'https://github.com/itmoura/invest-minder'
  },
  {
    title: 'Github Gabriel',
    caption: 'github.com/redfoxghs',
    icon: 'code',
    link: 'https://github.com/redfoxghs'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    ModalBuy,
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const modalOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      modalOpen,
      showModal () {
        this.modalOpen = true;
      },
      handleModalClose () {
        modalOpen.value = false
      }
    }
  },
})
</script>
