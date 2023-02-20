/* eslint-disable */
export const show = (shown, hidden, hiddenToo) => {
	document.getElementById(shown).style.display = 'block';
	document.getElementById(hidden).style.display = 'none';
	document.getElementById(hiddenToo).style.display = 'none';
	return false;
};