document.addEventListener("DOMContentLoaded", () => {
    const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

    let qrcode = document.getElementById("qrimage");
    let qr1=document.getElementsByClassName(".qr")
    const qrbutton = document.querySelector(".generate button");

    function getqr() {

        const input = document.querySelector(".input-text input").value;
        if(input>0){
        console.log(input);
        qrcode.src = url + encodeURIComponent(input); // Ensure the input is URL encoded
    }ab

    qrbutton.addEventListener("click", getqr); // Add event listener to the button
});