import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class LabelEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @ManyToMany( type => TaskEntity , task => task.category)
  task: TaskEntity[]; 
}