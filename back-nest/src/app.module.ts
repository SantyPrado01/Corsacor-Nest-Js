//Este archivo es la raiz del proyecto para realizar las importaciones de modulos, creacion de clases...
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ServiciosModule } from './servicios/servicios.module';
import { DisponibilidadHorariaModule } from './disponibilidad-horaria/disponibilidad-horaria.module';
import { NecesidadHorariaModule } from './necesidad-horaria/necesidad-horaria.module';
import { CategoriaEmpleadoModule } from './categoria-empleado/categoria-empleado.module';
import { CategoriaServicioModule } from './categoria-servicio/categoria-servicio.module';
import { FacturasModule } from './facturas/facturas.module';
import { ItemsFacturasModule } from './items-facturas/items-facturas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password:'Nfr06950', //1008 en Windows //Nfr06950 en Mac
      database: 'corsacorsql',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //Podemos leer cualquier archivo entity
      synchronize:true,
    }),
    UsersModule,
    AuthModule,
    EmpleadosModule,
    ServiciosModule,
    DisponibilidadHorariaModule,
    NecesidadHorariaModule,
    CategoriaEmpleadoModule,
    CategoriaServicioModule,
    FacturasModule,
    ItemsFacturasModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
