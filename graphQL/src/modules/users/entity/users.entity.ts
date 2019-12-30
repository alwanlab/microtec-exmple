import { Entity, PrimaryGeneratedColumn, Column, Unique, BaseEntity } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class UserEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    userName:string;

    @Column()
    email:string;

    @Column()
    password: string;

    @Column()
    fullName:string;

    @Column()
    phone: string;

    @Column()
    userNotes: string;


    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.password);
        return hash === this.password;
    }
}