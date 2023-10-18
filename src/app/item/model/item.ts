import { Titulo } from "src/app/titulo/model/titulo";

export interface Item{
    _id: string;
    numSerie: string;
    dataAquisicao: Date;
    tipoItem: string;
    titulo: Titulo;
}