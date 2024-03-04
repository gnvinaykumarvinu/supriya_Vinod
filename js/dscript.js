function downloadAndOpenPDFE() {
  // Replace 'your-pdf-file.pdf' with the actual file path or URL of your PDF file
  var pdfFile = './image/Supriya_Vinod_English.pdf';

  // Create an invisible anchor element
  var anchor = document.createElement('a');
  anchor.style.display = 'none';

  // Set the download attribute and href for the anchor element
  anchor.setAttribute('download', 'Supriya_Vinod_English.pdf');
  anchor.setAttribute('href', pdfFile);

  // Append the anchor element to the document body
  document.body.appendChild(anchor);

  // Trigger a click event on the anchor element to start the download
  anchor.click();

  // Remove the anchor element from the document body
  document.body.removeChild(anchor);

  // Open the downloaded PDF file in a new tab or window
  window.open(pdfFile, '_blank');
}

function downloadAndOpenPDFT() {
  // Replace 'your-pdf-file.pdf' with the actual file path or URL of your PDF file
  var pdfFile = './image/Supriya_Vinod_Telugu.pdf';

  // Create an invisible anchor element
  var anchor = document.createElement('a');
  anchor.style.display = 'none';

  // Set the download attribute and href for the anchor element
  anchor.setAttribute('download', 'Supriya_Vinod_Telugu.pdf');
  anchor.setAttribute('href', pdfFile);

  // Append the anchor element to the document body
  document.body.appendChild(anchor);

  // Trigger a click event on the anchor element to start the download
  anchor.click();

  // Remove the anchor element from the document body
  document.body.removeChild(anchor);

  // Open the downloaded PDF file in a new tab or window
  window.open(pdfFile, '_blank');
}
