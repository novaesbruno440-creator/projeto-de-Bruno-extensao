// Menu Hambúrguer

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Dados dos Postos

const postos = {
    itabuna: [
        {
            nome: "UBS Alberto Teixeira Barreto",
            bairro: "Califórnia",
            telefone: "(73) 3613-9553",
            horario: "07:00 às 17:00",
            fila: 24,
            servicos: [
                "Clínico Geral",
                "Vacinação",
                "Odontologia",
                "Farmácia Básica",
                "Pré-Natal"
            ]
        }
    ],

    itacare: [
        {
            nome: "Posto de Saúde Otto Alencar",
            bairro: "Centro",
            telefone: "(73) 3251-3533",
            horario: "07:00 às 17:00",
            fila: 12,
            servicos: [
                "Vacinação",
                "Curativos",
                "Enfermagem",
                "Consultas Médicas",
                "Acompanhamento Infantil"
            ]
        }
    ],

    coaraci: [
        {
            nome: "Centro de Saúde Ângelo Brito",
            bairro: "Centro",
            telefone: "(73) 3241-2580",
            horario: "07:00 às 17:00",
            fila: 18,
            servicos: [
                "Clínico Geral",
                "Especialidades",
                "Vacinação",
                "Farmácia",
                "Exames Básicos"
            ]
        }
    ]
};

// Elementos

const cidadeSelect = document.getElementById("cidade");
const postoSelect = document.getElementById("posto");

const nomePosto = document.getElementById("nomePosto");
const bairroPosto = document.getElementById("bairroPosto");
const telefonePosto = document.getElementById("telefonePosto");
const horarioPosto = document.getElementById("horarioPosto");
const filaPosto = document.getElementById("filaPosto");
const servicosPosto = document.getElementById("servicosPosto");

// Quando selecionar cidade

cidadeSelect.addEventListener("change", () => {

    const cidade = cidadeSelect.value;

    postoSelect.innerHTML =
        '<option value="">Selecione um posto</option>';

    limparInformacoes();

    if (!cidade) return;

    postos[cidade].forEach((posto, index) => {

        const option = document.createElement("option");

        option.value = index;
        option.textContent = posto.nome;

        postoSelect.appendChild(option);

    });

});

// Quando selecionar posto

postoSelect.addEventListener("change", () => {

    const cidade = cidadeSelect.value;
    const indice = postoSelect.value;

    if (indice === "") {
        limparInformacoes();
        return;
    }

    const posto = postos[cidade][indice];

    nomePosto.textContent = posto.nome;
    bairroPosto.textContent = posto.bairro;
    telefonePosto.textContent = posto.telefone;
    horarioPosto.textContent = posto.horario;
    filaPosto.textContent = `${posto.fila} pessoas`;

    servicosPosto.innerHTML = "";

    posto.servicos.forEach(servico => {

        const li = document.createElement("li");

        li.textContent = servico;

        servicosPosto.appendChild(li);

    });

});

// Limpar informações

function limparInformacoes() {

    nomePosto.textContent = "-";
    bairroPosto.textContent = "-";
    telefonePosto.textContent = "-";
    horarioPosto.textContent = "-";
    filaPosto.textContent = "-";

    servicosPosto.innerHTML =
        "<li>Selecione um posto</li>";
}

// Mensagens dos formulários

const formularios = document.querySelectorAll("form");

formularios.forEach(form => {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Informação enviada com sucesso! (Modo demonstração)");

        form.reset();

    });

});