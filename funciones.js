function copyToClipboard( mail){
  let aux = document.createElement( "input");
  document.body.appendChild( aux);
  aux.value = mail;
  aux.select();
  document.execCommand( "copy");
  document.body.removeChild( aux);
}

// function displayInfo( id){

//   let text = document.getElementById( id);
//   if( text.style.display == "none")
//     text.style.display = "block";
//   else
//     text.style.display = "none";
// }

function changeText(){
  document.getElementById("contact").innerHTML = "Copy to clipboard";
}

function restoreText(){
  document.getElementById("contact").innerHTML = "Contact";
}