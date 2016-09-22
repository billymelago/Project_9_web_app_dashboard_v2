
Chart.defaults.global.defaultFontColor = "#000";
Chart.defaults.global.responsive = true;
Chart.defaults.global.title.display = true;
Chart.defaults.global.title.text ="MyAPP";
Chart.defaults.global.legend.position = 'bottom';
Chart.defaults.global.defaultFontSize = 10;
var dData = function() {
    return Math.round(Math.random() * 3000) + 10;
};

var CHART = document.getElementById('myTrafficChart');
console.log(CHART);

var lineChart = new Chart(CHART, {
    type: 'line',
    data: {
    labels: [["16-22","April"], ["23-29","April"], ["30-05","April-May"], ["06-12","May"], ["13-19","May"], ["20-26","May"], ["27-03","May-June"], ["04-10","June"], ["11-17","June"], ["18-24","June"], ["25-31","June"]],
    datasets: [
        {
            label: "2016",
            fill: true,
            lineTension: 0.04,
            backgroundColor: "rgba(65,204,74,0.8)",
            borderColor: "rgba(85,158,52,1)",
            borderWidth: 2,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#559E34",
            pointBackgroundColor: "#41CC4A",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#41CC4A",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()],
            spanGaps: false,
        }, {
            label: "2015",
            fill: true,
            lineTension: 0.04,
            backgroundColor: "rgba(252,42,119,0.8)",
            borderColor: "rgba(252,42,119,1)",
            borderWidth: 2,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#FC2A77",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "rgba(252,42,119,.6)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()],
            spanGaps: false,
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var barChart = document.getElementById("barChart");

var dailyTrafficChart = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        label: '2015',
        backgroundColor: '#41CC4A',
        borderColor: '#559E34',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(65,204,74,0.4)',
        hoverBorderColor: '#559E34',
        data: [65, 59, 80, 81, 56, 55, 75],
      },
      {
        label: '2016',
        backgroundColor: '#FC2A77',
        borderColor: '#FC2A77',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(252,128,173,0.4)',
        hoverBorderColor: '#FC2A77',
        data: [75, 68, 97, 71, 46, 70, 64],
      }
    ]
  }
});

var doughnutChart = document.getElementById("doughnutChart");

var mobileUsersChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels:[
            'iOS',
            'Android',
            'BlackBerry',
            'Windows',
            'Tablets'
        ],
        datasets: [
            {
                data: [dData(), dData(), dData(), dData(), dData()],
                backgroundColor: [
                    "rgba(252,42,119, 1)",
                    "rgba(252,128,173, 1)",
                    "rgba(255,252,81, 1)",
                    "rgba(85,158,52, 1)",
                    "rgba(65,204,74, 1)"
                ],
                hoverBackgroundColor: [
                    "rgba(252,42,119, .8)",
                    "rgba(252,128,173, .8)",
                    "rgba(255,252,81, .8)",
                    "rgba(85,158,52, .8)",
                    "rgba(65,204,74, .8)"
                ]
            }
        ]
    },
            options: {
            cutoutPercentage: 40
        }
});

var hourly = document.getElementById('hourly'),
    daily = document.getElementById('daily'),
    weekly = document.getElementById('weekly'),
    monthly = document.getElementById('monthly');

hourly.addEventListener('click', function () {
    console.log('hourly');
    lineChart.data.datasets[0].data = [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()];
    lineChart.update();
    lineChart.data.datasets[1].data = [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()];
    lineChart.update();
});

daily.addEventListener('click', function () {
    console.log('daily');
    lineChart.data.datasets[0].data = [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()];
    lineChart.update();
    lineChart.data.datasets[1].data = [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()];
    lineChart.update();
});

weekly.addEventListener('click', function () {
    console.log('weekly');
    lineChart.data.datasets[0].data = [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()];
    lineChart.update();
    lineChart.data.datasets[1].data = [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()];
    lineChart.update();
});

monthly.addEventListener('click', function () {
    console.log('monthly');
    lineChart.data.datasets[0].data = [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()];
    lineChart.update();
    lineChart.data.datasets[1].data = [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()];
    lineChart.update();
});
 