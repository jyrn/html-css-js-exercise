function changecolor(color){
    document.getElementById("mysec").style.backgroundColor= color;
}

function showAlert(message){
    document.getElementById('alertMessage').textContent = message;
    var myModal = new bootstrap.Modal(document.getElementById('customAlert'));
    myModal.show();
}

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    showAlert("Form submitted successfully!");
});