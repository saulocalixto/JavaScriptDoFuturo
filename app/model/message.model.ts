export default class Message {
  public static newEmptyMessage(): Message {
    return new Message();
  }

  constructor(public text: string = '',
              protected readonly created: number = Date.now()) {
    this.text = text;
    this.created = created;
  }
  public toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
}
