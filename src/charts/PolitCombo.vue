<template>
  <div class="PolitCombo">
    <apexchart
      type="line"
      width="75%"
      height="400px"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <div>
      <!--<button @click="updateChart">Update!</button>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LineExample",
  data: function() {
    return {
      chartOptions: {
        xaxis: {
          type: "datetime",

          noData: {
            text: "Loading...",
          },
          title: {
            text: "",
          },
        },
        yaxis: [
          {
            seriesName: "Politische Maßnahmen",
            title: {
              text: "Twitter Sentiment",
            },
          },
          {
            seriesName: "Twitter Sentiment",
            show: false,
          },
          
          {
            opposite: true,
            seriesName: "COVID-19 Fälle in Deutschland",
            title: {
              text: "Active COVID-19 Fälle in Deutschland",
              rotate: 90,
            },
          },
          { 
              seriesName: "Overall satisfaction in Germany",
              show: false,
          },
        ],

        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        markers: {
          //[sentiment line, sentiment columns, covid cases]
          size: [12, 0, 0, 0],
          enabledOnSeries: [0],

          discrete: [
              /*
            {
              seriesIndex: 0,
              dataPointIndex: 0,
              size: 0,
            },
            {
              seriesIndex: 0,
              dataPointIndex: 1,
              size: 0,
            },
            {
              seriesIndex: 0,
              dataPointIndex: 3,
              size: 0,
            },
            {
              seriesIndex: 0,
              dataPointIndex: 5,
              size: 0,
            },
            {
              seriesIndex: 0,
              dataPointIndex: 6,
              size: 0,
            },
            {
              seriesIndex: 0,
              dataPointIndex: 9,
              size: 0,
            },
            {
              seriesIndex: 0,
              dataPointIndex: 8,
              size: 0,
            },
            {
              seriesIndex: 0,
              dataPointIndex: 10,
              size: 0,
            },
            {
              seriesIndex: 0,
              dataPointIndex: 12,
              size: 0,
            },*/
          ],
        },
        datalabels: {},
        tooltip: {
          enabled: true,
          enabledOnSeries: [0],
          shared: false,
          intersect: true,

          style: {},
          onDatasetHover: {
            highlightDataSeries: true,
          },

          custom: function({ series, seriesIndex, dataPointIndex, politInfo }) {
            politInfo = [
              { date: "Januar", info: "Bundeswehr holt Deutsche aus Wuhan" },
              { date: "Februar", info: "Erste Europäer sterben an Virus" },
              {
                date: "März",
                info: "Erster Deutscher mit Coivd-19 stirbt. Schulen und Kitas schließen. DAX rutscht weiter ab. Geschäfte schließen.",
              },
              { date: "April", info: "Kontaktsperren verlängert. Schutzmaßnahmen wirken. Mehr als 100.00 infizierte bundesweit. Läden öffnen wieder." },
              {
                date: "Mai", info: "Bund und Länder einigen sich auf Lockerungen.",
              },
              { date: "Juni", info: "Arbeitslosigkeit steigt. Koalition verabschiedet Konjunkturpaket. Urlauber dürfen wieder nach Dänemark." },
              { date: "Juli", info: "Keine aktiven Corona-Infektionen mehr in MV." },
              { date: "August", info: "Hitzewelle sorgt für überfüllte Strände. Bund und Länger einigen sich auf neue Maßnahmen." },
              { date: "September", info: "Auch im September 2020 steigen die Zahlen bei den Corona-Neuinfektionen. Weitere Lockerungen werden daher verschoben." },
              { date: "Oktober", info: "Am Ende des Monats beschließen Bund und Länder neue weitreichende Einschränkungen für die Bürger - ein Teil-Lockdown." },
              { date: "November", info: "Der zweite Teil-Lockdown mit Kontaktbeschränkungen und Schließungen in Gastronomie und Kultur beginnt." },
              {
                date: "Dezember",
                info:
                  "Angesichts stark steigender Infektionszahlen kommt es Mitte des Monats zum zweiten harten Lockdown in Deutschland.",
              },
            ];

            return (
              '<div class="arrow_box">' +
              '<div id="tooltipHead"><span>' +
              politInfo[dataPointIndex].date +
              "</span></div>" +
              "<div><br></div>" +
              '<div id="info-list"><ul>' +
              "<li>Sentiment: " +
              series[seriesIndex][dataPointIndex] +
              "</li>" +
              "<li><p>Info: " +
              politInfo[dataPointIndex].info +
              "</p></li>" +
              "</ul></div>" +
              "</div>"
            );
          },
        },
        colors: ["#E3001A", "#035afc", "#00ff00"],

        stroke: {
          show: true,
          width: [0, 0, 5, 3],
          opacity: [0, 0],
          curve: "smooth",
        },
      },

      series: [
        // {
        //   name: "Political Measurements",
        //   type: "line",
        //   data: [
        //     {
        //       x: "01.01.20",
        //       y: 0.11904,
        //     },
        //     {
        //       x: "02.01.20",
        //       y: 0.071517241,
        //     },
        //     {
        //       x: "03.01.20",
        //       y: 0.133793103,
        //     },
        //     {
        //       x: "04.01.20",
        //       y: 0.077357143,
        //     },
        //     {
        //       x: "05.01.20",
        //       y: 0.029733333,
        //     },
        //     {
        //       x: "06.01.20",
        //       y: 0.021333333,
        //     },
        //     {
        //       x: "07.01.20",
        //       y: 0.015238095,
        //     },
        //     {
        //       x: "08.01.20",
        //       y: 0.01308,
        //     },
        //     {
        //       x: "09.01.20",
        //       y: 0.009466667,
        //     },
        //     {
        //       x: "10.01.20",
        //       y: 0.019645161,
        //     },
        //     {
        //       x: "11.01.20",
        //       y: 0.0111,
        //     },
        //     {
        //       x: "12.01.20",
        //       y: 0.01296,
        //     },
        //   ],
        // },
        /*
        {
          name: "Overall satisfaction in Germany",
          type: "line",
          data: [{
            x: "05.01.2020",
            y: 0.068,
        }, {
            x: "06.01.2020",
            y: 0.07,
        }, {
            x: "07.01.2020",
            y: 0.072,
        }, {
            x: "08.01.2020",
            y: 0.073,
        }, {
            x: "11.01.2020",
            y: 0.067,
        }, {
            x: "12.01.2020",
            y: 0.062,
        }]},*/
      ],
    };
  },
  mounted: function() {
    this.populateWithData();
  },
  methods: {
    populateWithData() {
      axios({
        method: "GET",
        url: "https://api.covidioten.app/data-point",
      }).then((response) => {
        this.series = [
          {
            type: "line",
            name: "Politische Maßnahmen",
            data: response.data,
          },
              /*
            name: "Political Measurements",
            type: "line",
            data: [
              {
                x: "01.01.20",
                y: 0.11904,
              },
              {
                x: "02.01.20",
                y: 0.071517241,
              },
              {
                x: "03.01.20",
                y: 0.133793103,
              },
              {
                x: "04.01.20",
                y: 0.077357143,
              },
              {
                x: "05.01.20",
                y: 0.029733333,
              },
              {
                x: "06.01.20",
                y: 0.021333333,
              },
              {
                x: "07.01.20",
                y: 0.015238095,
              },
              {
                x: "08.01.20",
                y: 0.01308,
              },
              {
                x: "09.01.20",
                y: 0.009466667,
              },
              {
                x: "10.01.20",
                y: 0.019645161,
              },
              {
                x: "11.01.20",
                y: 0.0111,
              },
              {
                x: "12.01.20",
                y: 0.01296,
              },
            ],
          },*/
          {
            type: "column",
            name: "Twitter-sentiment",
            data: response.data,
          },
          {
            name: "COVID-19 Fälle in Deutschland",
            type: "line",
            data: [
              {
                x: "01.01.2020",
                y: 0,
              },
              {
                x: "02.01.2020",
                y: 0,
              },
              {
                x: "03.01.2020",
                y: 114,
              },
              {
                x: "04.01.2020",
                y: 58350,
              },
              {
                x: "05.01.2020",
                y: 30441,
              },
              {
                x: "06.01.2020",
                y: 9247,
              },
              {
                x: "07.01.2020",
                y: 7463,
              },
              {
                x: "08.01.2020",
                y: 8251,
              },
              {
                x: "09.01.2020",
                y: 14820,
              },
              {
                x: "10.01.2020",
                y: 28044,
              },
              {
                x: "11.01.2020",
                y: 177824,
              },
              {
                x: "12.01.2020",
                y: 309502,
              },
              {
                x: "01.01.2021",
                y: 377206,
              },
            ],
          },/*
          {
          name: "Overall satisfaction in Germany",
          type: "line",
          data: [{
            x: "05.01.2020",
            y: 0.68,
        }, {
            x: "06.01.2020",
            y: 0.7,
        }, {
            x: "07.01.2020",
            y: 0.72,
        }, {
            x: "08.01.2020",
            y: 0.73,
        }, {
            x: "11.01.2020",
            y: 0.67,
        }, {
            x: "12.01.2020",
            y: 0.62,
        }]},*/
        ];
      });
    },
  },
};
</script>
