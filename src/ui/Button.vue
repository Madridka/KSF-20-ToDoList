<template>
  <div>
    <button @click="$emit('click', $event)">
      <slot>Кнопка</slot>
    </button>
  </div>
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

<style>
</style>