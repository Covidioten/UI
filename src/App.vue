<template>
  <div id="app">
    <div id="top-bar">
      
    </div>    
    <navigation/>
    
    <h1>COVID-19 Sentiment Analysis</h1>
    

    <p>
      
    <router-link to="/info">Info</router-link>
    <router-link to="/sentimentLine">chart</router-link>
      
    </p>
    

    

      <router-view></router-view>
      
      


  </div>
  
</template>

<script>
import InfoSection from './components/InfoSection.vue'


export default {
  name: 'app',
  components: {
    InfoSection
    
  }
}
</script>

<style src="./Styles.css"></style>

