var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `select id, usuario.nome as Nome,
    idPontuacao as Pontuacao, fkUsuario as Usuario, fkQuiz as Quiz,
    dataQuiz as Data, qtdAcertos as Certas, qtdErros as Erradas
    from usuario join pontuacao on fkUsuario = id
    join quiz on fkQuiz = idQuiz where usuario.id = ${idUsuario}
    order by dataQuiz desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, questionsCorrect, questionIncorrect) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    insert into pontuacao values (default, ${idUsuario}, 1, now(), ${questionsCorrect}, ${questionIncorrect}); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    cadastrar
}
