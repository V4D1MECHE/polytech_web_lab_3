function sendMail(obj) {
    var params = {
        name: document.getElementById("name").value ,
        contact: document.getElementById("contact").value ,
        message: document.getElementById("message").value ,
    };
        
    const serviceID = "abe-trans";
    const templateID = "template_gz4zezb"

    emailjs
    .send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("contact").value = "";
            document.getElementById("message").value = "";
            console.log(res);
             })
    .catch((err) => console.log(err));
    obj.disabled = true;
    setTimeout(function() {
        obj.disabled = false;
    }, 2000);
}