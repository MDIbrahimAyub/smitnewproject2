function Submit(event) {
    event.preventDefault(); 
                const firstName = document.getElementById("inp1").value.trim();
    const lastName = document.getElementById("inp2").value.trim();
    const email = document.getElementById("inp3").value.trim();
    const password = document.getElementById("inp4").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const country = document.getElementById("country").value;

    if (!firstName || !lastName || !email || !password || !dob || !country) {
        alert("Please fill in all the fields.");
        return;
    }

    let isValid = true;

    try {
        if (firstName === lastName) {
            alert("First name and last name cannot be the same.");
            isValid = false;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            isValid = false;
        }

        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            alert("You are not an adult.");
            isValid = false;
        }

        if (country === "") {
            alert("Please choose your country.");
            isValid = false;
        }

        if (isValid) {
            const userDetails = { firstName, lastName, email, password, dob, country };

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(userDetails);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration successful!");
            document.getElementById("form").reset();
        }
    } catch (error) {
        alert('Registration failed:');
    }
}