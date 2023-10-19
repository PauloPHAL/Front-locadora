import { Titulo } from "../../titulo/model/titulo";


export interface Item{
    _id: string;
    numSerie: string;
    dataAquisicao: Date;
    tipoItem: string;
    titulo: Titulo;
}