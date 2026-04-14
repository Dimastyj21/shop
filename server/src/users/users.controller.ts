import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Post()
    async create(@Body() body: { email: string; password: string }): Promise<User> {
        return this.usersService.create(body.email, body.password)
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email: string): Promise<User> {
        const user = await this.usersService.findByEmail(email)
        if(!user) {
            throw new NotFoundException(`User with email ${email} not found`);
        }
        return user
    }

    @Get('id')
    async findById(@Param('id') id: number): Promise<User> {
        const user = await this.usersService.findById(id)
        if(!user){
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user
    }

}