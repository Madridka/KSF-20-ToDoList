<template>
  <button @click="$emit('click', $event)">
    <slot>Кнопка</slot>
  </button>
</template>

<script>
export default {
  name: "btnDel",
  components: {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>