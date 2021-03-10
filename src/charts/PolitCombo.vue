<template>
  <div class="example">
    <apexchart type="line" width="500" height="350" :options="chartOptions" :series="series"></apexchart>
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
          },
          
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
                
            },
            
            
        },
        markers: {
            //colors: ['#2E93fA', "#f0950c"]
            size: 8,

            discrete: [{
                seriesIndex: 0,
                dataPointIndex: 0,
                size: 0,
            }, {
                seriesIndex: 0,
                dataPointIndex: 1,
                size: 0,
            }, {
                seriesIndex: 0,
                dataPointIndex: 3,
                size: 0,
            }, {
                seriesIndex: 0,
                dataPointIndex: 5,
                size: 0,
            }, {
                seriesIndex: 0,
                dataPointIndex: 6,
                size: 0,
            }, {
                seriesIndex: 0,
                dataPointIndex: 7,
                size: 0,
            }, {
                seriesIndex: 0,
                dataPointIndex: 8,
                size: 0,
            }]
        },
        datalabels: {

        },
        tooltip: {
            
            enabled: true,
            enabledOnSeries: [0],
            shared: false,
            intersect: true,
           
            
            style: {
                
            },
             onDatasetHover: {
                highlightDataSeries: true,
            },


            custom: function({series, seriesIndex, dataPointIndex, w, politInfo}) {
            
            var politInfo = ["heute ist Januar", "es ist februar", "maerz", "april", "mai", "juni"]
            return '<div class="arrow_box">' +
                '<span>' + politInfo[dataPointIndex] + '</span>' +
                "<span>" + seriesIndex + "</span>" +
                '</div>'
            
  }
        },

        stroke: {
                show: true,
                width: [0, 0],
                opacity: [0, 0]
                
        },
        fill: {
            //colors: ['#2E93fA', "#f0950c"]
        }
          
      },
      
      series: [{
          name: "Twitter Sentiment",
          type: "line",
          data: [{
            x: "03.03.2020",
            y: 0.6,
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
        }]},
        {
        name: "Twitter Sentiment",
          type: "column",
          data: [{
            x: "03.03.2020",
            y: 0.6,
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
        }]
      }],
    /*
    {
        name: 'Politische Maßnahmen',
        type: "column",
        data: [0.68, 0.6, 0.5, 0.56, 0.68, 0.70, 0.72, 0.73, 0.65, 0.67, 0.60, 0.67]
      }, 
      {
        name: 'Sentiment',
        type: "line",
        data: [0.68, 0.6, 0.5, 0.56, 0.68, 0.70, 0.72, 0.73, 0.65, 0.67, 0.60, 0.67]
      }, */
      
  

      series2: [{
          name: "Twitter Sentiment",

          data: [{
            x: "03.03.2020",
            y: 0.6,
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
      ]
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
