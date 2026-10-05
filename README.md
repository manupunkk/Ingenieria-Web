# Actividad 10 - Backend NestJS Emprendedores de Ñuble

API REST desarrollada con NestJS para gestionar emprendedores locales de la Región de Ñuble.

El proyecto permite listar, buscar, crear, actualizar y eliminar emprendedores mediante una API conectada a una base de datos MySQL.

## Tecnologías utilizadas

- Node.js
- NestJS
- TypeScript
- TypeORM
- MySQL
- Docker
- class-validator
- class-transformer
- Swagger

## Requisitos

Para ejecutar el proyecto se necesita:

- Node.js 18 o superior
- npm 8 o superior
- Nest CLI
- Docker

## Instalación

Instalar las dependencias:

```bash
npm install
```

Crear un archivo `.env` en la raíz del proyecto:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=root123
DB_NAME=emprendedores_db
```

## Base de datos

Para esta actividad se utilizó MySQL 8 mediante Docker.

Crear el contenedor:

```bash
docker run --name mysql-emprendedores -e MYSQL_ROOT_PASSWORD=root123 -e MYSQL_DATABASE=emprendedores_db -p 3306:3306 -d mysql:8.0
```

Si el contenedor ya existe, iniciarlo con:

```bash
docker start mysql-emprendedores
```

## Ejecutar el proyecto

```bash
npm run start:dev
```

La API estará disponible en:

`http://localhost:3000`

La documentación Swagger estará disponible en:

`http://localhost:3000/api`

## Datos de ejemplo

Para insertar los registros iniciales:

```bash
npm run seed
```

El seed agrega emprendedores de ejemplo de comunas de Ñuble como Chillán, Pinto y San Carlos.

## Endpoints

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/emprendedores` | Listar emprendedores |
| GET | `/emprendedores/:id` | Obtener emprendedor por ID |
| GET | `/emprendedores/buscar?comuna=&rubro=` | Buscar por comuna y/o rubro |
| POST | `/emprendedores` | Crear emprendedor |
| PUT | `/emprendedores/:id` | Actualizar emprendedor |
| DELETE | `/emprendedores/:id` | Eliminar emprendedor |

## Ejemplo de creación

Request:

```json
{
  "nombre": "Mieles Don Pedro",
  "comuna": "Chillán",
  "rubro": "Apicultura",
  "descripcion": "Producción artesanal de miel de la Región de Ñuble",
  "contacto": "contacto@mielesdonpedro.cl"
}
```

Response:

```json
{
  "nombre": "Mieles Don Pedro",
  "comuna": "Chillán",
  "rubro": "Apicultura",
  "descripcion": "Producción artesanal de miel de la Región de Ñuble",
  "contacto": "contacto@mielesdonpedro.cl",
  "id": 1
}
```

## Validaciones

Los datos recibidos por la API son validados mediante DTOs y `class-validator`.

Validaciones principales:

- `nombre`: mínimo 3 caracteres.
- `comuna`: obligatoria.
- `rubro`: debe pertenecer a los rubros permitidos.
- `descripcion`: mínimo 10 caracteres.
- `contacto`: obligatorio.

Rubros permitidos:

- Apicultura
- Lácteos
- Textiles
- Turismo
- Artesanía
- Agricultura

## Casos de prueba

Se comprobaron los siguientes casos mediante Swagger:

| Caso | Resultado esperado |
|---|---|
| Listar emprendedores | 200 |
| Buscar emprendedor inexistente | 404 |
| Crear emprendedor válido | 201 |
| Crear emprendedor inválido | 400 |
| Buscar por comuna | 200 |
| Buscar por rubro | 200 |
| Buscar por comuna y rubro | 200 |
| Actualizar emprendedor | 200 |
| Eliminar emprendedor | 200 |

## Decisiones técnicas

Se utilizó una arquitectura modular de NestJS separando controlador, servicio, DTOs y entidad.

TypeORM se utiliza para la comunicación entre NestJS y MySQL.

Se configuró un `ValidationPipe` global con:

- `whitelist`
- `transform`
- `forbidNonWhitelisted`

Esto permite validar y transformar automáticamente los datos recibidos por la API.

CORS se encuentra habilitado para permitir posteriormente la comunicación con un frontend.

Swagger se utiliza para documentar y probar los endpoints de la API.

## Evidencias

Las pruebas de los endpoints fueron realizadas mediante Swagger en:

`http://localhost:3000/api`

Se verificó el funcionamiento del CRUD, las búsquedas y las validaciones.