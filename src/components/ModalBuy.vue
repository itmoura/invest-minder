<template>
  <q-dialog v-model="modalOpen" persistent >
    <q-card style="width: 100%; background-color: #202233; color: #FFFFFF">
      <q-card-section>
        <div class="text-h6">Cadastrar novo ativo</div>
      </q-card-section>

      <q-form style="width: 90%; margin: 0 auto;">
        <q-input outlined v-model="name" label="Nome do ativo" style="margin-top: 10px" dark />
        <q-input outlined v-model="price" label="Preço do ativo" style="margin-top: 10px" dark type="number" />
        <q-input outlined v-model="quantity" label="Quantidade" style="margin-top: 10px" dark type="number" />
      </q-form>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="negative" @click="onReset" v-close-popup/>
        <q-btn flat label="Salvar" color="positive" @click="onSubmit" v-close-popup/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useQuasar } from "quasar";
import Assets from "src/service/Assets";

export default defineComponent({
  name: 'ModalBuy',

  props: ['open', 'assets'],

  setup(props, { emit }) {
    const $q = useQuasar()

    const userAssetId = ref(null)
    const assetId = ref(null)
    const name = ref(null)
    const price = ref(null)
    const quantity = ref(null)
    const modalOpen = ref(props.open)

    const closeModal = () => {
      emit('close', false);
    };

    watch(() => props.open,
      (value) => {
        modalOpen.value = value;
        userAssetId.value = props.assets?.userAssetId;
        assetId.value = props.assets?.id;
        name.value = props.assets?.name;
        price.value = props.assets?.price;
      },
      { immediate: true }
    );

    const onSubmit = () => {
      if (!name.value || !price.value || !quantity.value) {
        alert('Preencha todos os campos')
      } else {
        Assets.buyAsset({
          userId: 1,
          userAssetId: userAssetId.value,
          assetId: assetId.value,
          price: price.value,
          quantity: quantity.value
        })
          .then(() => {
            alert('Ativo cadastrado com sucesso')
          })
          .catch(() => {
            alert('Erro ao cadastrar ativo')
          })
      }
      emit('close', false);
    };

    const onReset = () => {
      userAssetId.value = null;
      name.value = null;
      price.value = null;
      quantity.value = null;
      emit('close', false);
    };

    return {
      name,
      price,
      quantity,
      modalOpen,
      onSubmit,
      onReset,
      closeModal
    }
  }
})
</script>
