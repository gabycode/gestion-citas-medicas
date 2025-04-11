export class Cita {
  constructor(
    public readonly id: string,
    public readonly pacienteId: string,
    public readonly doctorId: string,
    public readonly fecha: Date,
    public readonly motivo: string
  ) {}
}
