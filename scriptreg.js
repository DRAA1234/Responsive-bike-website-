function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let bike = document.getElementById("bike").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[6-9]\d{9}$/;

    let valid = true;

    // Name
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name required";
        valid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    // Email
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter valid email";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Phone
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter valid phone number";
        valid = false;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    // Address
    if (address === "") {
        document.getElementById("addressError").innerHTML = "Address required";
        valid = false;
    } else {
        document.getElementById("addressError").innerHTML = "";
    }

    // Bike Model
    if (bike === "") {
        document.getElementById("bikeError").innerHTML = "Bike model required";
        valid = false;
    } else {
        document.getElementById("bikeError").innerHTML = "";
    }

    return valid;
}