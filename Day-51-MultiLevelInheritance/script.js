class BankAccount {
  constructor(accNum, accHldName) {
    this.accNum = accNum;
    this.accHldNam = accHldName;
  }
  displayBankDet() {
    console.log("Account Number: " + this.accNum);
    console.log("Account Holder Name: " + this.accHldNam);
  }
}
class BankBlc extends BankAccount {
  constructor(accNum, accHldName, accBlc) {
    super(accNum, accHldName);
    this.accBlc = accBlc;
  }
  displayBankBlcDet() {
    super.displayBankDet();
    console.log("Account Balance: " + this.accBlc);
  }
}
class BankType extends BankBlc {
  constructor(accNum, accHldName, BankBlc, accType) {
    super(accNum, accHldName, BankBlc);
    this.accType = accType;
  }
  displayAll() {
    super.displayBankBlcDet();
    console.log("Account Type: " + this.accType);
  }
}
let Bank = new BankType(6969, "Pavan", 2345, "Savings");
Bank.displayAll();
