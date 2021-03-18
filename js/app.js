//Store alert div
const alertBanner = document.querySelector(".alert");
//Store canvas element('traffic-chart')
const trafficCanvas = document.querySelector('#traffic-chart');
//Store canvas element('daily-chart')
const dailyCanvas = document.querySelector('.daily-chart');
//Store canvas element('mobile-chart')
const mobileCanvas = document.querySelector('.mobile-chart');
//Store notifications div
const notifications = document.querySelector('#notifications');

const seeNotifications = () => {
  notifications.innerHTML = `<div class="notification-sub">
  <div class="messages">
  <p>You have 6 unread messages</p>
  <p>x</p>
  </div>

  <div class="followers">
  <p>You have e new followers</p>
  <p>x</p>
  </div>

  <div class="password">
  <p>Your password expires in 7 days</p>
  <p>x</p>
  </div> 
  </div>`
}
seeNotifications();


//Fuction that gives content to the alert div in the htmll
const callAlertBanner = () => {
    //Creates the html for alert.
    alertBanner.innerHTML = `<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
    to complete</p>
    <p class="alert-banner-close">x</p>
  </div>`
}
callAlertBanner();
//Click event delegation for alert banner.
alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display = 'none';
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
    duration: 0
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

