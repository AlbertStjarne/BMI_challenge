// src/js/person.js

function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;

    Person.prototype.calculate_metric_bmi = function() {
        calculator = new BMICalculator();
        calculator.metric_bmi(this)
    };

    Person.prototype.calculate_imperial_bmi = function() {
        calculator = new BMICalculator();
        calculator.imperial_bmi(this)
    };

};

