import {BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException} from '@nestjs/common';
import {UserService} from "./user.service";
import * as bcryptjs from 'bcryptjs';
//import {JwtService} from "@nestjs/jwt";
//import {Request, Response} from "express";
//import {TokenService} from "./token.service";
//import {MoreThanOrEqual} from "typeorm";
//import * as speakeasy from 'speakeasy';
//import {OAuth2Client} from "google-auth-library";

@Controller('api')
export class UserController {

    constructor(
        private userService: UserService,
        //private jwtService: JwtService,
        //private tokenService: TokenService
    ) {
    }

    @Post('register')
    async register(@Body() body: any) {
        if (body.password !== body.password_confirm) {
            throw new BadRequestException('Passwords do not match!');
        }

        return this.userService.save({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: await bcryptjs.hash(body.password, 12)
        });
    }
}
