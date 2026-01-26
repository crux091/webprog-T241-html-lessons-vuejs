<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from './supabase';


const instruments = ref([]);
const errorMsg = ref('');
const rawData = ref(null);

async function getInstruments() {
  const { data, error } = await supabase.from('instruments').select();
  rawData.value = data;
  if (error) {
    errorMsg.value = error.message;
  }
  instruments.value = data || [];
}

onMounted(() => {
  getInstruments();
});
</script>

<template>
  <div>
    <div v-if="errorMsg" style="color: red;">Error: {{ errorMsg }}</div>
    <div v-else-if="!instruments.length">No data found.</div>
    <ul v-else>
      <li v-for="instrument in instruments" :key="instrument.id">
        {{ instrument.id }} - {{ instrument.name }}
      </li>
    </ul>
    <!-- raw data removed; only rendered list is shown -->
  </div>
</template>
<!-- End of file -->