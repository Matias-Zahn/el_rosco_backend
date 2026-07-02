import { RegularExp } from "../config";
import { CustomError } from "../errors/CustomErros";

export class RegistroUsuarioDto {
  private constructor(
    public readonly nombre_usuario: string,
    public readonly password: string,
    public readonly email: string,
    public readonly fecha_nacimiento: string,
  ) {}

  public static create(object: {
    [key: string]: any;
  }): [string | undefined, RegistroUsuarioDto?] {
    if (!object) throw CustomError.badRequest("Falta todos los argumentos");

    const { nombre_usuario, password, email, fecha_nacimiento } = object;

    if (!nombre_usuario) return ["Falta el nombre del usuario"];
    if (!fecha_nacimiento) return ["Falta la fecha de nacimiento"];

    if (!email || !RegularExp.email.test(email))
      return ["El email no tiene un formato valido"];
    if (!password || !RegularExp.password.test(password))
      return [
        "La contraseña debe tener al menos 8 caracteres, un número, una mayúscula y un carácter especial",
      ];

    return [
      undefined,
      new RegistroUsuarioDto(nombre_usuario, password, email, fecha_nacimiento),
    ];
  }
}
