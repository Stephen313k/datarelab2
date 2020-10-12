class BMI{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
niod
    //method
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
//height 2m, weight 90kg
let myBmi = new BMI(2, 90);

//new calculated object/variable
let calculatedBmi = myBmi.calculateBMI();
console.log(calculatedBmi);