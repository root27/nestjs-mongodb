import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', { dbName: 'nest' }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
