import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import CategoryEntity from './category.entity';
import LabelEntity from './label.entity';

@Entity()
export default class TaskEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => CategoryEntity, category => category.task)
  category: CategoryEntity;
  @OneToMany(type => LabelEntity, label => label.task)
  label: LabelEntity;

}