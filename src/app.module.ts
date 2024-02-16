import { Controller,Module ,Get} from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppController } from "./app.controller";

 @Module({
    controllers:[AppController],
 })
 export class AppModule{}

