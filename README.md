# Calculadora-app feita em node.js


O passo a passo de como rodar o programa

1° abrir o terminal e instalar O npm que é o Gerenciador de Pacotes do Node "npm install" ou "yarn install" vai depender do seu gerenciador.npm install

2° npm install express

3° npm install cors

4° body-parser

5° pra rodar o código você vai digitar no terminal node index.js



#################################################
Testei minhas rotas com Thunder Client
Thunder Client é uma extensão de cliente de API Rest leve para VS Code.



![thunder-client](https://user-images.githubusercontent.com/89230677/169670375-32c1efac-219a-4ee0-a6ae-e754567676a0.gif)

O meu elemento de teste é esse ==> 
   {
  "elementos":
  [
  10, 2, 2, 0
 ]
}



############
 O passo a passo de como rodar os testes
1° Vai instalar também o mocha com com o seguinte comando no terminal npm install --save-dev mocha. O Mocha é um framework de testes unitários simples e bastante prático.

2° Vai instalar também o chai com com o seguinte comando no terminal npm install chai. Torna os testes muito mais fáceis, oferecendo muitas asserções que você pode executar em seu código.

3° Rode npm run test ou 5° acesse package.json e rode o script na seta depurar ->Depurar "scripts": { "test": "mocha --timeout 2000 --exit" },
pra rodar os teste vamos digitar no terminal npm run test
