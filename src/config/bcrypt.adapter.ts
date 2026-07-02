import bcrypt from "bcrypt";

export class BcryptAdapter {
  public static async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  public static async compare(
    password: string,
    password_hash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, password_hash);
  }
}
