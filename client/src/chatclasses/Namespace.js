class Namespace {
  constructor(id, title, img, endPoint) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.endPoint = endPoint;
  }

  addRoom(roomObj) {
    this.rooms.push(roomObj);
  }
}

module.exports = Namespace;