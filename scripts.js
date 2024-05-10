document.addEventListener("DOMContentLoaded", () => {
    const qrForm = document.getElementById("qr-form");
    const qrCodeContainer = document.getElementById("qr-code");
    const printButton = document.getElementById("print-button");

    const qrcode = new QRCode(qrCodeContainer, {
        width: 200,
        height: 200
    });

    qrForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(qrForm);

        const data = {
            name: formData.get("name"),
            gender: formData.get("gender"),
            age: formData.get("age"),
            compartment: formData.get("compartment"),
            email: formData.get("email"),
            phone: formData.get("phone")
        };

        const jsonData = JSON.stringify(data);

        // Generate the QR code text
        qrcode.makeCode(jsonData);

        // Simulate sending email and SMS
        alert("QR Ticket generated and email/sms sent.");
    });

    printButton.addEventListener("click", () => {
        // Print the QR code container
        const printContents = qrCodeContainer.innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    });
});

