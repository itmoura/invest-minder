<template>
  <q-page class="background-common">
    <div class="background-gradient">
      <div class="flex justify-center">
        <h2>Olá João!</h2>
        <p>
          <span>R$</span> {{ wallet.toLocaleString('pt-br', { minimumFractionDigits: 2 }) }}
        </p>
      </div>

      <div class="investment">
        <p>Meus <br/> Investimentos</p>
      </div>

      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="white"
        arrows
        class="bg-transparent carousel"
        dark
      >
        <q-carousel-slide v-for="myAsset in myAssets" :key="myAsset.id" :name="myAsset.id">
          <q-card-section class="investment-card" >
            <div class="card-border" :class="myAsset.totalProfitPercent >= 0 ? 'card-success' : 'card-danger'">
              <div class="card">
                <div class="card-line card-line-top">
                  <div class="name-investment">
                    <h3>{{ myAsset.financialAssetId }}</h3>
                    <img src="~assets/indicativo-positivo.svg"  v-if="myAsset.totalProfitPercent >= 0">
                    <img src="~assets/indicativo-negativo.svg" v-else>
                  </div>
                  <p :class="myAsset.totalProfitPercent >= 0 ? 'success' : 'danger'">{{ myAsset.totalProfitPercent.toFixed(2) }}%</p>
                </div>
                <div class="card-line card-line-mid">
                  <img src="~assets/investiment-chart.svg" v-if="myAsset.totalProfitPercent >= 0">
                  <img src="~assets/investiment-chart-negative.svg" v-else>
                  <p :class="myAsset.totalProfitPercent >= 0 ? 'success' : 'danger'">R$ {{ myAsset.totalSpend.toLocaleString('pt-br', { minimumFractionDigits: 2 })  }}</p>
                </div>
                <div class="card-line card-line-bottom">
                  <p>Qtd <span>{{ myAsset.quantity }}</span></p>
                  <div class="prices">
                    <p>Preço Atual <span>R$ {{ myAsset.financialAssetId.toLocaleString('pt-br', { minimumFractionDigits: 2 })  }}</span></p>
                    <p>Aplicado <span>R$ {{ myAsset.totalValue.toLocaleString('pt-br', { minimumFractionDigits: 2 })  }}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="content-recommendation">
      <div class="recommendation">
        <p>Recomendações</p>
      </div>

      <div v-for="item in assets" :key="item">
        <q-card-section class="recommendation-card">
          <div class="card-border" @click="showModal(item)">
            <div class="card">
              <div class="card-line card-line-top">
                <div class="name-investment">
                  <h3>{{ item.name }}</h3>
                </div>
                <div class="recommendation-info">
                  <div class="recommendation-price">
                    <p>{{ item.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })  }}</p>
                    <span>Preço Unit.</span>
                  </div>
<!--                  <p>17,41%</p>-->
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </div>
      <ModalBuy :open="modalOpen" :assets="assetClicked" @close="handleModalClose" />

    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import indexPage from 'src/css/indexPage.scss'
import Assets from "src/service/Assets";
import assets from "src/service/Assets";
import ModalBuy from "components/ModalBuy.vue";
import { createWebHistory as $router } from "vue-router";

export default defineComponent({
  name: 'IndexPage',
  components: { ModalBuy },

  data () {
    return {
      slide: 1,
      wallet: 0.00,
      assets: [],
      assetClicked: null,
      myAssets: []
    }
  },
  setup () {
    const modalOpen = ref(false);

    return {
      modalOpen,
      showModal (item) {
        this.modalOpen = true;
        this.myAssets.forEach((asset) => {
          if (asset.financialAssetId === item.id) {
            item.userAssetId = asset.financialAssetId
          }
        });
        this.assetClicked = item;
      },
      handleModalClose () {
        modalOpen.value = false
        this.assetClicked = null
      }
    }
  },
  mounted() {
    Assets.listAssets()
      .then((response) => {
        this.assets = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    Assets.myAssets(1)
      .then((response) => {
        response.data.map((res) => {
          this.wallet += res.totalSpend
        })
        this.myAssets = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
})
</script>
