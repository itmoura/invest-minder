<template>
  <div>
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

      <q-card-section class="investment-card">
        <div class="card-border">
          <div class="card">
            <div class="card-line card-line-top">
              <div class="name-investment">
                <h3>Vale3</h3>
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
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import indexPage from 'src/css/indexPage.scss'

export default defineComponent({
  name: 'IndexPage'
})
</script>
