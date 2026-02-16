// ================= FADE ON SCROLL =================
const faders = document.querySelectorAll(".fade");

const appear = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => appear.observe(el));


// ================= HOMEPAGE PHONE SWITCH =================
const phones = document.querySelectorAll(".phone");

phones.forEach(phone => {
  phone.addEventListener("click", () => {
    phones.forEach(p => p.classList.remove("active"));
    phone.classList.add("active");
  });
});


// ================= FEATURES DROPDOWN =================
document.querySelectorAll(".feature-header").forEach(header => {

  header.addEventListener("click", () => {

    const item = header.parentElement;

    // close other open ones
    document.querySelectorAll(".feature-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // open clicked one
    item.classList.toggle("active");

  });

});


// ================= COMMUNICATION CHART =================
document.addEventListener("DOMContentLoaded", function(){

  const canvas = document.getElementById("communicationChart");

  // run only if chart exists on this page
  if(canvas){

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "People with Communication Challenges",
          "General Population"
        ],
        datasets: [{
          data: [20, 80],
          backgroundColor: ["#316392", "#EBCF6B"],
          borderWidth: 0,
          hoverOffset: 20
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom"
          }
        }
      }
    });

  }

});
