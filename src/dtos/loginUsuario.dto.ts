import { CustomError } from "../errors/CustomErros";

export class LoginUsuarioDto {
  private constructor(
    public readonly nombre_usuario: string,
    public readonly password: string,
  ) {}

  public static create(object: {
    [key: string]: any;
  }): [string | undefined, LoginUsuarioDto?] {
    if (!object) throw CustomError.badRequest("Faltan todos los campos");

    const { nombre_usuario, password } = object;

    if (!nombre_usuario) return ["El nombre de usuario es obligatorio"];

    if (!password) return ["La contraseña es invalida"];

    return [undefined, new LoginUsuarioDto(nombre_usuario, password)];
  }
}
