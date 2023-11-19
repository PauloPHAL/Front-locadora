import { Item } from "src/app/Controle-Acervo/item/model/item";
import { Cliente } from "../../cliente/model/cliente";

export interface Locacao{
    _id: string;
    dataLocacao: Date;
    dataDevolucaoPrevista: Date;
    dataDevolucaoEfetiva: Date;
    valorCobrado: string;
    valorMulta: string;
    cliente: Cliente;
    item: Item;
}