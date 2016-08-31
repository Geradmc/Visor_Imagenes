var image = new Array("img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg",
"img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg","img/18.jpg","img/19.jpg","img/20.jpg");
var dimensionx= new Array(1920,1920,1920,1440,1920,1920,1920,1920,2560,900,
						  2560,1920,1920,1920,1920,1680,1680,1680,2560,2500);
var dimensiony= new Array(1200,1200,1080,900,1200,1769,1080,1080,1440,900,
						  1600,1200,1080,1200,1200,1050,1050,1050,1600,928);
var numDivs=2;
var divInicial=1;
var numImages=20;
var indice=0;

function cambioIz(){
	var divUno=document.getElementById("uno");
	var divDos=document.getElementById("dos");
		divInicial--;
		if(divInicial<1){
			divInicial++;
		}
		divUno.style.display="block";
		divDos.style.display="none";
}

function cambioDer(){
	var divUno=document.getElementById("uno");
	var divDos=document.getElementById("dos");
		divInicial++;
		if(divInicial>numDivs){
			divInicial--;
		}
		divUno.style.display="none";
		divDos.style.display="block";
}
function redimensionMiniaturas(num){
	//var EW=document.getElementById("a"+num).width;
	var EH=document.getElementById("a"+num).height;
	/*var err=0.0001;
	if(EW>79 || EH>79){
		while(EW>=79 || EH>=79){
			EW=EW-EW*err;
			EH=EH-EH*err;
		}
	} else if(EW<79 || EH<79){
		while(EW<=79 && EH<=79){
			EW=EW+EW*err;
			EH=EH+EH*err;
		}
	}*/
	var top=(79-EH)/2;
	document.getElementById("a"+num).style.top=top+"px";
	//document.getElementById("a"+num).width=Math.round(EW);
	//document.getElementById("a"+num).height=Math.round(EH);
}

function redimensionIni(ancho, alto){
	var EW=dimensionx[indice];
	var EH=dimensiony[indice];
	var err=0.0001;
	if(EW>ancho || EH>alto){
		while(EW>=ancho || EH>=alto){
			EW=EW-EW*err;
			EH=EH-EH*err;
		}
	} else if(EW<ancho || EH<alto){
		while(EW<=ancho && EH<=alto){
			EW=EW+EW*err;
			EH=EH+EH*err;
		}
	}
	var top=(alto-EH)/2;		
	document.getElementById("image").style.top=top+"px";
	document.getElementById("image").width=Math.round(EW);
	document.getElementById("image").height=Math.round(EH);
}

function redimension(ancho, alto){
	var EW=dimensionx[indice];
	var EH=dimensiony[indice];
	var err=0.0001;
	if(EW>ancho || EH>alto){
		while(EW>=ancho || EH>=alto){
			EW=EW-EW*err;
			EH=EH-EH*err;
		}
	} else if(EW<ancho || EH<alto){
		while(EW<=ancho && EH<=alto){
			EW=EW+EW*err;
			EH=EH+EH*err;
		}
	}
	var top=(alto-EH)/2;
	var valores=new Array(EW,EH,top);
	return valores; 
}
			
function cambioDerecha(){
	var imag=document.getElementById("image");
	imag.style.display="none";
	indice++;
	if(indice==numImages){
		indice=0;
		cambioIz();
	}
	if((indice+1)*divInicial==11){
		cambioDer();	
	}
	imag.src=image[indice];
	var valores=redimension(960,500);
	imag.style.top=valores[2]+"px";
	imag.width=Math.round(valores[0]);
	imag.height=Math.round(valores[1]);
	window.setTimeout('visible();',5);
}

function cambioIzquierda(){
	var imag=document.getElementById("image");
	imag.style.display="none";
	indice--;
	if(indice<0){
		indice=numImages-1;
		cambioDer();
	}
	if((indice+1)*divInicial==20){
		cambioIz();
	}
	imag.src=image[indice];
	var valores=redimension(960,500);
	imag.style.top=valores[2]+"px";
	imag.width=Math.round(valores[0]);
	imag.height=Math.round(valores[1]);
	window.setTimeout('visible();',5);
}

function visible(){
	document.getElementById("image").style.display="block";
	for(var i=1; i<numImages+1; i++){
		if(i!=(indice+1)){
			document.getElementById("a"+i).style.border="4px inset #0F8";
		}
	}
	var j=indice+1;
	document.getElementById("a"+j).style.border="4px outset #FF8";
}

function mifoto(num) {
	var imag=document.getElementById("image");
	imag.style.display="none";
	indice=num-1;
	imag.src=image[indice];
	var valores=redimension(960,500);
	imag.style.top=valores[2]+"px";
	imag.width=Math.round(valores[0]);
	imag.height=Math.round(valores[1]);
	window.setTimeout('visible();',5);
 	//mititulo.innerHTML=t; //cambiar pie de foto
}

function inicializar(){
	redimensionIni(960,500);
	for(var i=1; i<numImages+1; i++){
		redimensionMiniaturas(i);
	}
}
