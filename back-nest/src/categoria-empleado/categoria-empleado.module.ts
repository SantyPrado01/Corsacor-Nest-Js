import { Module } from '@nestjs/common';
import { CategoriaEmpleadoService } from './categoria-empleado.service';
import { CategoriaEmpleadoController } from './categoria-empleado.controller';
import { Categorias } from './entities/categoria-empleado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Categorias])],
  controllers: [CategoriaEmpleadoController],
  providers: [CategoriaEmpleadoService],
})
export class CategoriaEmpleadoModule {}
