import { BcryptAdapter, JWTAdpater } from "../config";
import { LoginUsuarioDto, RegistroUsuarioDto } from "../dtos";
import { CustomError } from "../errors/CustomErros";
import { UsuarioModel } from "../models/usuario.model";

export class UsuarioService {
  constructor(private readonly usarioModel: UsuarioModel) {}

  public async registrar(dto: RegistroUsuarioDto) {
    const usuarioExiste = await this.usarioModel.buscarPorNombreUsuario(
      dto.nombre_usuario,
    );

    if (usuarioExiste)
      throw CustomError.badRequest(
        `El usuario: ${usuarioExiste.nombre_usuario} ya se encuentra registrado`,
      );

    const passwordHash = await BcryptAdapter.hash(dto.password);

    const nuevoUsuarioId = await this.usarioModel.insertarUsuario({
      nombre_usuario: dto.nombre_usuario,
      email: dto.email,
      fecha_nacimiento: dto.fecha_nacimiento,
      password: passwordHash,
    });

    return {
      id_usuario: nuevoUsuarioId,
      nombre_usuario: dto.nombre_usuario,
    };
  }

  public async loguear(dto: LoginUsuarioDto) {
    const usuarioExiste = await this.usarioModel.buscarPorNombreUsuario(
      dto.nombre_usuario,
    );

    if (!usuarioExiste)
      throw CustomError.badRequest("El usuario o la contraseña es incorrecta");

    const compararPassword = await BcryptAdapter.compare(
      dto.password,
      usuarioExiste.password,
    );

    if (!compararPassword)
      throw CustomError.badRequest("El usuario o la contraseña es incorrecta");

    const { password, ...datos } = usuarioExiste;

    const token = await JWTAdpater.generarToken({
      id: usuarioExiste.id_usuario,
    });

    if (!token)
      throw CustomError.internalServerError(
        "Error al generar el token de sesion",
      );

    return {
      datos,
      token,
    };
  }
}
