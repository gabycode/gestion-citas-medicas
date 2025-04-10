import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class DoctorORMEntity {
  @ObjectIdColumn()
  id!: string;

  @Column()
  nombre!: string;

  @Column()
  especialidad!: string;

  @Column()
  correo!: string;

  @Column()
  telefono!: string;
}
