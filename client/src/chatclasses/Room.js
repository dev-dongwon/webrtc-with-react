class Room {
  constructor(roomId, hostId, roomName, password, privateFlag = false, namespace = "public") {
    this.roomId = roomId;
    this.roomName = roomName;
    this.hostId = hostId;
    this.namespace = namespace;
    this.password = password;
    this.privateFlag = privateFlag;
    this.userList = [];
    this.chatList = [];
  }

  addMessage(msgObj) {
    this.chatList.push(msgObj);
  }

  clearHistory() {
    this.chatList = [];
  }
}

module.exports = Room;
