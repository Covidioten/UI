<template>
  <div class="example">
    <apexchart width="500" height="350" :options="chartOptions" :series="series"></apexchart>
    <div>
       <button @click="updateChart">Update!</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ComboCharts',
  data: function() {
    return {
      chartOptions: {
        
          chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Traffic Sources'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: 'Website Blog',
          },
        
        }, {
          opposite: true,
          title: {
            text: 'Social Media'
          }
        }]
        
      },
      
      series: [{
        type: "line",
        name: 'Series A',
        data: [0.7, 0.6, 0.1, 0.6, 0.7, 0.8, 0.7, 0.75, 0.6, 0.5, 0.4, 0.3]
      }, {
        name: 'Series B',
        type: "line",
        data: [0.7, 0.6, 0.4, 0.6, 0.7, 0.8, 0.7, 0.75, 0.6, 0.5, 0.4, 0.3]
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
