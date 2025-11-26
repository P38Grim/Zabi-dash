// ===============================
// ZABI — FRONTEND SCRIPT
// By ZayDocs
// ===============================

// ------- Loader Fade Out -------
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 400);
  }, 400);
});

// ------- Mobile Menu Toggle -------
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

mobileToggle.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    gsap.fromTo(
      mobileMenu,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
    );
  } else {
    gsap.to(mobileMenu, {
      opacity: 0,
      y: -20,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => mobileMenu.classList.add("hidden")
    });
  }
});

// ------- Auto Year -------
document.getElementById("year").innerText = new Date().getFullYear();

// ------- Add to Discord Button -------
document.getElementById("addBtn")?.addEventListener("click", () => {
  window.open(
    "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot%20applications.commands&permissions=8",
    "_blank"
  );
});

// ------- GSAP Animations -------
gsap.registerPlugin(ScrollTrigger);

// Fade in sections on scroll
document.querySelectorAll("section").forEach((sec) => {
  gsap.fromTo(
    sec,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sec,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

// Navbar glass shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 20) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.35)";
    header.style.background = "rgba(0,0,0,0.55)";
  } else {
    header.style.boxShadow = "none";
    header.style.background = "rgba(0,0,0,0.35)";
  }
});

// ------- Smooth Scroll for Nav Links -------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// ------- Accent Hover Glow for Buttons -------
document.querySelectorAll(".btn-primary, .btn-ghost").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.backgroundPosition = `${e.clientX - rect.left}px ${e.clientY - rect.top}px`;
  });
});
