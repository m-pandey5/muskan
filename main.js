(function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    function setTheme(mode) {
        if (mode === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            themeToggle.classList.add("light");
            themeIcon.textContent = "☀️";
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            themeToggle.classList.remove("light");
            themeIcon.textContent = "🌙";
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");

    themeToggle.addEventListener("click", function () {
        if (document.body.classList.contains("light")) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    });
})();
