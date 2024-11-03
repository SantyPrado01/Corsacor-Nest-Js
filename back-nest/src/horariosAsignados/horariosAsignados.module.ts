import { Module } from '@nestjs/common';
import { HorarioAsignadoService } from './horariosAsignados.service'; 
import { HorariosAsignadosController } from './horariosAsignados.controller'; 
import { HorarioAsignado } from './entities/horariosAsignados.entity'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenTrabajo } from 'src/ordenTrabajo/entities/ordenTrabajo.entity'; 
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HorarioAsignado, OrdenTrabajo, Empleado])],
  controllers: [HorariosAsignadosController],
  providers: [HorarioAsignadoService],
})
export class HorariosAsignadosModule {}