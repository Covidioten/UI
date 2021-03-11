<template>
  <div class="PolitCombo">
    <apexchart type="line" width="75%" height="400px" :options="chartOptions" :series="series"></apexchart>
    <div>
       <!--<button @click="updateChart">Update!</button>-->
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
          
          noData: {
            text: "Loading..."
          },
          title: {
            text: ""
          },
          
        },
        yaxis: [
            {
                seriesName: 'Political Measurements',
                title: {
                    text: "Twitter Sentiment"
                },
                
            },
            {
                seriesName: 'Twitter Sentiment',
                show: false,
            },
            {
                opposite: true,
                seriesName: 'COVID-19 Cases in Germany',
                title: {
                    text: "Active COVID-19 Cases in Germany",
                    rotate: 90
                },
            },
            
        ],
        

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
                
            },
            
            
        },
        markers: {
            //[sentiment line, sentiment columns, covid cases]
            size: [12, 0, 0],
            enabledOnSeries: [0],

            discrete: [ {
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
            }, ]
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
            
            var politInfo = [
                {date: "Maerz", info: "Coronafälle in Deutschland haeufen sich"},
                {date: "April", info: ""},
                {date: "Mai", info: "Debatte über Schulöffnungen spitzt sich zu"},
                {date: "Juni", info: ""},
                {date: "Juli", info: "Urlaub in Deutschland sehr populär"},
                {date: "August", info: ""},
                {date: "September", info: ""},
                {date: "Oktober", info: ""},
                {date: "November", info: ""},
                {date: "Dezember", info: "Neuinfektion auf neuem Höchstand. Die Deutschen fürchten um ihr Weihnachtsfest"}
            ]
                
            
            return '<div class="arrow_box">'  +
                '<div id="tooltipHead"><span>' + politInfo[dataPointIndex].date + '</span></div>' +
                '<div>Was war los?</div>' +
                '<div id="info-list"><ul>' + 
                    '<li>Sentiment: ' + series[seriesIndex][dataPointIndex] + '</li>' +
                    '<li><p>Info: ' + politInfo[dataPointIndex].info + '</p></li>' +
                '</ul></div>' +
                
                '</div>'
            
            }
        },
        colors:["#E3001A", "#035afc", "#00ff00"],

        stroke: {
                show: true,
                width: [0, 0, 5],
                opacity: [0, 0],
                curve: 'smooth'
                
        },
        
        
          
      },
      
      
      series: [{
          name: "Political Measurements",
          type: "line",
          data: [{
            x: "03.01.2020",
            y: 0.6,
        }, {
            x: "04.01.2020",
            y: 0.4,
        }, {
            x: "05.01.2020",
            y: 0.54,
        }, {
            x: "06.01.2020",
            y: 0.75,
        }, {
            x: "07.01.2020",
            y: 0.78,
        }, {
            x: "08.01.2020",
            y: 0.65,
        }, {
            x: "09.02.2020",
            y: 0.6,
        }, {
            x: "10.01.2020",
            y: 0.69,
        }, {  
            x: "11.01.2020",
            y: 0.3,
        }, {
            x: "12.01.2020",
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
        }],
        
      },

      {
          name: "COVID-19 Cases in Germany",
          type: "line",
          data: [{
            x: "03.01.2020",
            y: 114,
        }, {
            x: "04.01.2020",
            y: 58350,
        }, {
            x: "05.01.2020",
            y: 30441,
        }, {
            x: "06.01.2020",
            y: 9247,
        }, {
            x: "07.01.2020",
            y: 7463,
        }, {
            x: "08.01.2020",
            y: 8251,
        }, {
            x: "09.01.2020",
            y: 14820,
        }, {
            x: "10.01.2020",
            y: 28044,
        }, {  
            x: "11.01.2020",
            y: 177824,
        }, {
            x: "12.01.2020",
            y: 309502,
        }, {
            x: "01.01.2021",
            y: 377206,
        }
        
        ]},
  
      ],
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
