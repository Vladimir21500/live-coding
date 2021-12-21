const timer = {
  minsPassed: 0,
  secondsPassed: 0,
  intervalId: null,

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
      this.secondsPassed += 1;
    }, 1000);
  },
  getTime() {
    const fantik = () => {
      return this.secondsPassed < 10
        ? `${this.minsPassed}:0${this.secondsPassed}`
        : `${this.minsPassed}:${this.secondsPassed}`;
    };
    fantik();
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

//context definition
/* function sum(a, b) {
  this;
}

sum(3, 4);

// parametrs
//  parent lex env
// context

const obj = {
  firstName: 'John',
  printName() {
    console.log(this);
  },
};
obj.printName();

const func = obj.printName;
func(); */

// testData

for (var i = 0; i < +10; i++) {
  setTimeout(() => {
    console.log(i);
  });
}
