import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class CategoryEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany( type => TaskEntity , task => task.category)
  task: TaskEntity[]; 
}