import { Cours } from './cours';

export class Promotion
{
	codePromotion: 		string
	libelle: 			string
	debut:				Date
	fin:				Date
	codeFormation:		string
	prixPublicAffecte:	number
	prixPECAffecte:		number
	prixFinanceAffecte:	number
	cours: 				Cours[];
}