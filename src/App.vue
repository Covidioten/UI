<template>
  <div id="app">
    <!--<div id="nav_bar">
    <header>
      
        <ul>
          <li><router-link to="/polit">Home</router-link></li>
          <li id="nav_info"><router-link to="/info">Info</router-link></li>

          </ul>
      </header>
      </div>-->
    
    <h1>COVID-19 Sentiment Analyse</h1>
    

    <p id="but">



      <router-link to="/polit">Politische Entscheidungen vs. Sentiment</router-link>
      <!--<router-link to="/sentimentLine">LineChart</router-link>-->
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

