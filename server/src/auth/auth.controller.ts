import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('register')
    async register(@Body() body: { email: string; password: string }, @Res({ passthrough: true}) res: Response) {
        const result = await this.authService.register(body.email, body.password)
        res.cookie('refreshToken', result.refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 1000,
            sameSite: 'strict',
        })
        return { access_token: result.accessToken, user: result.user }
    }

    @Post('login')
    async login(@Body() body: { email: string; password: string }, @Res({ passthrough: true }) res: Response) {
        const result = await this.authService.login(body.email, body.password);
        res.cookie('refreshToken', result.refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: 'strict',
        });
        return { access_token: result.accessToken, user: result.user };
    }
}