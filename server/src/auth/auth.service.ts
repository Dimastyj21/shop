import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async register(email: string, password: string) {
        const existingUser = await this.usersService.findByEmail(email)
        if(existingUser) {
            throw new UnauthorizedException('User already exists');
        }
        const user = await this.usersService.create(email, password)
        const token = this.jwtService.sign({ sub: user.id, email: user.email })
        return { access_token: token, user: { id: user.id, email: user.email }}
    }

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email)
        if(!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const token = this.jwtService.sign({ sub: user.id, email: user.email })
        return { access_token: token, user: { id: user.id, email: user.email }}
    }

}