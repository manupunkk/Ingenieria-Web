import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmprendedoresModule } from './emprendedores/emprendedores.module';
import { Emprendedor } from './emprendedores/entities/emprendedor.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 3306),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Emprendedor],
      synchronize: true,
    }),

    EmprendedoresModule,
  ],
})
export class AppModule {}