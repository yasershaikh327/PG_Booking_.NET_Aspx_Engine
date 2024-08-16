﻿function Export() {
    html2canvas(document.getElementById("R"), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Payment Receipt.pdf");
        }
    });
}