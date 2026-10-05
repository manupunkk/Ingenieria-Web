import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateEmprendedorDto } from './dto/create-emprendedor.dto';
import { UpdateEmprendedorDto } from './dto/update-emprendedor.dto';
import { Emprendedor } from './entities/emprendedor.entity';

@Injectable()
export class EmprendedoresService {
  constructor(
    @InjectRepository(Emprendedor)
    private readonly emprendedorRepository: Repository<Emprendedor>,
  ) {}

  // Crear un emprendedor
  async create(
    createEmprendedorDto: CreateEmprendedorDto,
  ): Promise<Emprendedor> {
    const emprendedor = this.emprendedorRepository.create(
      createEmprendedorDto,
    );

    return this.emprendedorRepository.save(emprendedor);
  }

  // Obtener todos los emprendedores
  async findAll(): Promise<Emprendedor[]> {
    return this.emprendedorRepository.find();
  }

  // Obtener un emprendedor por ID
  async findOne(id: number): Promise<Emprendedor> {
    const emprendedor = await this.emprendedorRepository.findOneBy({ id });

    if (!emprendedor) {
      throw new NotFoundException(
        `Emprendedor con ID ${id} no encontrado`,
      );
    }

    return emprendedor;
  }

  // Buscar por comuna y/o rubro
  async search(
    comuna?: string,
    rubro?: string,
  ): Promise<Emprendedor[]> {
    const query =
      this.emprendedorRepository.createQueryBuilder('emprendedor');

    if (comuna) {
      query.andWhere('emprendedor.comuna = :comuna', { comuna });
    }

    if (rubro) {
      query.andWhere('emprendedor.rubro = :rubro', { rubro });
    }

    return query.getMany();
  }

  // Actualizar un emprendedor
  async update(
    id: number,
    updateEmprendedorDto: UpdateEmprendedorDto,
  ): Promise<Emprendedor> {
    const emprendedor = await this.findOne(id);

    Object.assign(emprendedor, updateEmprendedorDto);

    return this.emprendedorRepository.save(emprendedor);
  }

  // Eliminar un emprendedor
  async remove(id: number): Promise<{ message: string }> {
    const emprendedor = await this.findOne(id);

    await this.emprendedorRepository.remove(emprendedor);

    return {
      message: `Emprendedor con ID ${id} eliminado correctamente`,
    };
  }
}