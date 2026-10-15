# Sistema de Gestión de Servicios Tecnológicos

Aplicación web desarrollada para las **Actividades 13 y 14 de Ingeniería Web (IW600)**, que permite administrar servicios tecnológicos mediante un CRUD conectado a una API REST.

## Tecnologías

- **Frontend:** Vue 3, Vite, Vue Router y CSS3.
- **API REST:** JSON Server.
- **Comunicación:** Fetch API (GET, POST, PUT y DELETE).

## Instalación y ejecución

Instalar las dependencias:

```bash
npm install
```

Iniciar la API REST en una terminal:

```bash
npx json-server db.json --port 3001
```

Iniciar Vue en otra terminal:

```bash
npm run dev
```

Abrir `http://localhost:5173` y mantener ambos servidores ejecutándose.

## Funcionalidades

- **CRUD:** listar, crear, editar y eliminar servicios.
- **Búsqueda:** por nombre o descripción.
- **Filtros:** por categoría, con botón para limpiar filtros.
- **Ordenamiento:** alfabético y por precio.
- **Paginación:** cinco servicios por página.
- **Validaciones:** nombre, categoría, precio y descripción.
- **Gestión de errores:** mensajes de carga y errores de conexión.
- **Precio total:** suma automática de los servicios filtrados.
- **Diseño responsivo:** interfaz adaptable a computadores y celulares.

## Mejoras de la Actividad 14

Se incorporó la categoría **Seguridad** con dos nuevos servicios, el botón **Limpiar filtros**, el cálculo del precio total mediante `computed` y mejoras visuales para dispositivos móviles.

## Conceptos aplicados

| Concepto | Aplicación |
|---|---|
| `computed` | Calcula filtros, ordenamiento, paginación y precio total. |
| `watch` | Reinicia la paginación cuando cambian los filtros. |
| `fetch` | Comunica Vue con JSON Server mediante HTTP. |
| Validaciones | Impiden guardar datos incompletos o incorrectos. |

## Pruebas funcionales

Se contemplan pruebas de búsqueda, filtros, ordenamiento, paginación, creación, edición, eliminación, validación de formularios y manejo de errores de conexión.

## Estructura principal

```text
gestion-servicios/
├── db.json
├── src/
│   ├── router/
│   │   └── index.js
│   ├── services/
│   │   └── serviciosApi.js
│   ├── views/
│   │   ├── ListaServicios.vue
│   │   └── FormularioServicio.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
└── README.md
```

## Repositorio

[Ingenieria-Web — Actividades 13 y 14](https://github.com/manupunkk/Ingenieria-Web/tree/actividad-13-14)
