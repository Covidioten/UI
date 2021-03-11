<template>
  <div class="info">

    <h2>
      Info
      </h2>

   
    <div>
      <p>
       Hi, wir sind die Covidioten und auf dieser Webseite haben wir für dich Twitter-Daten analysiert, 
       um den Zusammenhang zwischen politischen Maßnahmen und der Stimmung der deutschen Twitter-Welt zu zeigen. 
      <br>
      <br>
      <p id="erklaerung">
      Um das Sentiment zu berechnen, haben wir einen Datensatz des base.camps der Uni Hamburg benutzt,
      der mit Twitterdaten aus den letzten Jahr gefüllt ist.<br>
      Davon haben wir die Tweets des letzten Jahrs in Deutschland gerausgepickt und
      diese mittels Textblob nach dem Sentiment - also der Stimmung - analysiert.<br>
      <br>
      <br>
      <p>
      Die Zufriedenheit in Deutschland und die aktuellen Fallzahlen stammen aus externen Quellen.
      <br>
      </p>

    </div>
    <div id="quellen">
      <h3>Quellen: </h3>
        <ul>
          <li>Aktive Coronafälle: <a href="https://de.statista.com/statistik/daten/studie/1181971/umfrage/aktive-faelle-des-coronavirus-in-deutschland/#professional">statista.de</a></li>
          <br>
          <li>Zufriedenheit in Deutschland: Online-Studie "Psychische Wohlbefinden in der aktuellen Krise" 
            des UKE zitiert aus Spektrum der Wissenschaft "Gehirn und Geist" 4/2021</li>
          </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSection',
  data: function() {
    return {
      
    }
  },
  methods: {
    
        
  }
}
</script>
