export class Paciente {
    constructor(
      public readonly id: string,
      public readonly nombre: string,
      public readonly correo: string,
      public readonly telefono: string,
      public readonly fechaNacimiento: Date
    ) {}
  }
  