<template>
  <div class="example">
    <apexchart width="75%" height="400px" type="line" :options="chartOptions" :series="series"></apexchart>
    <div>
       <button @click="updateChart">Update!</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LineExample',
  data: function() {
    return {
      chartOptions: {
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2020', '02/01/2020','03/01/2020','04/01/2020','05/01/2020','06/01/2020','07/01/2020','08/01/2020',
                      '09/01/2020','10/01/2020','11/01/2020','12/01/2020'],
          noData: {
            text: "Loading..."
          },
          title: {
            text: "Twitter sentiment"
          }
        },
      },
      
      series: [{
        name: 'Series A',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }, {
        name: 'Series B',
        data: [23, 43, 54, 12, 44, 52, 32, 11]
      }]
      
      
      
      


    }
  },
  methods: {
      generateDayWiseTimeSeries(baseval, count, yrange) {
        
        var i = 0;
        var series = [];
        while (i < count) {
          var x = baseval;
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

          series.push([x, y]);
          baseval += 86400000;
          i++;
        }

        return series;
        
      },
      updateChart() {
        
        let series = [
            {
            name: 'South',
            data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'North',
            data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
              min: 10,
              max: 20
            })
          },
          
          {
            name: 'Central',
            data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
              min: 10,
              max: 15
            })
          }
        ]
        
        this.series = series
        
      },

      
  }
}
</script>
