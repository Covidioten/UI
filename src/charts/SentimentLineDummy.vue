<template>
  <div class="example">
<<<<<<< HEAD
    <apexchart width="75%" height="400px" type="line" :options="chartOptions" :series="series" ></apexchart>
=======
    <apexchart width="500" height="350" type="line" :options="chartOptions" :series="series"></apexchart>
>>>>>>> 79c74a30b116c40e358f5fe6b7193a18b2ae1ba2
    <div>
      
    </div>
  </div>
</template>

<script>
import twitterDataJoh from "/Users/lukasoberfrank/CodeProjects/basecamp/UI/src/assets/twiDataJoh.json"

export default {
  name: 'SentimentLineDummy',
  data: function() {
    return {
      chartOptions: {
        xaxis: {
<<<<<<< HEAD
          type: 'string',
          
          categories: ['01/01/2020', '02/01/2020','03/01/2020','04/01/2020','05/01/2020','06/01/2020','07/01/2020','08/01/2020',
                      '09/01/2020','10/01/2020','11/01/2020','12/01/2020'],
                      
=======
          type: 'datetime',
          /*
          categories: ['01/01/2020', '02/01/2020','03/01/2020','04/01/2020','05/01/2020','06/01/2020','07/01/2020','08/01/2020',
                      '09/01/2020','10/01/2020','11/01/2020','12/01/2020'],
                      */
>>>>>>> 79c74a30b116c40e358f5fe6b7193a18b2ae1ba2
          noData: {
            text: "Loading..."
          },
          title: {
            text: "Twitter sentiment"
<<<<<<< HEAD
          },
         
          
        },
      },

      markers: {
        size: 50,
        colors: "green",

      },
      
      
      series: [{
          name: "Twitter Sentiment",
          data: [{
            x: "03.03.2020",
            y: 0.6,
=======
          }
        },
      },
      
      
      series: [{
          data: [{
            x: "03.03.2020",
            y: 0.6
>>>>>>> 79c74a30b116c40e358f5fe6b7193a18b2ae1ba2
        }, {
            x: "04.04.2020",
            y: 0.4,
        }, {
            x: "05.04.2020",
            y: 0.54,
        }, {
            x: "06.04.2020",
            y: 0.75,
        }, {
            x: "07.04.2020",
            y: 0.78,
        }, {
            x: "08.04.2020",
            y: 0.65,
        }, {
            x: "09.04.2020",
            y: 0.6,
        }, {
            x: "10.04.2020",
            y: 0.69,
        }, {
            x: "11.04.2020",
            y: 0.3,
        }, {
            x: "12.04.2020",
            y: 0.31,
        }
<<<<<<< HEAD
      ]
      
        }
=======
      ]},
>>>>>>> 79c74a30b116c40e358f5fe6b7193a18b2ae1ba2
      ]
    }
      
      
  },
  mounted() {
    this.loopThroughJson()
    /*
    fetch("http://localhost:3000/root")
    .then(res => res.json())
    .then(data => this.exampleData = data)
    .catch(err => console.log(err.message))
    */

    
  },



  methods: {
     loopThroughJson() {
       
         //console.log(twitterDataJoh.root[0]["2020-01-04"].sentiment)
         //console.log(twitterDataJoh.root[0]["2020-01-04"].self)
       
       
       
     }

      
  }
}
</script>
