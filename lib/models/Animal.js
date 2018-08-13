class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  speak() {
    return `${this.name} sez ${this.sound}`;
  }
}

module.exports = Animal;