import { Entity, Column, Unique, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity('country')
export class CountryEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code:string;

    @Column()
    nameAr:string;

    @Column()
    nameEn: string;

}