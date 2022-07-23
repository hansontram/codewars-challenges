// Write function bmi that calculates body mass index (bmi = weight / height2).
    // if bmi <= 18.5 return "Underweight"
    // if bmi <= 25.0 return "Normal"
    // if bmi <= 30.0 return "Overweight"
    // if bmi > 30 return "Obese"


    //write function 
    // calculate bmi = weight / height^2
    // create conditional 

function bmi (weight, height) {
    let CalculateBmi = weight / Math.pow (height, 2)
    if (CalculateBmi <= 18.5) {
        return "Underweight";
    } else if (CalculateBmi <= 25.0) {
        return "Normal";
    } else if (CalculateBmi <= 30.0) {
        return "Overweight"
    } else if (CalculateBmi > 30) {
        return "Obese"
    }
}


...