function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');

    if (birthdate) {
        const birthDate = new Date(birthdate);
        const today = new Date();
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }

        resultDiv.textContent = `You are ${age} years old.`;
    } else {
        resultDiv.textContent = 'Please enter a valid birth date.';
    }
}
