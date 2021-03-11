//Store alert div
const alertBanner = document.querySelector(".alert");
//Store canvas element('traffic-chart')
const trafficChart = document.querySelector('#traffic-chart');
console.log(trafficChart);
//Object containing traffic chart data.
let traffic = {
    labels: [],
    datasets: [{
        data: [],
        backgroundColor: '#777',
        borderwidth: 2,
    }],
};


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

alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display = 'none';
    }
});