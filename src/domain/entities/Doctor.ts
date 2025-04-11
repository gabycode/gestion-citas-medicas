export class Doctor {
  constructor(
    public readonly id: string,
    public readonly nombre: string,
    public readonly especialidad: string,
    public readonly correo: string,
    public readonly telefono: string
  ) {
    if (!correo.includes('@')) {
      throw new Error('Correo inválido');
    }

    if (telefono.length < 8) {
      throw new Error('Teléfono inválido');
    }
  }
}
