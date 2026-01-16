<template>
  <div class="resume-container">
    <iframe 
      src="/index.html"
      title="Resume Website"
      class="resume-iframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'ResumeWebsite',
  mounted() {
    console.log('Resume Website loaded from /index.html');
  }
}
</script>

<style scoped>
.resume-container {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.resume-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>
