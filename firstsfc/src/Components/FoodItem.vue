<template>
  <div class="Oranges">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Oranges',
      message: 'I like them Oranges'
    }
  }
};
</script>

<style>
  .Oranges {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: orange;
  }
</style>