import { Ator } from "src/app/ator/model/ator";
import { Classe } from "src/app/classe/model/classe";
import { Diretor } from "src/app/diretor/model/diretor";
import { Item } from "src/app/item/model/item";

export interface Titulo{
    _id: string;
    nome: string;
    ano: string;
    sinopse: string;
    categoria: string;
    ator: Ator[];
    classe: Classe;
    diretor: Diretor;
    itens: Item[];
}