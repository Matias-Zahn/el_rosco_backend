import jwt, { SignOptions } from "jsonwebtoken";
import { envs } from "../config/envs";

export class JWTAdpater {
  public static async generarToken(payload: any, duration: string = "2h") {
    return new Promise((resolve) => {
      jwt.sign(
        payload,
        envs.JWT_SEED,
        { expiresIn: duration } as SignOptions,
        (err, token) => {
          if (err) {
            console.log(err);
            return resolve(null);
          }

          resolve(token);
        },
      );
    });
  }

  public static async validateToken<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, envs.JWT_SEED, (err, decoded) => {
        if (err) return resolve(null);

        resolve(decoded as T);
      });
    });
  }
}
