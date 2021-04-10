<template>
  <div class="SentiPolitCovidChart">
    <apexchart
      type="line"
      width="75%"
      height="400px"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LineExample",
  data: function() {
    return {
      /* Within the chartOptions several options can be customized. ApexCharts provides a understandable documentation concerning
      which options are available for different chart types.*/
      chartOptions: {
        xaxis: {
          type: "datetime",

          //If there are loading problems, this is shown:
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
            //due to different scales, the right axis has different labels
            opposite: true,
            seriesName: "COVID-19 Fälle in Deutschland",
            title: {
              text: "Aktive COVID-19 Fälle in Deutschland",
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
        // in the size array, the index represents each chart
        markers: {
          size: [12, 0, 0, 0],
          enabledOnSeries: [0],

          discrete: [
              
          ],
        },
        datalabels: {},

        tooltip: {
          enabled: true,
          enabledOnSeries: [0], //tooltips are only enabled for the first line, which only contains markers
          shared: false,
          intersect: true,

          style: {},
          onDatasetHover: {
            highlightDataSeries: true,
          },

          //the political news are stored in the politInfo array. So far, they are inserted manually, this can be improved
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

            /* Tooltip written in plain HTML code. In this case, the data of the chosen dataPoint, its index and its info
            are used as dynamic parameters dependet on the marker the user is hovering over. */
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
        
      ],
    };
  },
  // when mounted, the data is loaded via axios
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
              
          {
            type: "column",
            name: "Twitter-sentiment",
            data: response.data,
          },


          //the covid case numbers are stored in the data array for the fourth line graph
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
          },
        ];
      });
    },
  },
};
</script>
