import { Post, Body, Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('test')
  test() {
    return { message: 'Hello World!' };
  }

  @Post('body-test')
  post(@Body() data: any) {
    console.log(data);
  }
}
