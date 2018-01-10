class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this._created = created;
  }

  get created(){
    return this._created;
  }
  
  set created(created) {
    this._created = created;
  }

  toString() {
    return `${this.text}. Criado em: ${this._created}`;
  }
}

class ImageMessage extends Message {
  constructor(text = '', created = Date.now(), url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString() {
    return `Photo${super.toString()}` + 
            ` - Url: ${this.url}` + 
            ` Thumbnail: ${this.thumbnail}`;
  }
}

var emptyMessage = new Message();
var textMessage = new Message('Mensagem de ontem!', Date.now() - 86400);
var photoMessage = new ImageMessage(
  'Image Message',
  Date.now() - 86400,
  'www.saulolindo.com.br',
  'saulolindo.png');

console.log(emptyMessage);
console.log(textMessage.toString());
console.log(String(photoMessage));