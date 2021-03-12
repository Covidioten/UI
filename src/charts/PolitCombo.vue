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
            seriesName: "Political Measurements",
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
            seriesName: "COVID-19 Cases in Germany",
            title: {
              text: "Active COVID-19 Cases in Germany",
              rotate: 90,
            },
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
            },
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
              { date: "Januar", info: "" },
              { date: "Februar", info: "" },
              {
                date: "Maerz",
                info: "Coronafälle in Deutschland haeufen sich",
              },
              { date: "April", info: "" },
              {
                date: "Mai",
                info: "Debatte über Schulöffnungen spitzt sich zu",
              },
              { date: "Juni", info: "" },
              { date: "Juli", info: "" },
              { date: "August", info: "Urlaub in Deutschland sehr populär" },
              { date: "September", info: "" },
              { date: "Oktober", info: "" },
              { date: "November", info: "" },
              {
                date: "Dezember",
                info:
                  "Neuinfektion auf neuem Höchstand. Die Deutschen fürchten um ihr Weihnachtsfest",
              },
            ];

            return (
              '<div class="arrow_box">' +
              '<div id="tooltipHead"><span>' +
              politInfo[dataPointIndex].date +
              "</span></div>" +
              "<div>Was war los?</div>" +
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
          name: "Zufriedenheit in Deutschland",
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
        url: "https://covidioten-backend/data-point",
      }).then((response) => {
        this.series = [
          {
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
          },
          {
            type: "column",
            data: response.data,
          },
          {
            name: "COVID-19 Cases in Germany",
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
