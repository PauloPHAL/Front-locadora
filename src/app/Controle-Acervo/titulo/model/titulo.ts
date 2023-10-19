import { Ator } from "../../ator/model/ator";
import { Classe } from "../../classe/model/classe";
import { Diretor } from "../../diretor/model/diretor";
import { Item } from "../../item/model/item";


export interface Titulo{
    _id: string;
    nome: string;
    ano: string;
    sinopse: string;
    categoria: string;
    atores: Ator[];
    classe: Classe;
    diretor: Diretor;
    itens: Item[];
}