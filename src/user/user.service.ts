import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async register() {
    return 'result';
  }

  async login() {
    return 'result';
  }

  async findAll() {
    return 'result';
  }

  async findOne(id: number) {
    return 'result';
  }

  async update(id: number, updateUserDto) {
    return 'result';
  }

  async remove(id: number) {
    return 'result';
  }
}
