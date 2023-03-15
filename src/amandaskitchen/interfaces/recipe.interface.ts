import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recipe{
    @PrimaryGeneratedColumn()
    ID: number;
    @Column()
    ingredients: String;
    @Column()
    recipeName: String;
    @Column()
    timeToCook: String;
    @Column()
    instructions: String;
};