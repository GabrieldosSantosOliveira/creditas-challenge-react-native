export class ArgumentOutOfRangeException extends RangeError {
  constructor(message?: string) {
    super(message);
    this.name = "ArgumentOutOfRangeException";
  }
}
