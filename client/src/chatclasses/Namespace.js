class Namespace {
  constructor(id, type, endPoint) {
    this.id = id;
    this.type = type;
    this.endPoint = endPoint;
    this.rooms = [];
  }

  addRoom(roomObj) {
    this.rooms.push(roomObj);
  }
}

module.exports = Namespace;