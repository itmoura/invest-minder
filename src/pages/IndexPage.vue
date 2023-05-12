<template>
  <q-page class="background-common">
    <div class="background-gradient">
      <div class="flex justify-center">
        <h2>Olá João!</h2>
        <p>
          <span>R$</span> 4.500,00
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
        <q-carousel-slide v-for="slide in slides" :key="slide.id" :name="slide.id">
          <q-card-section class="investment-card">
            <div class="card-border">
              <div class="card">
                <div class="card-line card-line-top">
                  <div class="name-investment">
                    <h3>Vale{{ slide.id }}</h3>
                    <img src="~assets/indicativo-positivo.svg">
                  </div>
                  <p>17,41%</p>
                </div>
                <div class="card-line card-line-mid">
                  <img src="~assets/investiment-chart.svg">
                  <p>R$ 3.273,00</p>
                </div>
                <div class="card-line card-line-bottom">
                  <p>Qtd <span>100</span></p>
                  <div class="prices">
                    <p>Preço Atual <span>R$ 82,73</span></p>
                    <p>Aplicado <span>R$ 5.000,00</span></p>
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

      <div v-for="item in 7" :key="item">
        <q-card-section class="recommendation-card">
          <div class="card-border">
            <div class="card">
              <div class="card-line card-line-top">
                <div class="name-investment">
                  <h3>Vale</h3>
                </div>
                <div class="recommendation-info">
                  <div class="recommendation-price">
                    <p>82,73</p>
                    <span>Preço Unit.</span>
                  </div>
                  <p>17,41%</p>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import indexPage from 'src/css/indexPage.scss'

export default defineComponent({
  name: 'IndexPage',
  data () {
    const slides = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      }
    ]

    return {
      slide: 1,
      slides
    }
  }
})
</script>
