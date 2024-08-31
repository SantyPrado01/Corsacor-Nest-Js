import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { DisponibilidadHoraria } from "../../disponibilidad-horaria/entities/disponibilidad-horaria.entity";
import { CategoriaEmpleado } from "../../categoria-empleado/entities/categoria-empleado.entity";
import { Ciudad } from "../../ciudad/entities/ciudad.entity";

@Entity({
    name: 'Empleados'
})

export class Empleado {

    @PrimaryGeneratedColumn({
        type: 'int',
        name:'id'
    })
    empleadoId: number
       
    @Column()
    legajo:number

    @Column()
    empleadoNombre:string

    @Column()
    apellido:string

    @Column()
    nroDocumento: number

    @Column()
    telefono: number

    @Column()
    email: string

    @Column({ type: 'date' })
    fechaIngreso: Date

    @Column({default: false})
    eliminado: boolean

    @OneToMany(()=> CategoriaEmpleado, categoria => categoria.empleados)
    categorias: CategoriaEmpleado

    @OneToMany(() => DisponibilidadHoraria, disponibilidad => disponibilidad.empleado)
    disponibilidades: DisponibilidadHoraria[];

    @ManyToOne(()=> Ciudad, ciudad => ciudad.empleados)
    ciudad: Ciudad[]

}