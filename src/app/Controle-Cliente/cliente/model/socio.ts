import { Cliente } from "./cliente";
import { Depedente } from "./depedente";

export interface Socio extends Cliente{
    cpf: string;
    endereco: string;
    telefone: string;
    depedentes: Depedente[];
}