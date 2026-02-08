// Minimal JS: sets active nav link based on current path
(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".menu a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
    // Handle root path case
    if ((path === "" || path === "index.html") && (href === "index.html" || href === "./")) {
      a.classList.add("active");
    }
  });
})();
