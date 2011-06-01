window.onload = function() {init()};
var count = 1;


function init() {
	alert(localStorage["1"]);
	var shipBox = document.getElementById("Ship1URL");
	shipBox.alt = "false";
	shipBox.addEventListener("focus", function() {addBox(shipBox.id);}, false);
	var submitButton = document.getElementById("SubmitButton");
	var ls = document.getElementById("ls");
	submitButton.addEventListener("click", function() {submitAll();}, false);
	ls.addEventListener("click", function() {ls();}, false);
	}

function addBox(boxid) {
	var box = document.getElementById(boxid);
	var boxes = document.getElementById("Boxes");
	if(box.alt == "false") {
		box.alt = "true"
		
		var newbox = document.createElement("input");
		var newboxtype = document.createAttribute("type");
		var newboxname = document.createAttribute("name");
		var newboxid = document.createAttribute("id");
		var newboxclass = document.createAttribute("class");
		var newboxalt = document.createAttribute("alt");
		
		newboxtype.nodeValue = "text";
		newboxname.nodeValue = "Ship"+(count+1)+"URL";
		newboxid.nodeValue = "Ship"+(count+1)+"URL";
		newboxclass.nodeValue = "TextBoxes";
		newboxalt.nodeValue = "false";	
		
		newbox.setAttributeNode(newboxtype);
		newbox.setAttributeNode(newboxname);
		newbox.setAttributeNode(newboxid);
		newbox.setAttributeNode(newboxclass);
		newbox.setAttributeNode(newboxalt);
		newbox.addEventListener("focus", function() {addBox(this.id);}, true);
		
		var arr = new Array();
		for(var i=0; i<boxes.childNodes.length; i++) {
			arr[arr.length] = boxes.childNodes[i].value;
		}
		boxes.innerHTML += "<br /><br />"
		boxes.innerHTML += "Ship "+(count+1)+" URL: "
		boxes.appendChild(newbox);
		for(var i=0; i<boxes.childNodes.length-1; i++) {
			boxes.childNodes[i].value = arr[i];
		}
		document.body.scrollTop = document.body.scrollHeight;
		count++;
		document.getElementById(boxid).focus();
	}
}

function submitAll() {
	var shipArray = new Array();
	boxes = document.getElementsByClassName("TextBoxes");
	for (i=0;i<=boxes.length-1;i++) {
		if(boxes[i]) {
			shipArray.push(boxes[i].value);
		}
	}
	localStorage["test"] = "Hey";
}

function ls() {
	alert(localStorage["test"]);
}