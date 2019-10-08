class GuessingGame {
  constructor() {
    this.minNumber = 0;
    this.maxNumber = 0;
    this.arr = [];
  }

  setRange(min, max) {
    this.minNumber = min;
    this.maxNumber = max;
  }

  guess() {
    this.arr = Array(this.maxNumber - this.minNumber + 1)
      .fill()
      .map((_, idx) => this.minNumber + idx);
    return (this.middle = Math.round(
      (this.arr[0] + this.arr[this.arr.length - 1]) / 2,
    ));
  }

  lower() {
    this.maxNumber = this.middle;
  }

  greater() {
    this.minNumber = this.middle;
  }
}

module.exports = GuessingGame;
