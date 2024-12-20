"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaEmpleadoController = void 0;
const common_1 = require("@nestjs/common");
const categoria_empleado_service_1 = require("./categoria-empleado.service");
const create_categoria_empleado_dto_1 = require("./dto/create-categoria-empleado.dto");
const update_categoria_empleado_dto_1 = require("./dto/update-categoria-empleado.dto");
let CategoriaEmpleadoController = class CategoriaEmpleadoController {
    constructor(categoriaEmpleadoService) {
        this.categoriaEmpleadoService = categoriaEmpleadoService;
    }
    create(createCategoriaEmpleadoDto) {
        return this.categoriaEmpleadoService.create(createCategoriaEmpleadoDto);
    }
    findAll() {
        return this.categoriaEmpleadoService.get();
    }
    findOne(id) {
        return this.categoriaEmpleadoService.getId(+id);
    }
    update(id, updateCategoriaEmpleadoDto) {
        return this.categoriaEmpleadoService.update(+id, updateCategoriaEmpleadoDto);
    }
    remove(id) {
        return this.categoriaEmpleadoService.delete(+id);
    }
};
exports.CategoriaEmpleadoController = CategoriaEmpleadoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categoria_empleado_dto_1.CreateCategoriaEmpleadoDto]),
    __metadata("design:returntype", void 0)
], CategoriaEmpleadoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriaEmpleadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriaEmpleadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_categoria_empleado_dto_1.UpdateCategoriaEmpleadoDto]),
    __metadata("design:returntype", void 0)
], CategoriaEmpleadoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriaEmpleadoController.prototype, "remove", null);
exports.CategoriaEmpleadoController = CategoriaEmpleadoController = __decorate([
    (0, common_1.Controller)('categorias'),
    __metadata("design:paramtypes", [categoria_empleado_service_1.CategoriaEmpleadoService])
], CategoriaEmpleadoController);
//# sourceMappingURL=categoria-empleado.controller.js.map