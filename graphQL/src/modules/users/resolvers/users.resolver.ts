
import { User } from '../dto/users.dto';
import { UsersService } from '../services/users.service';

import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserInput } from '../inputs/user.input';


@Resolver('user')
// @UseGuards(AuthGuard('jwt'))
export class UsersResolver {

    constructor(public readonly usersService: UsersService) {
    }

    @Query(() => [User])
    async users() {
        return await this.usersService.findAll();
    }


    @Mutation(() => User)
    async createUser(@Args('input') input: UserInput) {
        
        let item = await this.usersService.create({
            userName: input.userName,
            email: input.email,
            password: input.password,
            fullName: input.fullName,
            phone: input.phone,
            userNotes: input.userNotes
        })
        return item;
    }
}
