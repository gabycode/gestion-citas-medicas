import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class PacienteORMEntity {
  @ObjectIdColumn()
  id!: string;

  @Column()
  nombre!: string;

  @Column()
  correo!: string;

  @Column()
  telefono!: string;

  @Column()
  fechaNacimiento!: Date;
}
