$('input#date').keyup(function(event) {
	var v = this.value;
	if (v.match(/^\d{2}$/) !== null) {
		this.value = v + '/';
	} else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
		this.value = v + '/';
	}
});
