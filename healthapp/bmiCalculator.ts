const calculateBmi = (height: number, weight: number): string => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    if (bmi < 16.0) {
        return 'Underweight (severe thinness)';
    } else if (bmi >= 16.0 && bmi < 17.0) {
        return 'Underweight (moderate thinness)';
    } else if (bmi >= 17.0 && bmi < 18.5) {
        return 'Underweight (mild thinness)';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal range';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else if (bmi >= 30.0 && bmi < 35.0) {
        return 'Obese - Class 1';
    } else if (bmi >= 35.1 && bmi < 40.0) {
        return 'Obese - Class 2';
    } else {
        return 'Obese - Class 3';
    }
};

console.log(calculateBmi(189,86))