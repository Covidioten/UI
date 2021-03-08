<template>
  <div id="app">
    <div id="top-bar">
      
    </div>    
    
    <h1>COVID-19 Sentiment Analysis</h1>
    

    <p>

      <router-link to="/sentimentLine">chart</router-link>
      
      <router-link to="/info">Info</router-link>
      
      
    </p>

    <router-view></router-view>
   
  </div>
  
</template>

<script>



export default {
  name: 'app',
  components: {
    
    
  }
}
</script>

<style src="./Styles.css"></style>

