import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';


@Injectable()
export class ServiciosService {

  constructor(@InjectRepository(Servicio) private servicioRepository: Repository<Servicio>){}

  async createServicio(servicio: CreateServicioDto){
    const servicioFound = await this.servicioRepository.findOne({
      where:{
        nombre: servicio.nombre
      }
    });
    if(servicioFound){
      return new HttpException('El servicio ya existe. Prueba nuevamente.', HttpStatus.CONFLICT)
    }

    const newServicio = this.servicioRepository.create(servicio)
    return this.servicioRepository.save(newServicio), new HttpException('El Servicio se guardo con exito.', HttpStatus.ACCEPTED)

  }

  getServicios(){
    return this.servicioRepository.find({
      where:{
        eliminado:false
      }
    })
  }

  async getServicio(nombre: string){
    const servicioFound = await this.servicioRepository.findOne({
      where:{
        nombre
      }
    });
    if(!nombre){
      return null;
    }
    return servicioFound
  }

  async getServicioId(servicioId:number){
    const servicioFound = await this.servicioRepository.findOne({
      where:{
        servicioId
      }
    });
    if(!servicioFound){
      return new HttpException('Servicio no encontrado.', HttpStatus.NOT_FOUND)
    }
    return servicioFound
  }

  async deleteServicio(servicioId: number){
    const servicioFound = await this.servicioRepository.findOne({
      where:{
        servicioId
      }
    });
    if(!servicioFound){
      return new HttpException('Servicio no encontrado.', HttpStatus.NOT_FOUND)
    }

    servicioFound.eliminado = true;
    await this.servicioRepository.save(servicioFound);
    throw new HttpException('Servicio Eliminado', HttpStatus.ACCEPTED)
  }
  
  async updateServicio(servicioId: number, servicio: UpdateServicioDto) {
    const servicioFound = await this.servicioRepository.findOne({
        where: {
            servicioId,
        },
    });

    if (!servicioFound) {
        throw new HttpException('Servicio no encontrado.', HttpStatus.NOT_FOUND);
    }
    console.log('DTO recibido:', servicio);
    const updateServicio = Object.assign(servicioFound, servicio);
    return this.servicioRepository.save(updateServicio);
}
}
