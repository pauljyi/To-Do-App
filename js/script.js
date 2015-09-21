function updateHeader() {
	var newHeader=document.getElementById("textBox").value;
    var oldHeader=document.getElementById("header");
    oldHeader.innerHTML = newHeader;

	var newColor = "";
	var length = document.frmOne.choice.length;
	var i;

	for(i=0; i < length; i++)
		if (document.frmOne.choice[i].checked) {
			newColor = document.frmOne.choice[i].value;
			break;
		}

	document.getElementById("header").style.color = newColor;

}

function randomizer() {

	var bgNum = Math.round(Math.random() * 5)
	bgSel = new Array(6);
  bgSel[0] = "images/image1.jpg";
  bgSel[1] = "images/image2.jpg";
  bgSel[2] = "images/image3.jpg";
  bgSel[3] = "images/image4.jpg";
  bgSel[4] = "images/image5.jpg";
  bgSel[5] = "images/image6.jpg";
	var base = bgSel[bgNum];
	document.getElementById("body").style.backgroundImage  = "url("+ base +")";

	var fmNum = Math.round(Math.random() * 5)
	fmSel = new Array(6);
  fmSel[0] = "images/formbackground.jpg";
  fmSel[1] = "images/formback6.jpg";
  fmSel[2] = "images/formback3.jpg";
  fmSel[3] = "images/formback9.jpg";
  fmSel[4] = "images/formback8.jpg";
  fmSel[5] = "images/formback10.jpg";
	var back = fmSel[fmNum];
	document.getElementById("form").style.backgroundImage  = "url("+ back +")";

}
