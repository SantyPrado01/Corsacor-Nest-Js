import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";
import { Column } from "typeorm";

export class RegisterDto{

    @Transform(({ value })=> value.trim())
    @IsString()
    @MinLength(4)
    username: string;

    @Transform(({ value })=> value.trim())
    @IsString()
    @MinLength(6)
    password: string;

    @Column()
    rolID: number;

    @Column({default: false})
    eliminado: boolean

    
}