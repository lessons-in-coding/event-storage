//Local Storage
//Set
localStorage.setItem('cityName', 'Yangon');
localStorage.setItem('country', 'Myanmar');

//Get
localStorage.getItem('cityName');//console.log(localStorage.getItem('cityName'));
localStorage.getItem('country');//console.log(localStorage.getItem('country'));

//Remove
localStorage.removeItem('cityName');
localStorage.removeItem('country');

//Clear
localStorage.clear();//clear all


//Session Storage
//Set, Get, Remove, Clear are same as the local storage
sessionStorage.setItem('cityName', 'Yangon');
sessionStorage.setItem('country', 'Myanmar');


//Cookie
document.cookie="userName= Ko Ko; expires= 01 Jan 2025 12:00:00 UTC";
document.cookie="userAge= 30; expires= 01 Jan 2025 12:00:00 UTC";
//console.log(document.cookie)