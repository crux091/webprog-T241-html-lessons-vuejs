<template>
  <div>
    <h2>Supabase Data</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <pre v-else>{{ data }}</pre>
  </div>
</template>

<script>
import { fetchProfiles } from '../api';

export default {
  name: 'ResumeWebsite',
  data() {
    return {
      data: null,
      error: null,
      loading: true
    };
  },
  async mounted() {
    const { data, error } = await fetchProfiles();
    this.data = data;
    this.error = error;
    this.loading = false;
  }
}
</script>

<style scoped>

</style>
