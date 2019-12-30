import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { GeneralModule } from './modules/general/general.module';
import { typeOrmConfig } from './common/config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    GeneralModule
  ]
})
export class AppModule { }
