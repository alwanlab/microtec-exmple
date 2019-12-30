import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async authenticationLogin(body: any) {
    const user = await this.usersService.findOne({
      $or: [{
        email: body.userNameOrEmail,
      }, {
        userName: body.userNameOrEmail,
      }],
    });
    if (!user) {
      throw new HttpException('Error, Account not found', HttpStatus.METHOD_NOT_ALLOWED);
    } else {
      const isMatch = await user.isPasswordMatch(body.password, user.password);
      // Invalid password
      if (!isMatch) {
        throw new HttpException('Error, Invalid Password', HttpStatus.METHOD_NOT_ALLOWED);
      } else {
        return await {
          userBranches: user.userBranches,
        };
      }
    }
  }

  async authorizationLogin(body: any) {
    const user = await this.usersService.findOne({
      $or: [{
        email: body.userNameOrEmail,
      }, {
        userName: body.userNameOrEmail,
      }],
    });
    if (!user) {
      throw new HttpException('Error, Account not found', HttpStatus.METHOD_NOT_ALLOWED);
    } else {
      const isMatch = await user.isPasswordMatch(body.password, user.password);
      // Invalid password
      if (!isMatch) {
        throw new HttpException('Error, Invalid Password', HttpStatus.METHOD_NOT_ALLOWED);
      } else {
        return await {
          _id: user._id,
          userName: user.userName,
          branch: user.userBranches.find(el => {
            if (String(el._id) === String(body.branchId)) {
              return {
                _id: el._id,
                code: el.code,
                name: el.name,
              };
            }
          }),
          token: this.jwtService.sign({ id: user._id, branch: body.branchId }),
        };
      }
    }
  }
}
