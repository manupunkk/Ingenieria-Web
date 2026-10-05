import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { EmprendedoresService } from './emprendedores.service';
import { CreateEmprendedorDto } from './dto/create-emprendedor.dto';
import { UpdateEmprendedorDto } from './dto/update-emprendedor.dto';

@Controller('emprendedores')
export class EmprendedoresController {
  constructor(
    private readonly emprendedoresService: EmprendedoresService,
  ) {}

  // POST /emprendedores
  @Post()
  create(@Body() createEmprendedorDto: CreateEmprendedorDto) {
    return this.emprendedoresService.create(createEmprendedorDto);
  }

  // GET /emprendedores
  @Get()
  findAll() {
    return this.emprendedoresService.findAll();
  }

  // GET /emprendedores/buscar?comuna=&rubro=
  @Get('buscar')
  search(
    @Query('comuna') comuna?: string,
    @Query('rubro') rubro?: string,
  ) {
    return this.emprendedoresService.search(comuna, rubro);
  }

  // GET /emprendedores/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.emprendedoresService.findOne(id);
  }

  // PUT /emprendedores/:id
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmprendedorDto: UpdateEmprendedorDto,
  ) {
    return this.emprendedoresService.update(
      id,
      updateEmprendedorDto,
    );
  }

  // DELETE /emprendedores/:id
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.emprendedoresService.remove(id);
  }
}