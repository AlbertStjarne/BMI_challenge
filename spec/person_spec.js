// spec/person_spec.js

const { Person } = require('./spec.helper')

describe("Person1", () => {
    let personMetric = new Person({       // ev let personMetric
        weight: 90,
        height: 186,
    });

    it("should have weight of 90", () => {
        expect(personMetric.weight).to.equal(90);
    });

    it("should have height of 186", () => {
        expect(personMetric.height).to.equal(186);
    });

    it("should calculate BMI value", () => {
        personMetric.calculate_metric_bmi();
        expect(personMetric.bmiValue).to.equal(26.01);
    });

    it("should have a BMI Message", () => {
        personMetric.calculate_metric_bmi();
        expect(personMetric.bmiMessage).to.equal('Overweight');
    });
});


describe("Person2", () => {
    let personImperial = new Person({       //ev let personEmperial. Ändra på andra platser där jag har person
        weight: 170,
        height: 70,
    });

    it("should have weight of 170 pounds", () => {
        expect(personImperial.weight).to.equal(170);
    });

    it("should have height of 70 inch", () => {
        expect(personImperial.height).to.equal(70);
    });

    it("should calculate BMI value", () => {
        personImperial.calculate_imperial_bmi();
        expect(personImperial.bmiValue).to.equal(24.39);
    });

    it("should have a BMI Message", () => {
        personImperial.calculate_imperial_bmi();
        expect(personImperial.bmiMessage).to.equal('Healthy');
    });
});
