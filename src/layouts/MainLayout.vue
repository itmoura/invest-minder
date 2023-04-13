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
          <img
            alt="Notifications Icon"
            src="~assets/icon-notifications.svg"
            style="width: 36px; height: 36px"
          >
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu Lateral
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Inatel',
    caption: 'Inatel',
    icon: 'school',
    link: 'https://inatel.br/home/'
  },
  {
    title: 'Github',
    caption: 'github.com/itmoura/invest-minder',
    icon: 'code',
    link: 'https://github.com/itmoura/invest-minder'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
