const faders=document.querySelectorAll(".fade");

const appear=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

faders.forEach(fader=>{
appear.observe(fader);
});
const phones = document.querySelectorAll(".phone");

phones.forEach(phone => {
    phone.addEventListener("click", () => {

        phones.forEach(p => p.classList.remove("active"));

        phone.classList.add("active");

    });
});
function toggleFeature(element){

const item = element.parentElement;

item.classList.toggle("active");

}
function toggleFeature(element){

const parent = element.parentElement;

parent.classList.toggle("active");

}
const ctx = document.getElementById('communicationChart');

if (ctx) {

new Chart(ctx, {
type: 'doughnut',
data: {
labels: [
'People with Communication Challenges',
'General Population'
],
datasets: [{
data: [20, 80],
backgroundColor: [
'#7FA7D6',   // primary
'#F0B88A'    // accent
],
borderWidth:0,
hoverOffset:20
}]
},
options: {
responsive:true,
cutout:'65%',
plugins:{
legend:{
position:'bottom',
labels:{
color:'#2c2c2c',
font:{ size:14 }
}
}
},
animation:{
animateRotate:true,
duration:2200,
easing:'easeOutBounce'
}
}
});

}
