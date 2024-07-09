import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  createUser(createDto: CreateUserDto) {
    const user = new this.userModel(createDto);

    return user.save();
  }

  getUsers() {
    return this.userModel.find();
  }

  updateUser(id: string, updateUser: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUser);
  }

  getUser(id: string) {

    return this.userModel.findById(id);
  }
}
