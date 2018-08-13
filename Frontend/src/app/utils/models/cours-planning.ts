export class CoursPlanning {
	id:							number
	planning_id:				number
	course_id:					string
	complementary_course_id:	number
	start:						Date
	end:						Date
	public_price_affected:		number
	label_course:				string
	real_time_hour:				number
	expected_time_hour:			number
	date_to_be_define:			boolean
	code_promotion:				string
	module_id:					number
	code_room:					string
	code_teacher:				number
	code_location:				number
	
	/*
	dureeReeleEnHeures:			number
	codePromotion:				string
	prixPublicAffecte:			number
	idModule:					number
	libelleCours:				string
	dureePrevueEnHeures:		number
	dateADefinir:				boolean
	codeSalle:					string
	codeFormateur:				number
	codeLieu:					number
	*/
}