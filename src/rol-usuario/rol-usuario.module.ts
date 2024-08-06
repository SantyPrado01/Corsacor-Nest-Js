import { Module } from '@nestjs/common';
import { RolUsuarioService } from './rol-usuario.service';
import { RolUsuarioController } from './rol-usuario.controller';

@Module({
  controllers: [RolUsuarioController],
  providers: [RolUsuarioService],
})
export class RolUsuarioModule {}
