// search
const searchInp = document.getElementById('headerSearch');
const searchbtn = document.querySelector('.searchbtn');
const inputTime = document.querySelector('.input-times');


if(searchInp.addEventListener) {
	searchInp.addEventListener('mouseup', searchBtnFun);
} else if(searchInp.attachEvent) {
	searchInp.attachEvent('onmouseup', searchBtnFun);
}
function searchBtnFun() {
	searchbtn.style.backgroundColor = '#178841';
	searchbtn.style.color = '#fff';
}


if(searchInp.addEventListener) {
	searchInp.addEventListener('keyup', searchInpFun);
} else if(searchInp.attachEvent) {
	searchInp.attachEvent('onkeyup', searchInpFun);
}
function searchInpFun() {
	const v = this.value;
	if(v.length > 0) {
		inputTime.style.display = 'block';
	} else {
		inputTime.style.display = 'none';
	}
}

if(inputTime.addEventListener) {
	inputTime.addEventListener('click', inputTimeFun);
} else if(inputTime.attachEvent) {
	inputTime.attachEvent('onclick', inputTimeFun);
}
function inputTimeFun() {
	searchInp.value = '';
	this.style.display = 'none';
}

// search engine
function autocomplete(inp, arr) {
	var currentFocus;

	if(inp.addEventListener) {
		inp.addEventListener('input', inputFun);
	} else if(inp.attachEvent) {
		inp.attachEvent('oninput', inputFun);
	}

	// execute a function when someone writes in the text field
	function inputFun(e) {
		var a, ul, li, b, i, val = this.value;
		closeAllLists();
		if(!val) {return false;}
		currentFocus = -1;
		a  = document.createElement('DIV');
		a.setAttribute('id', this.id + 'autocomplete-list');
		a.setAttribute('class', 'autocomplete-dropdownWrapper headerSearch-dropdownWrapper');
		this.parentNode.appendChild(a)
		ul = document.createElement('UL');
		ul.setAttribute('class', 'autocomplete-dropdown headerSearch-dropdown');
		a.appendChild(ul);
		var arrLen = arr.length;
		for(i = 0; i < arrLen; i++) {
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				li = document.createElement('LI');
				li.setAttribute('class', 'autocomplete-item headerSearch-autocompleteItem ng-star-inserted');
				li.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				li.innerHTML += arr[i].substr(val.length);
				li.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

				if(li.addEventListener) {
					li.addEventListener('click', liInputFun);
				} else if(li.attachEvent) {
					li.attachEvent('onclick', liInputFun);
				}

				function liInputFun(e) {
					inp.value = this.getElementsByTagName("input")[0].value;
					closeAllLists();
				}

				ul.appendChild(li);

			}
		}
	}

	// exceute a function presses a key on the keyborad
	if(inp.addEventListener) {
		inp.addEventListener('keyup', inpKeyFun);
	} else if(inp.attachEvent) {
		inp.attachEvent('onkeyup', inpKeyFun);
	}

	function inpKeyFun(e) {
		var x = document.getElementById(this.id + 'autocomplete-list');
		if(x) x = x.getElementsByTagName('li');
		if(e.keyCode == 40) {
			currentFocus++;
			addActive(x);
		} else if(e.keyCode == 38) {
			currentFocus--;
			addActive(x);
		} else if(e.keyCode == 13) {
			e.preventDefault();
			if(currentFocus > -1) {
				if(x) x[currentFocus].click();
			}
		}
	}


	function addActive(x) {
		if(!x) return false;
		removeActive(x);
		if(currentFocus >= x.length) currentFocus = 0;
		if(currentFocus < 0) currentFocus = (x.length -1);
		x[currentFocus].classList.add('autocomplete-active');
	}

	function removeActive(x) {
		for(var i = 0; i < x.length; i++) {
			x[i].classList.remove('autocomplete-active');
		}
	}

	// close all lists in the document, except the one passed as an agrument
	function closeAllLists(elmnt) {
		var xs = document.getElementsByClassName('autocomplete-dropdownWrapper');
		for(var i = 0; i < xs.length; i++) {
			if(elmnt != xs[i] && elmnt != inp) {
				xs[i].parentNode.removeChild(xs[i]);
			}
		}
	}
	// execute a function when someone clicks in the document
	if(document.addEventListener) {
		document.addEventListener('click', windowFun);
	} else if(document.attachEvent) {
		document.attachEvent('onclick', windowFun);
	}
	function windowFun(e) {
		closeAllLists(e.target);
	}
}


var foods = ["Chicken Burrito","Steak Burrito","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

autocomplete(document.getElementById('headerSearch'), foods);



// drawer
const orderSmrBtn = document.getElementById('orderSmrBtn');
const orderSmry = document.querySelector('.cart-checkout-summary__content');
const cartBtn = document.querySelector('.headerCheckout-orderHeader');
const cartDrawer = document.querySelector('.cart-drawer');
const closedrawer = document.getElementById('closeDrawer');
const masking = document.querySelector('.masking');
const cartBtnMobiel = document.querySelector('.cartBtn-mobile');

if(cartBtn.addEventListener) {
	cartBtn.addEventListener('click', drawerFun);
} else if(cartBtn.attachEvent) {
	cartBtn.attachEvent('onclick', drawerFun);
}

if(cartBtnMobiel.addEventListener) {
	cartBtnMobiel.addEventListener('click', drawerFun);
} else if(cartBtnMobiel.attachEvent) {
	cartBtnMobiel.attachEvent('onclick', drawerFun);
}
function drawerFun() {
	cartDrawer.classList.add('is_open');
	masking.classList.add('is_open');
}


if(closedrawer.addEventListener) {
	closedrawer.addEventListener('click', closeDrFun);
} else if(closedrawer.attachEvent) {
	closedrawer.attachEvent('onclick', closeDrFun);
}
function closeDrFun() {
	hideOrderSmry();
}


if(orderSmrBtn.addEventListener) {
	orderSmrBtn.addEventListener('click', orderSmFun);
} else if(orderSmrBtn.attachEvent) {
	orderSmrBtn.attachEvent('onclick', orderSmFun);
}

function orderSmFun() {
	orderSmry.classList.toggle('is-open');
	const ixicon = this.firstElementChild;
	if(ixicon.classList.contains('fa-angle-up')) {
		ixicon.classList.replace('fa-angle-up', 'fa-angle-down');
	} else {
		ixicon.classList.replace('fa-angle-down', 'fa-angle-up');
	}
}


window.onclick = function(e) {
	if(e.target == masking) {
		hideOrderSmry()
	}
}


function hideOrderSmry() {
	cartDrawer.classList.remove('is_open');
	masking.classList.remove('is_open');
	orderSmry.classList.remove('is-open');
}

// responsive
if (window.matchMedia("(max-width: 600px)").matches) {
	const formSearch = document.querySelector('.header_search');
	const mobileSearch = document.getElementById('mobileSearch');
	mobileSearch.appendChild(formSearch);
}

const researchbtn = document.querySelector('.responsive-searchbtn');
const resForm = document.querySelector('.headerSearch-searchWrapper-mobiles');

researchbtn.addEventListener('click', function() {
	resForm.classList.toggle('is_open');
	this.classList.toggle('is_open');
	searchInp.value = '';
});


document.onclick = function(e) {
	const xtar = e.target.id;
	if(xtar !== 'headerSearch' && xtar !== 'searchbtnM' && xtar !== 'searcIcon') {
		resForm.classList.remove('is_open')
	}
}