import { ConfigurarPartidaDto, FinalizarPartidaDto } from "../dtos";
import { CustomError } from "../errors/CustomErros";
import { PalabraModel } from "../models/palabra.model";
import { PartidaModel } from "../models/partida.model";

export class PartidaService {
  public constructor(
    private readonly palabraModelo: PalabraModel,
    private readonly partidaModelo: PartidaModel,
  ) {}

  public async generarPartida(dto: ConfigurarPartidaDto, usuarioId: number) {
    try {
      const { ayudaAdicional, dificultadId, tiempoMaximo } = dto;

      const palabrasRosco =
        await this.palabraModelo.obtenerRoscoPalabra(dificultadId);

      if (palabrasRosco.length !== 27)
        throw CustomError.internalServerError(
          "Faltan palabras en la base de datos para completar el rosco de esta dificultad.",
        );

      const partidaId = await this.partidaModelo.crearPartida(
        usuarioId,
        dificultadId,
        tiempoMaximo,
        ayudaAdicional,
      );

      // 5. Retornamos todo empaquetado, incluyendo el nuevo ID
      return {
        partidaId, // Clave para actualizar el puntaje después
        configuracion: {
          tiempoMaximo,
          ayudaAdicional,
        },
        rosco: palabrasRosco,
      };
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServerError("Error al generar las partidas");
    }
  }

  public async finalizarPartida(dto: FinalizarPartidaDto, usuarioId: number) {
    const puntajeFinal = dto.aciertos;

    let mensaje = "";

    if (puntajeFinal === 27) {
      mensaje = "Excelente Partida";
    } else if (puntajeFinal >= 23 && puntajeFinal <= 26) {
      mensaje = "Muy Bien!!";
    } else if (puntajeFinal >= 19 && puntajeFinal <= 22) {
      mensaje = "Bien!";
    } else if (puntajeFinal >= 15 && puntajeFinal <= 18) {
      mensaje = "Mmm...estuvo regular!";
    } else {
      mensaje = "A seguir estudiando!";
    }

    const fueActualizado = await this.partidaModelo.registrarFinPartida(
      dto.partidaId,
      usuarioId,
      puntajeFinal,
    );

    if (!fueActualizado)
      throw CustomError.forbidden(
        "La partida no existe, no tenés permisos, o ya fue finalizada previamente.",
      );

    return {
      totalAcertadas: puntajeFinal,
      mensaje: mensaje,
    };
  }
}
