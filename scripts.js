function BmiCalculator(){
    let height = document.querySelector("#height").value
    let weight = document.querySelector("#weight").value

    let bmi = weight/ (height/100) **2

    let result = "your bmi is : " + bmi.toFixed(2)

    if(bmi < 18.5){
        result = result + "you are underweight"
    }
    else if(bmi>=18.5 && bmi<25){
        result = result + "you weight is normal"
    }
    else if(bmi>=25){
        result = result + "  you are overweight"
    }
    else{
        result = "enter valid data"
    }

    document.querySelector("#result").innerHTML = result
}