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

export default defineComponent({
  name: 'ModalBuy',

  props: ['open'],

  setup(props, { emit }) {
    const $q = useQuasar()

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
      }
    );

    const onSubmit = () => {
      if (name.value === "" || name.value == null)
        alert("nome vazio");
      if (price.value === "" || price.value == null)
        alert("preco vazio");
      if (quantity.value === "" || quantity.value == null)
        alert("quantidade vazio");
      emit('close', false);
    };

    const onReset = () => {
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
