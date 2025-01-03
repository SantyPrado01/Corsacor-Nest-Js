import { CategoriaEmpleadoService } from './categoria-empleado.service';
import { CreateCategoriaEmpleadoDto } from './dto/create-categoria-empleado.dto';
import { UpdateCategoriaEmpleadoDto } from './dto/update-categoria-empleado.dto';
export declare class CategoriaEmpleadoController {
    private readonly categoriaEmpleadoService;
    constructor(categoriaEmpleadoService: CategoriaEmpleadoService);
    create(createCategoriaEmpleadoDto: CreateCategoriaEmpleadoDto): Promise<import("@nestjs/common").HttpException | {
        message: string;
        categoriaEmpleado: import("./entities/categoria-empleado.entity").Categorias;
    }>;
    findAll(): Promise<import("./entities/categoria-empleado.entity").Categorias[]>;
    findOne(id: string): Promise<import("./entities/categoria-empleado.entity").Categorias | import("@nestjs/common").HttpException>;
    update(id: string, updateCategoriaEmpleadoDto: UpdateCategoriaEmpleadoDto): Promise<import("@nestjs/common").HttpException | (import("./entities/categoria-empleado.entity").Categorias & UpdateCategoriaEmpleadoDto)>;
    remove(id: string): Promise<import("@nestjs/common").HttpException>;
}
