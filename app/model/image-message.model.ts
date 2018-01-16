import Message from './message.model';

export default class ImageMessage extends Message {

  constructor(text = '', created = Date.now(),
              public url = '', public thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  /**
   * Method overriden
   * @returns String
   */
  public toString(): string {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `- Thumbnail: ${this.thumbnail}`;
  }
}
