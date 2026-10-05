import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Emprendedor } from './emprendedores/entities/emprendedor.entity';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 3306),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Emprendedor],
  synchronize: true,
});

async function seed() {
  await AppDataSource.initialize();

  const repository = AppDataSource.getRepository(Emprendedor);

  await repository.clear();

  const emprendedores = repository.create([
    {
      nombre: 'Mieles Don Pedro',
      comuna: 'Chillán',
      rubro: 'Apicultura',
      descripcion: 'Producción artesanal de miel de la Región de Ñuble',
      contacto: 'contacto@mielesdonpedro.cl',
    },
    {
      nombre: 'Artesanías Ñuble',
      comuna: 'Chillán',
      rubro: 'Artesanía',
      descripcion: 'Elaboración de productos artesanales tradicionales de Ñuble',
      contacto: 'artesanias@nuble.cl',
    },
    {
      nombre: 'Turismo Las Trancas',
      comuna: 'Pinto',
      rubro: 'Turismo',
      descripcion: 'Servicios turísticos y excursiones en el sector cordillerano',
      contacto: 'contacto@lastrancas.cl',
    },
    {
      nombre: 'Huerta San Carlos',
      comuna: 'San Carlos',
      rubro: 'Agricultura',
      descripcion: 'Producción y venta de hortalizas cultivadas en Ñuble',
      contacto: 'huerta@sancarlos.cl',
    },
  ]);

  await repository.save(emprendedores);

  console.log('Seed completado correctamente');

  await AppDataSource.destroy();
}

seed().catch((error) => {
  console.error('Error ejecutando seed:', error);
});