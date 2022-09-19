import {Bolo} from './Bolo';

import PromptSync = require('prompt-sync');
const prompt = PromptSync();

const tamanho = Number(prompt('Digite o tamanho do bolo: '));
const sabor = prompt('Digite o sabor do bolo: ');
const formato = prompt('Digite o formato do bolo: ');
const recheio = prompt('Digite o recheio do bolo: ');
const cobertura = prompt('Digite a cobertura do bolo: ');
const valor = Number(prompt('Digite o valor do bolo: '));
const fatias = Number(prompt('Digite a quantidade de fatias do bolo: '));


const bolo: Bolo = new Bolo({
    tamanho,
    sabor,
    formato,
    recheio,
    cobertura,
    valor
});

bolo.fatiar(fatias);
console.log(`\nBolo de ${sabor} com recheio de ${recheio}: R$ ${valor} e ainda restam ${bolo.fatias}`);