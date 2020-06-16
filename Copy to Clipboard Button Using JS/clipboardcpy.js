Function copyText(){
    let textarea = document.querySelector("#textArea");
    textarea.select();
    document.execCommand("copy");
}