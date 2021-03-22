//Get required elements

//Store alert div
const alertBanner = document.querySelector(".alert");
//Store notifications div
const notifications = document.querySelector('#notifications');
//Bell SVG
const bell = document.querySelector('.bell');
//Store traffic-nav
const trafficNav = document.querySelector('.traffic-nav');
//Users info
const userInfo = ['Victoria Chambers', 'Josh Camron', 'Alyssa Finn', 'Readdy Yung', 'Caprice Laws', 'Adam Gouveia', 'Arminata Kamara', 'Osman Kamara'];
//Form input
const input = document.querySelector('#message-form');
//list container
const usersContainer = document.querySelector('.suggest-list');
//Form input
const formInput = document.querySelector('.message-form');
//Store textarea
const textArea = document.querySelector('.message-area');
//Form button
const formButton = document.querySelector('.message-button');
//Store form
const form = document.querySelector('.message-container');
//First Toggle input box
const firstToggleButton = document.querySelector('#first-toggle');
//Store second toggle button
const secondToggleButton = document.querySelector('#second-toggle');
//Select options
const timeZone = document.querySelector('#timezone');
//Store settings save button
const save = document.querySelector('.save');
//Store settings cancle button
const cancle = document.querySelector('.cancle');


//Function that gives content to the alert div in the htmll
const seeNotifications = () => {
  notifications.innerHTML = `<div class="notification-sub">
  <div class="messages">
    <p>You have 6 unread messages</p>
    <p class="close">x</p>
  </div>

  <div class="followers">
    <p>You have one new follower</p>
    <p class="close">x</p>
  </div>

  <div class="password">
    <p>Your password expires in 7 days</p>
    <p class="close">x</p>
  </div> 
  </div>`
  return notifications;
}
//Call seeNotifications function to populate the notifications div on load.
seeNotifications();
//Store notification message container in notification
const notification = document.querySelector('.notification-sub');


//Click event on container
notification.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('close')) {
      element.parentNode.remove();
  }
});

//Click event displaying messages & hiding(make it transparent) the notification div.
bell.addEventListener('click', () => {
  notification.style.display = 'block';
  notification.classList.add('showing');
  notifications.style.backgroundColor = 'transparent';
});

//Window click event to get raid of notification div when clicked outside of it.
window.addEventListener('click', (e) => {
  if(e.target !== bell && notification.classList.contains('showing')) {
    notification.style.display = 'none';
  }
  if (e.target.classList.contains('close')) {
    notification.style.display = 'block';
}
});


//Function that gives content to the alert div in the htmll
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

//Message submit section
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!input.value || !textArea.value) {
    alert("Aren't you missing something? Make sure you select a user and type a message");
  } else {
    alert("Your message has been submitted!");
  }
});

//Auto complete section
//If key up
input.addEventListener('keyup', (e) => {
  //Store input typed users
  let users = [];
  let inputValue = e.target.value;
  if(inputValue){
    usersContainer.style.display = 'block';
    users = userInfo.filter(user => {
      return user.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
    });
    users = users.map(user => {
      return`<li>${user}</li>`
    });
  } else {
    usersContainer.style.display = 'none';
  }
  showUsers(users);
});
//Append user's input to ul element if any.
const showUsers = (list) => {
    const liForUl = !list.length ? `` : 
      list.join('');
      usersContainer.innerHTML = liForUl;
//Select all li attach a click event to each  
      const ulChildren = usersContainer.querySelectorAll('li');
      ulChildren.forEach(li => {
        li.addEventListener('click', (e) => {
//When click the become the input text content 
        formInput.value = li.textContent;
        usersContainer.style.display = 'none';
      });
    });
}


//Function that retrieves searches from Local Storage, return an array
const getRecentSettings = () => {
  const settings = localStorage.getItem('recentSettings');
  const timeGot = settings ? JSON.parse(settings) : {};
  return timeGot;
}

//Set the time zone to the saved value in localStorage on load.
timeZone.value = getRecentSettings().times;


//Function that retrieves toggle history from Local Storage, return an array
const getRecentToggle= () => {
  const getToggle = localStorage.getItem('recentToggle');
  const toggleGot = getToggle ? JSON.parse(getToggle) : timeZone.selectedIndex = 0;
  return toggleGot;
}

//Set the toggles to the saved values in localStorage on load.
firstToggleButton.checked = getRecentToggle().first;
secondToggleButton.checked = getRecentToggle().second;


//Click event that saves settings to storage
save.addEventListener('click', (e) => {
//Time Zones localStorage 
  const setting = timeZone.value;
  const settingsValue = {'times': setting};

  localStorage.setItem('recentSettings', JSON.stringify(settingsValue));

//Toggle buttons localStorage 
  const firstToggle = firstToggleButton.checked;
  const secondToggle = secondToggleButton.checked;
  const toggled = {'first':firstToggle, 'second':secondToggle};

  localStorage.setItem('recentToggle', JSON.stringify(toggled));
});

//Click event that deletes settings to storage
cancle.addEventListener('click', (e) => {
  localStorage.removeItem('recentSettings');
  localStorage.removeItem('recentToggle');
  timeZone.selectedIndex = 0;
});
