import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateEmprendedorDto {
  @ApiProperty({ example: 'Mieles Don Pedro' })
  @IsString()
  @MinLength(3)
  nombre: string;

  @ApiProperty({ example: 'Chillán' })
  @IsString()
  @IsNotEmpty()
  comuna: string;

  @ApiProperty({
    example: 'Apicultura',
    enum: [
      'Apicultura',
      'Lácteos',
      'Textiles',
      'Turismo',
      'Artesanía',
      'Agricultura',
    ],
  })
  @IsIn([
    'Apicultura',
    'Lácteos',
    'Textiles',
    'Turismo',
    'Artesanía',
    'Agricultura',
  ])
  rubro: string;

  @ApiProperty({
    example: 'Producción artesanal de miel de la Región de Ñuble',
  })
  @IsString()
  @MinLength(10)
  descripcion: string;

  @ApiProperty({ example: 'contacto@ejemplo.cl' })
  @IsString()
  @IsNotEmpty()
  contacto: string;
}