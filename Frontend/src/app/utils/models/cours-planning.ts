export class CoursPlanning {
	id:							number
	planning_id:				number
	course_id:					string
	complementary_course_id:	number
	date_start:					Date
	date_end:					Date
	public_price_affected:		number
	label:						string
	short_label:				string
	real_time_hour:				number
	expected_time_hour:			number
	date_to_be_defined:			boolean
	code_promotion:				string
	module_id:					number
	code_room:					string
	code_teacher:				number
	code_location:				number
}