import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmprendedoresService } from './emprendedores.service';
import { EmprendedoresController } from './emprendedores.controller';
import { Emprendedor } from './entities/emprendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Emprendedor])],
  controllers: [EmprendedoresController],
  providers: [EmprendedoresService],
})
export class EmprendedoresModule {}