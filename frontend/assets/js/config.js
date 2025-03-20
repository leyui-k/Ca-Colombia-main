// Avatars
document.addEventListener('DOMContentLoaded', function() {
    const users = [
        { id: '312978547', imgId: 'avatar1' }, 
        { id: '1413431128', imgId: 'avatar2' }, 
        { id: '835636047', imgId: 'avatar3' },
        { id: '3599982581', imgId: 'avatar4' }
    ];

    users.forEach(user => {
        const avatarUrl = `https://cacolombia.com/avatar/${user.id}`; 
        const imgElement = document.getElementById(user.imgId);

        if (imgElement) {
            imgElement.src = avatarUrl;

            imgElement.onerror = function() {
                console.error(`Error al cargar el avatar para el usuario con ID: ${user.id}`);
            };
        } else {
            console.error(`No se encontró el elemento img con id: ${user.imgId}`);
        }
    });
});

// Leer más
function toggleTexto(boton) {
    var texto = boton.previousElementSibling; 
    var textoCompleto = texto.dataset.completo; 

    if (boton.innerHTML === "Leer más") {
        texto.innerHTML = textoCompleto; 
        boton.innerHTML = "Leer menos";
    } else {
        texto.innerHTML = textoCompleto.substring(0, 50) + "..."; 
        boton.innerHTML = "Leer más";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var textos = document.querySelectorAll('.empresa'); 
    textos.forEach(function(texto) {
        var textoCompleto = texto.dataset.completo; 
        if (textoCompleto) {
            texto.innerHTML = textoCompleto.substring(0, 50) + "...";
        }
    });
});

// Leer más functionality
document.addEventListener('DOMContentLoaded', function () {
    const textos = document.querySelectorAll('.empresa');

    textos.forEach(function (texto) {
        const textoCompleto = texto.dataset.completo;
        if (textoCompleto) {
            texto.innerHTML = textoCompleto.substring(0, 50) + "...";
            texto.addEventListener('click', function (event) {
                if (texto.classList.contains('expanded')) {
                    texto.innerHTML = textoCompleto.substring(0, 50) + "...";
                    texto.classList.remove('expanded');
                } else {
                    texto.innerHTML = textoCompleto;
                    texto.classList.add('expanded');
                }
                event.stopPropagation();
            });
        }
    });

    document.addEventListener('click', function () {
        textos.forEach(function (texto) {
            const textoCompleto = texto.dataset.completo;
            if (texto.classList.contains('expanded')) {
                texto.innerHTML = textoCompleto.substring(0, 50) + "...";
                texto.classList.remove('expanded');
            }
        });
    });
});

// API miembros
async function obtenerMiembros() {
    const response = await fetch('https://cacolombia.com/miembros');
    const data = await response.json();
    document.getElementById('miembros').innerText = `${data.totalMembers} miembros`;
}
obtenerMiembros();

// Boton nav - Cambiar de sección
var toggleButton = document.getElementById('toggleButton');
if (toggleButton) {
  toggleButton.addEventListener('click', function() {
    var trabajosSection = document.getElementById('trabajos');
    var empresasSection = document.getElementById('empresas');

    if (trabajosSection.classList.contains('hidden')) {
      trabajosSection.classList.remove('hidden');
      empresasSection.classList.add('hidden');
    } else {
      trabajosSection.classList.add('hidden');
      empresasSection.classList.remove('hidden');
    }
  });
}


// Dropdowns control
document.addEventListener('click', function(event) {
    var dropdown = document.getElementById("dd-header");
    if (dropdown) {
        var checkbox = document.querySelector(".menu input");
        if (!event.target.closest('.menu') && !event.target.closest('.dd-header-contenido')) {
            if (dropdown.classList.contains('show-dd')) {
                dropdown.classList.remove('show-dd');
                checkbox.checked = false;
            }
        }
    }

    var redeDropdown = document.getElementById("redes-dropdown");
    if (redeDropdown) {
        var redeCheckbox = document.querySelector(".menu input");
        var redes = document.getElementById("redes");
        if (!event.target.closest('.menu') && !event.target.closest('.redes-dropdown')) {
            if (redeDropdown.classList.contains('show-redes')) {
                redeDropdown.classList.remove('show-redes');
                redes.classList.remove('active');
                redeCheckbox.checked = false;
            }
        }
    }
});

// Header dropdown
function toggleHeaderDD() {
    var dropdown = document.getElementById("dd-header");
    dropdown.classList.toggle("show-dd");
}

// Redes dropdown
function toggleRedeDropdown() {
    var dropdown = document.getElementById("redes-dropdown");
    var redes = document.getElementById("redes");
    dropdown.classList.toggle("show-redes");
    redes.classList.toggle("active");
}


// Swiper
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-trabajos', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-trabajos',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-empresas', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-empresas',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-videos', {
        loop: false,
        pagination: {
            el: '.swiper-pagination-videos',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 25,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const trabajosHeader = document.querySelector('#trabajos h1');
    const empresasHeader = document.querySelector('#empresas h1');
    const trabajosContainer = document.getElementById('trabajos');
    const empresasContainer = document.getElementById('empresas');

    if (trabajosHeader && empresasHeader && trabajosContainer && empresasContainer) {
        trabajosHeader.addEventListener('click', function () {
            trabajosContainer.classList.add('hidden');
            empresasContainer.classList.remove('hidden');
        });

        empresasHeader.addEventListener('click', function () {
            empresasContainer.classList.add('hidden');
            trabajosContainer.classList.remove('hidden');
        });
    }
});
