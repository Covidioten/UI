<template>
  <div id="app">
    
    <h1>COVID-19 Sentiment Analyse</h1>
    
    <p id="but">
      <router-link to="/polit">Politische Entscheidungen vs. Sentiment</router-link>
      <router-link to="/senti">Was bedeutet Sentiment?</router-link>
      <router-link to="/info">Info</router-link>
    </p>

    <router-view></router-view>

    <Footer></Footer>
   
  </div>
</template>

<script>

/* Since the Footer is the only component that is not linked to by the router, it must be imported.*/
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer  
  }
}
</script>

<style src="./Styles.css"></style>

