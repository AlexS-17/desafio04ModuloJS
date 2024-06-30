
const propiedades_ventas = [
    {
    nombre: 'Departamento lujoso en zona exclusiva',
    src: 'https://i.pinimg.com/564x/dc/ed/da/dceddaf58a7eae51903ba513be5e037f.jpg',
    descripcion: 'Este departamento está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Las Condes, Santiago',
    habitaciones: 2,
    baños: 1,
    costo:  400000000,
    smoke: true,
    pets: false,
    },
    {
    nombre: 'Casa acogedora en una zona rural',
    src: 'https://i.pinimg.com/564x/a0/87/8e/a0878e7bee6a60ec76cb282cabd47c6f.jpg',
    descripcion: 'Casa situada en a las afueras de Rancagua, donde se puede respirar aire fresco',
    ubicacion: '789 Mountain Road, Graneros, Rancagua',
    habitaciones: 4,
    baños: 2,
    costo:  280000000,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://i.pinimg.com/564x/13/34/58/13345806219ec0abcf743fba19f5f4c2.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Dichato, Tomé',
    habitaciones: 2,
    baños: 1,
    costo:  200000000,
    smoke: true,
    pets: false,
    },
    {
    nombre: 'Casa en zona tranquila a las afueras de Santiago',
    src: 'https://i.pinimg.com/564x/43/16/38/43163832b667b9da70fe912a9c924f10.jpg',
    descripcion: 'Esta casa se encuentra ubicada a 30 minutos al norte de Santiago',
    ubicacion: 'Antonio Bellet 126, Farellones, Santiago',
    habitaciones: 4,
    baños: 2,
    costo:  60000000,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Departamento en zona céntrica de Santiago',
    src: 'https://i.pinimg.com/564x/45/07/a3/4507a378f547bc32f7805c7f8e572abb.jpg',
    descripcion: 'Este apartamento se encuentra ubicado a pasos del Metro Los Leones',
    ubicacion: 'Suecia 440, Providencia, Santiago',
    habitaciones: 2,
    baños: 1,
    costo:  190000000,
    smoke: false,
    pets: false,
    },
    {
    nombre: 'Departamento con arquitectura moderna iraní', 
    src: 'https://i.pinimg.com/736x/81/65/a6/8165a6884c836ca658d62d5d7a33d292.jpg',
    descripcion: 'Este apartamento se encuentra ubicado a pasos del Metro Los Dominicos',
    ubicacion: 'Bucarest 50, Las Condes, Santiago',
    habitaciones: 3,
    baños: 1,
    costo:  250000000,
    smoke: false,
    pets: false,
    },
    {
    nombre: 'Casa en zona residencial en Coquimbo',
    src: 'https://i.pinimg.com/564x/e6/22/36/e6223670ead42371b4e1acc340c7a5c6.jpg',
    descripcion: 'Esta casa se encuentra a 20 minutos de la playa de La Serena',
    ubicacion: 'Ricardo Matte Pérez, La Herradura, Coquimbo',
    habitaciones: 5,
    baños: 2,
    costo:  120000000,
    smoke: true,
    pets: true,
    },
    {
      nombre: 'departamento con vista al mar en Viña del Mar',
      src: 'https://i.pinimg.com/564x/85/8b/82/858b82f561d3e162d78f170db89bf8a6.jpg',
      descripcion: 'Este departamento se encuentra ubicado en la costa de Viña del Mar',
      ubicacion: 'Avenida Perú 123, Viña del Mar',
      habitaciones: 4,
      baños: 2,
      costo:  380000000,
      smoke: true,
      pets: true,
      }
    ]
const elemento = document.querySelector('.row');
let html='';
    for(let propiedad of propiedades_ventas) {
        html+=
        `<div class="col-md-3 mb-3">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="foto de departamento con jardin"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${new Intl.NumberFormat('es-CL').format(propiedad.costo)}</p>
                <p class="${(propiedad.smoke) ? 'text-success' : 'text-danger'}">
                  <i class="${(propiedad.smoke) ? 'fas fa-smoking':'fas fa-smoking-ban'}"></i> ${(propiedad.smoke) ? 'Permitido fumar':'No se permite fumar'}
                </p>
                <p class="${(propiedad.pets) ? 'text-success':'text-danger'}">
                  <i class="${(propiedad.pets) ? 'fas fa-paw':'fa-solid fa-ban'}"></i> ${(propiedad.pets) ? 'Se permiten mascotas':'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>`
    }
    elemento.innerHTML=html;
