# Sistema de Gestión de Servicios Tecnológicos

## Descripción

Aplicación web desarrollada con Vue 3 para administrar servicios tecnológicos mediante operaciones CRUD y una API REST simulada con JSON Server.

Proyecto correspondiente a las Actividades 13 y 14 de la asignatura Ingeniería Web (IW600), Universidad Adventista de Chile.

## Tecnologías utilizadas

- Vue 3
- Vite
- Vue Router
- JavaScript
- Fetch API
- JSON Server
- HTML5 y CSS3

## Instalación y ejecución

1. Instalar las dependencias:

```bash
npm install
```

2. Iniciar JSON Server en la primera terminal:

```bash
npx json-server db.json --port 3001
```

3. Iniciar Vue en una segunda terminal:

```bash
npm run dev
```

4. Abrir la dirección local indicada por Vite, normalmente `http://localhost:5173`.

La API REST utiliza `http://localhost:3001/servicios`.

**Importante:** ambas terminales deben permanecer ejecutándose.

## Funcionalidades

### Actividad 13 — CRUD

- Consultar los servicios registrados.
- Crear nuevos servicios.
- Editar servicios existentes.
- Eliminar servicios con confirmación.
- Navegar entre vistas mediante Vue Router.
- Consumir una API REST con Fetch API.

### Actividad 14 — Mejoras

- Búsqueda por nombre o descripción.
- Filtro por categoría.
- Ordenamiento de servicios.
- Paginación de cinco registros por página.
- Validación de los campos del formulario.
- Mensajes de carga y error.
- Estilos adaptables a diferentes tamaños de pantalla.

## Estructura principal

| Archivo o carpeta | Función |
|---|---|
| `db.json` | Almacena los servicios utilizados por JSON Server. |
| `src/services/` | Contiene las funciones de comunicación con la API REST. |
| `src/router/` | Define las rutas de navegación. |
| `src/views/ListaServicios.vue` | Presenta los servicios y sus herramientas de administración. |
| `src/views/FormularioServicio.vue` | Permite crear y editar servicios. |
| `src/App.vue` | Define la estructura principal de la aplicación. |
| `src/main.js` | Inicializa Vue y registra el router. |
| `src/style.css` | Contiene los estilos visuales y responsivos. |

## Conceptos aplicados

**computed:** permite calcular automáticamente los resultados filtrados, ordenados y paginados cuando cambian los datos utilizados.

**watch:** permite reaccionar a cambios en los filtros, por ejemplo, regresando a la primera página.

**fetch:** permite realizar solicitudes HTTP a JSON Server mediante los métodos GET, POST, PUT y DELETE.

**Validaciones:** comprueban los datos ingresados antes de enviarlos a la API, evitando registros incompletos o incorrectos.

## Pruebas funcionales

Las siguientes pruebas corresponden a la guía de la Actividad 14. Sus resultados deben registrarse después de ejecutarlas.

| Prueba | Resultado esperado | Estado |
|---|---|---|
| Buscar "red" | Mostrar servicios coincidentes | Pendiente de verificar |
| Filtrar por Soporte | Mostrar únicamente esa categoría | Pendiente de verificar |
| Ordenar por precio descendente | Mostrar precios de mayor a menor | Pendiente de verificar |
| Navegar entre páginas | Mostrar cinco registros por página | Pendiente de verificar |
| Nombre de dos letras | Impedir guardar | Pendiente de verificar |
| Precio igual a cero | Impedir guardar | Pendiente de verificar |
| Crear un servicio válido | Registrar el servicio en la API | Pendiente de verificar |
| Editar un servicio | Conservar los cambios al recargar | Pendiente de verificar |
| Cancelar eliminación | Mantener el registro | Pendiente de verificar |
| Detener JSON Server | Mostrar un mensaje de error | Pendiente de verificar |

## Mejoras personales

Completar con las mejoras adicionales implementadas y comprobadas:

- Cuarta categoría y servicios adicionales.
- Botón para limpiar filtros.
- Cálculo del precio total de los servicios filtrados.
- Personalización visual y adaptación a dispositivos móviles.

## Evidencias

Agregar capturas de pantalla que demuestren:

- Listado de servicios.
- Búsqueda y filtros.
- Segunda página de resultados.
- Validación del formulario.
- Edición de un servicio.

## Repositorio

[Ingenieria-Web — rama actividad-13-14](https://github.com/manupunkk/Ingenieria-Web/tree/actividad-13-14)