//Store canvas element('traffic-chart')
const trafficCanvas = document.querySelector('#traffic-chart');
//Store canvas element('daily-chart')
const dailyCanvas = document.querySelector('.daily-chart');
//Store canvas element('mobile-chart')
const mobileCanvas = document.querySelector('.mobile-chart');


trafficNav.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
      const trafficLi = trafficNav.querySelectorAll('li');
      trafficLi.forEach((li, index) => {
        li.classList.remove('selected');
        e.target.classList.add('selected');
        // switch(e.target.className){
        //     case 'daily': 
        //      //Creates a new traffic chart
        //       trafficChart = new Chart(trafficCanvas, {
        //       type: 'line',
        //       data: trafficDataDaily,
        //       options: trafficOptions
        //       });
        //     break;
        //   }
        if(e.target.classList.contains('daily')) {
           //Creates a new traffic chart
            trafficChart = new Chart(trafficCanvas, {
              type: 'line',
              data: trafficDataDaily,
              options: trafficOptions
          });
        } else if(e.target.classList.contains('monthly')) {
              //Creates a new traffic chart
              rafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficDataMonthly,
                options: trafficOptions
            });
        } else if (e.target.classList.contains('weekly')) {
              //Creates a new traffic chart
              rafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficDataWeekely,
                options: trafficOptions
              });
        } else if (e.target.classList.contains('hourly')) {
              //Creates a new traffic chart
              rafficChart = new Chart(trafficCanvas, {
                  type: 'line',
                  data: trafficDataHourly,
                  options: trafficOptions
                });
        }
      });
    }
  });



//Objects containing traffic chart data.
let trafficDataMonthly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rgb(233, 186, 233)',
      borderWidth: 1,
    }]
  };

//Objects containing traffic chart data.
let trafficDataDaily = {
  labels: ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W"],
  datasets: [{
    data: [2500, 2000, 700, 2500, 1000, 1200, 000, 2000, 2500, 900, 2500],
    backgroundColor: 'purple',
    borderWidth: 1,
  }]
};

//Objects containing traffic chart data.
let trafficDataHourly = {
  labels: ["12AM", "4AM", "6AM", "8AM", "10AM", "12PM", "2PM", "4PM", "8PM", "10PM", "11PM"],
  datasets: [{
    data: [300, 2000, 200, 2000, 500, 1200, 6000, 900, 1100, 400, 800],
    backgroundColor: 'black',
    borderWidth: 1,
  }]
};

//Objects containing traffic chart data.
let trafficDataWeekely = {
  labels: ["WK-1", "WK-2", "WK-3", "WK-4", "WK-1", "WK4", "WK-3", "WK-2", "WK-1", "WK-4", "WK-5"],
  datasets: [{
    data: [1000, 1600, 900, 1100, 2500, 1200, 1000, 1500, 2000, 1400, 2500],
    backgroundColor: 'darkred',
    borderWidth: 1,
  }]
};

  let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 800,
      easing: 'easeOutBack'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  };
  //Creates a new traffic chart
  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataMonthly,
    options: trafficOptions
  });
  
console.log(trafficChart.data);

  //Objects containing daily chart data.
  
  const dailyData = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          label: '# of Hits',
          data: [75, 115, 175, 125, 225, 200, 100],
          backgroundColor: 'rgb(151, 78, 151)',
          boarderWidth: 1
      }]
  };
  
  const dailyOptions = {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true 
              }
          }]
      },
      legend: {
          display: false
      }
  }
  
  let dailyChart = new Chart(dailyCanvas, {
      type: 'bar',
      data: dailyData,
      options: dailyOptions
  });
  
  //Object containing data for mobile charts
  const mobileData = {
      labels: ["Desktop", "Tablet", "Phones"],
      datasets: [{
          label: '# of Users',
          data: [2000, 550, 500],
          borderWidth: 0,
          backgroundColor: [
              'purple',
              'rgb(233, 186, 233)',
              'rgb(151, 78, 151)',
          ]
      }]
  };
  
  const mobileOptions = {
      legend: {
          position: 'right',
          labels: {
              boxWidth: 20,
              fontstyle: 'bold'
          }
      }
  }
  
  //Creates a new mobile chart.
  let mobileChart = new Chart(mobileCanvas, {
      type: 'doughnut',
      data: mobileData,
      options: mobileOptions
  });