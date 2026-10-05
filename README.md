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