//Store canvas element('traffic-chart')
const trafficCanvas = document.querySelector('#traffic-chart');
//Store canvas element('daily-chart')
const dailyCanvas = document.querySelector('.daily-chart');
//Store canvas element('mobile-chart')
const mobileCanvas = document.querySelector('.mobile-chart');
const allData = [200, 800, 2000, 1200, 1800, 500, 400, 170, 2000, 700, 100]

trafficNav.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
      const trafficLi = trafficNav.querySelectorAll('li');
      trafficLi.forEach(li => {
        li.classList.remove('selected');
        e.target.classList.add('selected');
      });
     
    }
  });



//Objects containing traffic chart data.
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rgb(233, 186, 233)',
      borderWidth: 1,
    }]
  };
  let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 1000
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
    data: trafficData,
    options: trafficOptions
  });
  
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