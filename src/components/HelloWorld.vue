<template>
  <div class="hello">
    <ul>
      <li>  <!-- v-for="video in videos" :key="video" -->
      
        <vue-plyr>
          <video poster="poster.png" src="@/assets/one.mp4"  size="720">
            <source src="@/assets/one.mp4" type="video/mp4" size="720">
            <source src="video-1080p.mp4" type="video/mp4" size="1080">
            <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
          </video>
        </vue-plyr>

      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

export default {
  
  name: 'HelloWorld',
  el: '#demo',
  videos: [],
    computed: {
      videos() {
        return this.$store.state.videos
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
