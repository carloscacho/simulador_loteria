var numSort = [];
var numEsco = [];

function sortearNumeros() {
  numSort = [];
  let sort;
  for (var i = 0; i < 6; i++) {
    do{
      sort = Math.ceil(Math.random() * 60);
      sort = (sort == 0) ? 1 : sort;
    }while (numSort.includes(sort));

    numSort.push(sort);
  }
}

function addToList(num, pos) {
  if(num.length == 2){
    if(numEsco.includes(num)){
      alert2("Erro", "Número escolhido anteriormente. Digite outro número.")
    } else if (parseInt(num) > 60){
      alert2("Erro", "O número digitado não pode ser maior que 60.")
    } else {
      numEsco[pos-1] = num;
    }
  }
}

function VerificarAcertos() {
  sortearNumeros();
  let cont = 0;
  if(numEsco.length != 6){
    alert2("Erro", "A quantidade de números escolhidos é menor que 6.\n Digite 6 números de 01 a 60 com duas casas decimais.");
  } else {
    for (var i = 0; i < 6; i++) {
      if(numSort.includes(parseInt(numEsco[i]))){
        cont++;
      }
    }
    printNumSort();
    document.getElementById('totalAcertos').innerHTML = "O total de acertos foi: " + cont;
  }
}

function printNumSort() {
  document.getElementById('NumSort').innerHTML = "";
  for (var i = 0; i < numSort.length; i++) {
    let li = document.createElement("li");
    li.append(numSort[i]);
    li.classList.add("result");
    document.getElementById('NumSort').append(li);
  }
}

function alert2(title, text) {
  let timerInterval
Swal.fire({
  title: title,
  html: text,
  timer: 5000,
  timerProgressBar: true,
  willOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 1000)
  },
  onClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('O alerta foi fechado')
  }
})
}
