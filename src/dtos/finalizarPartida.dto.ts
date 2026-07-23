export class FinalizarPartidaDto {
  private constructor(
    public readonly partidaId: number,
    public readonly aciertos: number,
    public readonly errores: number,
  ) {}

  static create(object: {
    [key: string]: any;
  }): [string | undefined, FinalizarPartidaDto?] {
    const { partidaId, aciertos, errores } = object;

    if (!partidaId || isNaN(Number(partidaId)))
      return [
        "El identificador de la partida es obligatorio y debe ser un número",
      ];
    if (aciertos === undefined || isNaN(Number(aciertos)) || aciertos < 0)
      return ["Los aciertos son obligatorios y no pueden ser negativos"];
    if (errores === undefined || isNaN(Number(errores)) || errores < 0)
      return ["Los errores son obligatorios y no pueden ser negativos"];

    if (Number(aciertos) + Number(errores) > 27) {
      return [
        "La suma de aciertos y errores no puede superar las 27 letras del rosco",
      ];
    }

    return [
      undefined,
      new FinalizarPartidaDto(
        Number(partidaId),
        Number(aciertos),
        Number(errores),
      ),
    ];
  }
}
