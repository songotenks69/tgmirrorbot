export class RegExps {
  readonly start: RegExp;
  readonly glasstar: RegExp;
  readonly glass: RegExp;
  readonly glassstatus: RegExp;
  readonly list: RegExp;
  readonly getFolder: RegExp;
  readonly breakglass: RegExp;
  readonly breakall: RegExp;
  readonly disk: RegExp;

  constructor(commands: string[]) {
    this.start = new RegExp(commands[0], 'i');
    this.glasstar = new RegExp(commands[1], 'i');
    this.glass = new RegExp(commands[2], 'i');
    this.glassstatus = new RegExp(commands[3], 'i');
    this.list = new RegExp(commands[4], 'i');
    this.getFolder = new RegExp(commands[5], 'i');
    this.breakglass = new RegExp(commands[6], 'i');
    this.breakall = new RegExp(commands[7], 'i');
    this.disk = new RegExp(commands[8], 'i');
  }
}