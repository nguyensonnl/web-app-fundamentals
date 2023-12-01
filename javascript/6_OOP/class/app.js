class Button {
  constructor(value) {
    this.value = value;
    //this.click = this.click.bind(this);
  }

  //   click() {
  //     console.log(this.value);
  //   }
  click = () => {
    console.log(this.value);
  };
}

let button = new Button("hello");

setTimeout(button.click, 1000);
