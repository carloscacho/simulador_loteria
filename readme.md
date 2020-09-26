# Simulador de Loteria
acesse a pagina do simulador
[site do simulador](https://carloscacho.github.io/simulador_loteria/)

Este projeto é um simulador da *megasenna*, onde o usuário digita seis numero.
E sorteamos aleatoriamente outros seis numeros e comparamos para verificar.
quantos numeros você acertou.

**Não é para jogos oficiais**

## Tecnologias utilizadas
1. **HTML**: HTML é uma linguagem de marcação utilizada na construção da estruturas das páginas na Web.
2. **CSS**: Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web.
3. **JS**: JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional).
4. ~~**Jquery**~~: não foi utilizado.

## funções Principais
Aqui será apresentado as duas funções principais do site

### Sorteio de numeros
Nessa função os numeros são sorteados aleatoriamente
```
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
```

### Lendo os Numeros digitados
Lê as entradas de numeros digitadas pelo usuário
```
function addToList(num, pos) {
  if(num.length == 2){
    if(numEsco.includes(num)){
      alert("Numero Escolhido Anterioemente. Digite Outro numero")
    } else if (parseInt(num) > 60){
      alert("O numero digitado não pode ser maior que 60")
    } else {
      numEsco[pos-1] = num;
    }
  }
}
```

## Como Rodar o código
> Simplemente baixe e o codigo e abra o arquivo **_index.html_** no seu navegador

## exmplo de tabela
|Exemplo   | Valor do exemplo | quantidade
|--------- | -----------------|-----------
|Exemplo 1 | R$ 10            | 5
|Exemplo 2 | R$ 8             | 4
|Exemplo 3 | R$ 7             | 34
|Exemplo 4 | R$ 8             | 23

## imagens da tela
tela 1: tela de abertura
![tela 1](/imagens/tela1.png)
tela 2: 6 numeros digitados nenhum soreteado
![](/imagens/tela2.png)

#### referencias
* HTML: [wikipedia](https://pt.wikipedia.org/wiki/HTML)
* CSS: [w3Shools](https://www.w3schools.com/css/)
* JavaScript: [wikipedia](https://pt.wikipedia.org/wiki/JavaScript)

by @carloscacho e melhorado por @prof-carloscacho
