Page({
  data: {
    result: "",
    operator: "",
    firstNumber: "",
    secondNumber: "",
    expression: ""
  },

  numberInput: function(e) {
    var value = e.currentTarget.dataset.value;
    var result = this.data.result + value;
    var expression = this.data.expression;

    if (expression.includes("=")) {
      expression = "";
    }

    this.setData({
      result: result,
      expression: expression + value
    });
  },

  operatorInput: function(e) {
    var operator = e.currentTarget.dataset.operator;
    var result = this.data.result;
    var expression = this.data.expression;

    if (result !== "") {
      var firstNumber = Number(result);
      this.setData({
        firstNumber: firstNumber,
        result: ""
      });
    }

    this.setData({
      operator: operator,
      expression: expression + operator
    });
  },

  calculate: function() {
    var firstNumber = Number(this.data.firstNumber);
    var secondNumber = Number(this.data.result);
    var operator = this.data.operator;
    var result;

    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      default:
        result = firstNumber;
    }

    this.setData({
      result: result,
      expression: this.data.expression + "=" + result
    });
  },

  clear: function() {
    this.setData({
      result: "",
      operator: "",
      firstNumber: "",
      secondNumber: "",
      expression: ""
    });
  }
});
