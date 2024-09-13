//Chamando o JQuery
//E informando que quando ele estiver pronto, iniciar a função
$(document).ready(function(){

    //Criando um evento onde ao clicar no primeiro botão disponível no header, ele mostre o formulário
    $('header button').click(function(){
        $('form').slideDown();
    })

    //Criando um evento onde ao clicar no botão com a classe: #botao-cancelar, ele recolha o formulário.
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    //Criando um evento onde ao ser submetido ele não atualize a página
    $('form').on('submit', function(e) {
        e.preventDefault();

        // Resgatando o valor inserido dentro do input url e trazendo ele para uma variável, o .val serve para passagem de valores.
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        //Aplicando o display none para fazer com que tenha uma animação ao adiciona-la no evento abaixo
        const novoItem = $('<li style="display: none"></li>');
        //aqui estamos pegando o endereço informado e incluindo ele dentro do novoItem, o parâmetro appendTo fará a inserção dos dados entre o "<li>"
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        //Inserimos a div assim como foi com a imagem dentro do novo item
        $(`<div class="overlay-imagem-link">
            
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>

            </div>`).appendTo(novoItem);

            //Aqui inserimos o novo item dentro do ul para concluir a adição
            $(novoItem).appendTo('ul');

            //Criando a animação de fazer aparece a imagem ao adicionar.
            $(novoItem).fadeIn(1000);

            //Limpando o campo de endereço ao adicionar uma imagem.
            $('#endereco-imagem-nova').val('');
        
    })

})