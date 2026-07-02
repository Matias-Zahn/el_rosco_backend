export class RegularExp {
  // Regex para validar la contraseña (mínimo 8, mayúscula, número, especial)
  public static readonly password =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]).{8,}$/;

  // Ya que estamos, podemos agregar uno para el email
  public static readonly email =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
}
