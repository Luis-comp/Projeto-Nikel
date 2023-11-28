const nome = "Luis Eduardo";
let nome2 = "";
let pessoaDefault = {
    nome: "Luis Eduardo",
    idade: "25",
    trbalho: "Programador"
}

let nomes = ["Marcelo", "Maria", "pedro"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Luis Eduardo",
        idade: "25",
        trbalhp: "Programador"
    },
    {
        nome: "Eduardo",
        idade: "20",
        trbalhp: "UX/UI Designer"
    }
];


function alterarNome() {
    nome2 = "Maria Silva"
    console.log("valor alterado;")
    console.log(nome2);
}

function recebeEalteraNome (novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log("Nome:");
    console.log("pessoa.nome");
    
    console.log("Idade:");
    console.log("pessoa.idade");
    
    console.log("Trabalho:");
    console.log("pessoa.trabalho");
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("---------IMPRIMIR PESSOA------")
    pessoas.forEach((item) => {
        console.log("nome:")
        console.log(item.nome);

        console.log("Idade:");
        console.log("item.idade");
        
        console.log("Trabalho:");
        console.log("item.trabalho");
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();



//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//         nome: "Eduardo",
//         idade: "20",
//         trbalhp: "UX/UI Designer"
//     });

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("maria Silva");

//alterarNome();