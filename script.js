//your code here
let clone = "";
let dragIndex = 0;
const drag = (e) => {
	e.dataTransfer.setData("text", e.target.id);
}

const allowDrop = (e) => {
	e.preventDefault();
}

const drop = (e) => {
	// e.preventDefault();
	// clone=e.target.cloneNode(true);
	// let data=e.dataTransfer.getData("text");
	
	// if(clone.id !== data){
	// 	let nodelist = document.getElementById("parent").childNodes;
	// 	for(let i = 0; i<nodelist.length; i++){
	// 		if(nodelist[i].id == data){
	// 			dragIndex = i;
	// 		}
	// 	}
	// 	//replace the drop img to dragged img
	// 	document.getElementById("parent").replaceChild(document.getElementById(data),e.target);

	// 	//swap
	// 	document.getElementById("parent").insertBefore(clone,document.getElementById("parent").childNodes[dragindex]);
	// }

	//--------
	e.preventDefault();
	clone=e.target.cloneNode(true);
	let data=e.dataTransfer.getData("text"); 
	if(clone.id !== data) {
		let nodelist=document.getElementById("parent").childNodes;
		for(let i=0;i<nodelist.length;i++)
		{
			if(nodelist[i].id==data)
			{
				dragindex=i;
			}

		}

		document.getElementById("parent").replaceChild(document.getElementById(data),e.target);
		
		document.getElementById("parent").insertBefore(clone,document.getElementById("parent").childNodes[dragindex]);
  }
}
