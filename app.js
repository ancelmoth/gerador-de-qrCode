function gerarQRCode(){
    var inputUser = document.querySelector("textarea").value
  
    var googleChart = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl="
    var conteudoQrCode = googleChart + encodeURIComponent(inputUser);
    document.querySelector("#QRCodeImage").src = conteudoQrCode

}