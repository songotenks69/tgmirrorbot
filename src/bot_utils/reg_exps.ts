export class RegExps {
  readonly start: RegExp;
  readonly uploadtar: RegExp;
  readonly upload: RegExp;
  readonly uploadstatus: RegExp;
  readonly list: RegExp;
  readonly getFolder: RegExp;
  readonly stopupload: RegExp;
  readonly stopall: RegExp;
  readonly disk: RegExp;

  constructor(commands: string[]) {
    this.start = new RegExp(commands[0], 'i');
    this.uploadtar = new RegExp(commands[1], 'i');
    this.upload = new RegExp(commands[2], 'i');
    this.uploadstatus = new RegExp(commands[3], 'i');
    this.list = new RegExp(commands[4], 'i');
    this.getFolder = new RegExp(commands[5], 'i');
    this.stopupload = new RegExp(commands[6], 'i');
    this.stopall = new RegExp(commands[7], 'i');
    this.disk = new RegExp(commands[8], 'i');
  }
}