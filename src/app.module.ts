import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', { dbName: 'nest' }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
