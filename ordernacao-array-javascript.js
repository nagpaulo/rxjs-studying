//Somente Javascript (Reduce e Filter)
const pessoas = [
    { nome: 'João', sexo: 'masculino', idade: 18 },
    { nome: 'José', sexo: 'masculino', idade: 32 },
    { nome: 'Maria', sexo: 'feminino', idade: 11 },
    { nome: 'Julia', sexo: 'feminino', idade: 23 },
    { nome: 'Nágila', sexo: 'feminino', idade: 15 },
];

const MaioresAgrupadosPorGeneroSemRxjs = pessoas =>
    pessoas
        .filter(e => e.idade >= 18)
        .reduce((a, b) => ({
            ...a,
            [b.sexo]: [...(a[b.sexo] || []), b]
        }), {});

MaioresAgrupadosPorGeneroSemRxjs(pessoas);
