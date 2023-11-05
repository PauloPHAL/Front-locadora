import { Cliente } from "./cliente";
import { Socio } from "./socio";

export interface Depedente extends Cliente{
    socio: Socio;
}