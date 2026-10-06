class Calculator {
  static add() {
    console.log(20 + 30);
  }
  static sub(n1, n2) {
    console.log(n2-n1);
  }
  static mul(){
    return 10*20;
  }
  static div(a,b){
    return b/a;
  }
}
Calculator.add();
Calculator.sub(10,20);
let res1=Calculator.mul();
console.log(res1);
let res2=Calculator.div(10,20);
console.log(res2);
