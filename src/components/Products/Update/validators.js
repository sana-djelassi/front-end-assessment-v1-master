
import moment from 'moment'
export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}

export const isExperationDate = (value)=> {
	return moment(value).format('YYYY-MM-DD')>= moment().add(30, 'days').format('YYYY-MM-DD')
}