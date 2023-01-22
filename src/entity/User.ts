import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    userName: string

    @Column({ default: 1312 })
    role: number

    @Column()
    passWord: string 

    @Column({ default : ""})
    refreshToken : string

}