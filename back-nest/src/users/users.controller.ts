import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity'
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {

    constructor(private usersService:UsersService){}

    @Get()
    getUsers(): Promise<User[]>{
        return this.usersService.getUsers();
    }

    @Get(':username')
    getUsername(@Param('username')username:string){
        return this.usersService.getUsername(username);
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id:number ){
        return this.usersService.getUserId(id);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id:number){
        return this.usersService.deleteUser(id)
    }
    
    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id:number, @Body()
    user: UpdateUserDto){
        return this.usersService.updateUser(id,user)
    }
}
