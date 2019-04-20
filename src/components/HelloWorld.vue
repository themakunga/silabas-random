<template lang="pug">
div
	.level
		.container
			.level
				h1.title Randomizador de Silabas
			.level.is-fullwidth
				.box.is-fullwidth
					.field
            label.label Ingrese Cantidad de Silabas
						.control
							input.input(type='number' min='2' max='6' v-model='amount')
					.field
						button.button(@click='generate') Generar!
			.level
          pre {{ result }}
</template>

<script>
const {
  listado,
} = require('../files');

export default {
  data() {
    return {
      listado,
      result: '',
      amount: 0,
    };
  },
  methods: {
    generate() {
      const c = 0;
      while (c <= this.amount) {
        this.result += this.listado[Math.floor(Math.random() * this.listado.lenght)];
      }
    },
  },
};
</script>

<style lang="css" scoped>
</style>
