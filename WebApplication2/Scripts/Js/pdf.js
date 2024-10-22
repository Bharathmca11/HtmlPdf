document.getElementById('btnPdfMake').addEventListener('click', function () {
    var docDefinition = {
        content: [
            { text: 'Employee List', style: 'header' },
            {
                table: {
                    body: [
                        [{ text: 'ID', style: 'tableHeader' }, { text: 'Name', style: 'tableHeader' }],
                        ['1', 'Arun'],
                        ['2', 'John'],
                        ['3', 'Mary']
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 20, 0, 10],
                alignment: 'center'
            },
            tableHeader: {
                bold: true,
                fontSize: 12,
                color: 'black',
                fillColor: '#f2f2f2'
            }
        }
    };
    pdfMake.createPdf(docDefinition).download('employeelist.pdf');
});

$('#ppdf,#dpdf').on('click', function () {
    var element = document.getElementById('content');
    var ischk = $(this).attr('isdownload');
    html2pdf()
        .from(element)
        .set({
            margin: 1,
            filename: 'product-list.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'in', format: 'letter' }
        })
        .outputPdf('blob')
        .then(function (pdfBlob) {
            var blobURL = URL.createObjectURL(pdfBlob);
            window.open(blobURL, '_blank');
            if (ischk) {
                var link = document.createElement('a');
                link.href = blobURL;
                link.download = 'emplist.pdf';
                link.click();
            }
        });
});