function gerarQRCode(){
    var inputUser = document.querySelector("textarea").value
  
    var googleChart = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl="
    var conteudoQrCode = googleChart + encodeURIComponent(inputUser);
    document.querySelector("#QRCodeImage").src = conteudoQrCode

}