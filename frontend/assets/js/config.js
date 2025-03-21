// Avatars
document.addEventListener('DOMContentLoaded', () => {
    const users = [
        { id: '312978547', imgId: 'avatar1' }, 
        { id: '1413431128', imgId: 'avatar2' }, 
        { id: '835636047', imgId: 'avatar3' },
        { id: '3599982581', imgId: 'avatar4' }
    ];

    users.forEach(({ id, imgId }) => {
        const imgElement = document.getElementById(imgId);

        if (!imgElement) {
            console.error(`No se encontró el elemento img con id: ${imgId}`);
            return;
        }

        imgElement.src = `https://cacolombia.com/avatar/${id}`;

        imgElement.onerror = () => {
            console.error(`Error al cargar el avatar para el usuario con ID: ${id}`);
        };
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

// Dropdowns control
document.addEventListener('click', (event) => {
    const dropdown = document.getElementById('dd-header');
    const redeDropdown = document.getElementById('redes-dropdown');
    const checkbox = document.querySelector('.menu input');
    const redes = document.getElementById('redes');

    if (dropdown && !event.target.closest('.menu') && !event.target.closest('.dd-header-contenido')) {
        if (dropdown.classList.contains('show-dd')) {
            dropdown.classList.remove('show-dd');
            checkbox.checked = false;
        }
    }
    if (redeDropdown && !event.target.closest('.menu') && !event.target.closest('.redes-dropdown')) {
        if (redeDropdown.classList.contains('show-redes')) {
            redeDropdown.classList.remove('show-redes');
            redes.classList.remove('active');
            checkbox.checked = false;
        }
    }
});

function toggleHeaderDD() {
    const dropdown = document.getElementById('dd-header');
    dropdown?.classList.toggle('show-dd');
}

function toggleRedeDropdown() {
    const dropdown = document.getElementById('redes-dropdown');
    const redes = document.getElementById('redes');
    dropdown?.classList.toggle('show-redes');
    redes?.classList.toggle('active');
}

// Swiper
document.addEventListener('DOMContentLoaded', function () {
    function initializeSwiper(selector, paginationSelector, config) {
        new Swiper(selector, {
            ...config,
            pagination: {
                el: paginationSelector,
                clickable: true,
            },
        });
    }
    const sharedConfig = {
        loop: true,
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
    };
    const videosConfig = {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 25,
    };

    initializeSwiper('.swiper-trabajos', '.swiper-pagination-trabajos', sharedConfig);
    initializeSwiper('.swiper-empresas', '.swiper-pagination-empresas', sharedConfig);
    initializeSwiper('.swiper-videos', '.swiper-pagination-videos', videosConfig);
});

// Cambiar container trabajo / empresa
document.addEventListener('DOMContentLoaded', () => {
    const trabajosHeader = document.querySelector('#trabajos h1');
    const empresasHeader = document.querySelector('#empresas h1');
    const trabajosContainer = document.getElementById('trabajos');
    const empresasContainer = document.getElementById('empresas');

    if (trabajosHeader && empresasHeader && trabajosContainer && empresasContainer) {
        const toggleSections = (hide, show) => {
            hide.classList.add('hidden');
            show.classList.remove('hidden');
        };

        trabajosHeader.addEventListener('click', () => toggleSections(trabajosContainer, empresasContainer));
        empresasHeader.addEventListener('click', () => toggleSections(empresasContainer, trabajosContainer));
    }
});
