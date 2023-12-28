const welcome = document.getElementById('welcome');
const datee = document.getElementById('date');
const body = document.querySelector('body');
const icon = document.getElementById('icon');
const main=document.getElementById('main');
const da = new Date();
main.innerText=da.toDateString();


setInterval(() => {
    const d = new Date();
    welcome.innerText = d.toLocaleTimeString();
}, 1000);

icon.onclick = function () {
    let element = document.body;
    element.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        icon.src = "https://icons.veryicon.com/png/o/application/yitao-wireless-icon-library/brightness-3.png";
        icon.style.color = "white";
        setTimeout(() => {
            alert("changed theme successfully");
           }, 300); 
    } else {
        icon.src = "https://cdn.icon-icons.com/icons2/1674/PNG/512/moon_111148.png";
        setTimeout(() => {
            alert("changed theme successfully");
           }, 300); 
    }
};
