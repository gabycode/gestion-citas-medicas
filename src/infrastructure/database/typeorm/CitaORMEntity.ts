import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class CitaORMEntity {
  @ObjectIdColumn()
  id!: string;

  @Column()
  pacienteId!: string;

  @Column()
  doctorId!: string;

  @Column()
  fecha!: Date;

  @Column()
  motivo!: string;
}
