import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepo: Repository<User>,){}

    async findAll():Promise<User[]> {
        return this.userRepo.find()
    }

    async create(user: any){
        const newUser = this.userRepo.create(user);
        return this.userRepo.save(newUser);
    }
}