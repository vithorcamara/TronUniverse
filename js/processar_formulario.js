// Não sei manipular AJAX e JQuery porém consigo entender a sintaxe, pedaço de programa retirado do Chat GPT

$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();

        var nome = $('#nome').val();
        var email = $('#email').val();
        var senha = $('#senha').val();
        var interesses = $('#interesses').val();

        // Aqui você pode fazer o processamento dos dados, como enviar uma requisição AJAX

        // Exemplo de requisição AJAX para enviar os dados ao servidor
        $.ajax({
            url: '/processar_formulario',
            type: 'POST',
            data: {
                nome: nome,
                email: email,
                senha: senha,
                interesses: interesses
            },
            success: function(response) {
                // Sucesso: exibir mensagem ou redirecionar para outra página
                alert('Formulário enviado com sucesso!');
                $('form')[0].reset(); // Limpar o formulário
            },
            error: function(xhr, status, error) {
                // Erro: exibir mensagem de erro
                alert('Ocorreu um erro ao enviar o formulário.');
            }
        });
    });
});
