import { CustomError } from "../errors/CustomErros";

export class ConfigurarPartidaDto {
  private constructor(
    public readonly dificultadId: number,
    public readonly tiempoMaximo: number,
    public readonly ayudaAdicional: boolean,
  ) {}

  public static create(object: {
    [key: string]: any;
  }): [string | undefined, ConfigurarPartidaDto?] {
    if (!object || Object.keys(object).length === 0) {
      throw CustomError.badRequest("Faltan todos los campos de configuración");
    }

    let { dificultadId, tiempoMaximo, ayudaAdicional } = object;

    if (dificultadId === undefined || dificultadId === null) {
      return ["Falta seleccionar la dificultad"];
    }
    dificultadId = Number(dificultadId);
    if (![1, 2, 3].includes(dificultadId)) {
      return ["El nivel de dificultad seleccionado no es válido"];
    }

    if (tiempoMaximo === undefined || tiempoMaximo === null) {
      return ["Falta seleccionar el tiempo máximo"];
    }
    tiempoMaximo = Number(tiempoMaximo);
    if (![0, 120, 180, 300].includes(tiempoMaximo)) {
      return ["El tiempo máximo debe ser 2, 3, 5 minutos o 0 (sin tiempo)"];
    }

    if (ayudaAdicional === undefined || ayudaAdicional === null) {
      return ["Falta indicar si desea ayuda adicional"];
    }

    const ayuda = ayudaAdicional === "true" || ayudaAdicional === true;

    return [
      undefined,
      new ConfigurarPartidaDto(dificultadId, tiempoMaximo, ayuda),
    ];
  }
}
