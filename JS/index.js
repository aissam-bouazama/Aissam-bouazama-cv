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
     document.addEventListener('DOMContentLoaded', function() {
      // Smooth scrolling for navigation
      document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 20,
              behavior: 'smooth'
            });
            
            // Update URL without reload
            history.pushState(null, '', targetId);
          }
        });
      });
      
      // Highlight active section in navigation
      const sections = document.querySelectorAll('.section');
      const navLinks = document.querySelectorAll('nav a');
      
      function setActiveLink() {
        let index = sections.length;
        
        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
        
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index]?.classList.add('active');
      }
      
      setActiveLink();
      window.addEventListener('scroll', setActiveLink);
      
      // Print button functionality
      const printButton = document.createElement('button');
      printButton.innerHTML = '<i class="fas fa-print"></i> Imprimir CV';
      printButton.style.position = 'fixed';
      printButton.style.bottom = '20px';
      printButton.style.right = '20px';
      printButton.style.padding = '10px 15px';
      printButton.style.backgroundColor = 'var(--primary-color)';
      printButton.style.color = 'white';
      printButton.style.border = 'none';
      printButton.style.borderRadius = '5px';
      printButton.style.cursor = 'pointer';
      printButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
      printButton.style.zIndex = '1000';
      printButton.addEventListener('click', () => window.print());
      
      document.body.appendChild(printButton);
    });