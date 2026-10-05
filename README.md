# Actividad 11 - Feria Artesanal de Ñuble

## Objetivo

Construir un catálogo interactivo utilizando Vue.js, orientado a mostrar productos elaborados por emprendedores locales de la Región de Ñuble.

## Tecnologías utilizadas

- Vue 3
- Vite
- JavaScript
- HTML
- CSS

## Conceptos aplicados

- v-model
- v-if / v-else
- v-show
- v-for
- computed
- props
- emits
- componentes Vue

## Estructura principal

### App.vue
Componente principal de la aplicación. Contiene el catálogo, los filtros de búsqueda y categoría, el control para mostrar u ocultar productos y la integración de los componentes.

### ProductoCard.vue
Representa individualmente cada producto del catálogo. Recibe la información mediante props y emite el evento `ver-detalle` cuando el usuario solicita visualizar un producto.

### ProductoModal.vue
Muestra información detallada del producto seleccionado. Puede cerrarse mediante el botón, haciendo clic fuera del contenido o presionando Escape.

### productos.js
Contiene los datos utilizados para generar dinámicamente el catálogo de productos.

## Funcionalidades

- Visualización dinámica de productos.
- Búsqueda por nombre o categoría.
- Filtro por categoría.
- Mostrar y ocultar catálogo.
- Mensaje cuando el catálogo está oculto.
- Mensaje cuando una búsqueda no tiene resultados.
- Modal con información detallada.
- Diseño responsive.
- Formato de precios en pesos chilenos.

## Productos

El catálogo contiene cuatro productos demostrativos asociados a la Región de Ñuble.

## Cambios realizados

Se incorporaron las siguientes mejoras personales al proyecto:

- Se agregó un cuarto producto al catálogo para ampliar la variedad de productos disponibles.
- Se incorporó la categoría "Artesanía", la cual se integra automáticamente al filtro de categorías.
- Se modificó el texto principal del sitio para destacar a los emprendedores locales de la Región de Ñuble.
- Se agregó un mensaje visual cuando el catálogo se encuentra oculto, indicando al usuario cómo volver a mostrarlo.
- Se mantuvo un diseño responsive para adaptar la visualización del catálogo a diferentes tamaños de pantalla.

## Ejecución

npm install

# Actividad 12 - Vue Router y Favoritos

## Objetivo

Transformar el proyecto Feria Artesanal de Ñuble en una aplicación SPA utilizando Vue Router, incorporando navegación entre vistas, detalle de productos y favoritos persistentes.

## Funcionalidades

- Navegación mediante RouterLink.
- Rutas para Inicio, Productos, Favoritos y Contacto.
- Ruta dinámica para visualizar el detalle de cada producto.
- Buscador de productos.
- Filtro por categorías.
- Sistema de favoritos.
- Persistencia de favoritos mediante localStorage.
- Formulario de contacto con validación.
- Página de error 404.
- Diseño responsive.

## Rutas

- `/` - Inicio.
- `/productos` - Catálogo de productos.
- `/productos/:id` - Detalle de un producto.
- `/favoritos` - Productos favoritos.
- `/contacto` - Formulario de contacto.
- Cualquier dirección inexistente muestra la página 404.

## Conceptos aplicados

- Vue Router
- RouterLink
- RouterView
- Rutas dinámicas
- useRoute
- ref
- computed
- onMounted
- props
- emits
- v-model
- v-if / v-else
- v-for
- localStorage

## Cambios realizados

Se transformó el catálogo desarrollado anteriormente en una SPA con múltiples vistas.

Se incorporó navegación mediante Vue Router y una ruta dinámica para consultar individualmente cada producto.

Se agregó un sistema de favoritos persistentes utilizando localStorage.

Se incorporó una vista de favoritos desde la cual también es posible eliminar productos guardados.

Se agregó un formulario de contacto con validación de campos obligatorios.

Se incorporó una página 404 para direcciones inexistentes.

Se mejoró la presentación visual general, incluyendo navegación, tarjetas, catálogo, detalle de productos, formulario y diseño responsive.