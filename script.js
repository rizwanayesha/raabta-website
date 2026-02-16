// Fade animation
const faders = document.querySelectorAll(".fade");

const appear = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(fader => appear.observe(fader));


// Phone click switching
const phones = document.querySelectorAll(".phone");

phones.forEach(phone => {
  phone.addEventListener("click", () => {
    phones.forEach(p => p.classList.remove("active"));
    phone.classList.add("active");
  });
});


// Chart
const canvas = document.getElementById("communicationChart");

if (canvas && typeof Chart !== "undefined") {

  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Communication Challenges", "General Population"],
      datasets: [{
        data: [20, 80],
        backgroundColor: ["#7FA7D6", "#F0B88A"],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1500
      }
    }
  });
}
