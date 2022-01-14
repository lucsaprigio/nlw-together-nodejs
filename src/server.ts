import express from 'express';

const app = express();

/* 
* GET => Buscar uma informação dentro da API
* POST => Adicionar/inserir uma informação dentro da API
* PUT => Alterar uma informação dentro da API
* DELETE => Deletar uma informação.
* PATCH => Alterar uma informação específica (Somente a senha exemplo)
*/

app.get('/test', (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send('Olá NLW');

});

app.post('/test-post', (request, response) => {
    return response.send('Olá NLW método post')
});

app.listen(3000, () => 
    console.log("Server is running  🚀"
))