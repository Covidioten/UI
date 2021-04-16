<template>
  <div class="sentiment">

    <h2>Was bedeutet Sentiment?</h2>

    <div>
      <p>
      Das Sentiment (englisch für "Stimmung") beschreibt die Polarität eines Textes zwischen -1.0 und 1.0. <br>
      -1.0 entspricht hierbei einer sehr negativen Stimmung und 1.0 einer sehr positiven.
      </p>
      <img id="trump" alt="trump tweet saturday night live" :src="require('../assets/trump_saturday_night.jpg' )">
      <p>Für diesen Tweet wurde mit TextBlob (einer Library für Sentiment-Analysen) ein Sentiment von <b>-0.171</b> ermittelt 
      - also eher negativ. <br>
      Der Text ""<i>I love university</i>" hat hingegen ein Sentiment von <b>0.5</b>.
      </p>
    </div>
    <div>
    <p>Quelle: https://themoderatevoice.com/humiliate-by-twitter-be-humiliated-by-twitter/</p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'SentimentExplained',
  data: function() {
    return {
      
    }
  },
  methods: {
    
        
  }
}
</script>
