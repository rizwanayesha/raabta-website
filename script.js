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
