import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class ItemEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name:string;
  @ManyToMany( type => TaskEntity , task => task.category)
  task: TaskEntity[]; 
}