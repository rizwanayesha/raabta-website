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
