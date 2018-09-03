import { Cours } from './cours';

export class Promotion
{
	CodePromotion: 		string
	Libelle: 			string
	Debut:				Date
	Fin:				Date
	CodeFormation:		string
	PrixPublicAffecte:	number
	PrixPECAffecte:		number
	PrixFinanceAffecte:	number
	Cours: 				Cours[];
}