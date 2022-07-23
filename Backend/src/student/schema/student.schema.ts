import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column({nullable: true})
    lastName : string;

    @Column({nullable: true})
    address : string;

    @Column()
    dob : Date;

    @Column()
    highSchool : string;

    @Column({type: 'decimal', precision: 3, scale: 1})
    mathScore : number;

    @Column({type: 'decimal', precision: 3, scale: 1})
    literatureScore : number;
    
    @Column({type: 'decimal', precision: 3, scale: 1})
    englishScore : number;
}