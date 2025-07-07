 // SPA: mostrar secciones sin recargar la página
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");

    function showSection(hash) {
      sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === hash) {
          section.classList.add("active");
        }
      });
    }

    // Maneja los clics de navegación
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const hash = link.getAttribute("href").replace("#", "");
        showSection(hash);
        history.pushState(null, "", `#${hash}`);
      });
    });

    // Mostrar sección según la URL al cargar
    window.addEventListener("load", () => {
      const currentHash = location.hash.replace("#", "") || "sobre-mi";
      showSection(currentHash);
    });