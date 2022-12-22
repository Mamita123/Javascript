const fileInput = document.querySelector("input"),
    downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
  e.preventDefault(); //preventing form from submitting
  downloadBtn.innerText ="Downloading file....";
  fetchFile(fileInput.value);
});

function fetchFile(url){
  //fetching file & returning response as blob
  fetch(url).then(res => res.blob()).then(file=>{
    //URL.createObjectURL creates a url of passed object
    let tempUrl = URL.createObjectURL(file);
    console.log(tempUrl);
    let aTag= document.createElement("a");
    aTag.href = tempUrl; // passing tempURL as href value of <a> tag
    //passing filename as downloadvalue of <a> tag
    aTag.download = url.replace(/^.*[\\\/]/,'');
    document.body.appendChild(aTag); //adding <a> tag inside body
    aTag.click(); //clicking <a> tag so the file download
    aTag.remove(); //removing the <a> tag once file downloaded
    URL.revokeObjectURL(tempUrl); //removing the tempURL from the document
    downloadBtn.innerText ="Downloading file";
  }).catch(() => {
    //catch method will call if any error comes during downloading
    downloadBtn.innerHTML = "Download file";
    alert("Failed to download file!")
  });
}