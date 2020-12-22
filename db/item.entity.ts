import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class ItemEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name:string;
  @ManyToOne( type => TaskEntity , task => task.category)
  task: TaskEntity[]; 
}