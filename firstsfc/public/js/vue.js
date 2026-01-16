// Vue.js Gallery Application
const { createApp } = Vue;

createApp({
  data() {
    return {
      currentIndex: 0,
      projects: [

        {
          itemImageSrc: 'https://stickerrs.com/wp-content/uploads/2024/03/Cat-Meme-Stickers-Featured.png',
          thumbnailImageSrc: 'https://stickerrs.com/wp-content/uploads/2024/03/Cat-Meme-Stickers-Featured.png',
          title: 'Cat',
          alt: 'A cute cat meme sticker',
        }
      ]
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    }
  }
}).mount('#app');
