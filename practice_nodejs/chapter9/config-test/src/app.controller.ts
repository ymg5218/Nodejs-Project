import { Controller, Get } from '@nestjs/common';
//import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';

@Controller()
export class AppController {
  constructor(private configService : ConfigService) {}

  @Get()
  getHello(): string {
    const message1 = this.configService.get('MESSAGE');
    return message1;
  }

  @Get('service-url')
  getServiceUrl() : string {
    const message2 = this.configService.get('SERVICE_URL');
    return message2;
  }

  @Get('db-info')
  getTest() : string{
    console.log(this.configService.get('logLevel'));
    console.log(this.configService.get('apiVersion'));
    return this.configService.get('dbInfo');
  }
}
