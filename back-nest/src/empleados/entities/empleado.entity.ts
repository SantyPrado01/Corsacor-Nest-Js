import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinTable, JoinColumn, OneToOne } from "typeorm";
import { DisponibilidadHoraria } from "../../disponibilidad-horaria/entities/disponibilidad-horaria.entity";
import { CategoriaEmpleado } from "../../categoria-empleado/entities/categoria-empleado.entity";
import { User } from "src/users/user.entity";

@Entity({
    name: 'Empleados'
})

export class Empleado {

    @PrimaryGeneratedColumn({
        type: 'int',
        name:'id'
    })
    Id: number
       
    @Column()
    legajo:number

    @Column()
    nombre:string

    @Column()
    apellido:string

    @Column()
    nroDocumento: number

    @Column()
    telefono: string

    @Column()
    email: string

    @Column({ type: 'date' })
    fechaIngreso: Date

    @Column({default: false})
    eliminado: boolean

    @Column()
    ciudad: number;

    @Column({default:''})
    observaciones: string;

    @ManyToOne(() => CategoriaEmpleado, categoria => categoria.empleados, { eager: true })
    @JoinTable({name: "categoria"})
    categoria: CategoriaEmpleado;
    
    @OneToMany(() => DisponibilidadHoraria, disponibilidad => disponibilidad.empleado, { eager: true })
    disponibilidades: DisponibilidadHoraria[];

}
