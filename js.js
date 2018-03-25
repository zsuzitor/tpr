

var column=0;//4
var row=4;

var matrix=[][];
//TODO кнопки: очистить
//в ячейке еще 2 поля
//работа с файлами
//матрица

class one_block_matrix {
 constructor(price_,count_,count_2){
this.price=price_;
this.count=count_;
this.count2=count_2;

 }

//var a=()=>{}
}


function page_start(){
	//console.log("sdf");
	
//main_div.innerHTML="";
var res="";
for(var i=0;i<4;++i){
add_column_f();

}



}

function save_matr(){



}


function add_row_f(){
for(var i=0;i<column;++i){
	var div=document.getElementById("one_column_id"+i);
div.innerHTML+="<input class='input_block' id='one_input_id"+row+"_"+i+"' type='text' type='number'>";

}

row++;
}

function add_column_f(){
var res="";
var main_div=document.getElementById("main_div_tabl");
res+="<div class='div_inline_block div_one_colum' id='one_column_id"+column+"''>";

for(var i=0;i<row;++i){
	res+="<input class='input_block' id='one_input_id"+i+"_"+column+"' type='text' type='number'>";
	matrix[i][column]=new one_block_matrix(null,null,null);
}


res+="</div>";
column++;
main_div.innerHTML+=res;

}

function del_row(){
	row--;
for(var i=0;i<column;++i){
	
	var div=document.getElementById("one_input_id"+row+"_"+i);
div.remove();
matrix.splice(row,1);

}


}


function del_column(){
	var div=document.getElementById("one_column_id"+(column-1));
	div.remove();
	column--;
for(var i=0;i<column;++i){

	matrix[i].splice(column,1);
}


}
function add_column(){
	add_column_f();
}
function add_row(){
	add_row_f();

}















document.addEventListener("DOMContentLoaded", page_start);


//править

function loadFile(files) {
				var file = files[0];
				if(file) {
					var reader = new FileReader();
					reader.onload = function (e) {  
						var text = e.target.result;
						var arr = text.split(',');
						document.getElementById('method').selectedIndex = arr[0];
						addTable(arr[1],arr[2]);
						changeInput();
						for(var i=0; i<arr[1]; i++) {
							for(var j=0; j<arr[2]; j++) {
								document.getElementById('elem_'+i+'_'+j+'').value=arr[i*arr[2]+j+3];
							}
						}
						var select=document.getElementById('method');
						var value = select.options[select.selectedIndex].value;
						switch (value) {
							case 'minimax':
								break;
							case 'bayes_laplas':
								for(var i=0; i<arr[2]; i++) {
									document.getElementById('q_'+(i+1)).value=arr[arr[1]*arr[2]+3+i];
								}
								break;
							case 'sevidg':
								break;
							case 'gurvits':
								document.getElementById('c').value=arr[arr[1]*arr[2]+3];
								break;
							case 'hodg_lemon':
								document.getElementById('v').value=arr[arr[1]*arr[2]+3];
								for(var i=0; i<arr[2]; i++) {
									document.getElementById('q_'+(i+1)).value=arr[arr[1]*arr[2]+4+i];
								}
								break;
							case 'germeyer':
								document.getElementById('a').value=arr[arr[1]*arr[2]+3];
								for(var i=0; i<arr[2]; i++) {
									document.getElementById('q_'+(i+1)).value=arr[arr[1]*arr[2]+4+i];
								}
								break;
							case 'proizvedenie':
								document.getElementById('a').value=arr[arr[1]*arr[2]+3];
								break;
							case 'bayes':
								break;
							default:
								alert('Unknown method');
						}
					};
					reader.readAsText(file);
				}
			}


			function saveFile() {
				var matrix=getMatrix();
				var select=document.getElementById('method');
				var value = select.options[select.selectedIndex].value;
				var str=String(document.getElementById('method').selectedIndex);
				switch (value) {
					case 'minimax':
						var str=str[0]+','+String(matrix.length)+','+String(matrix[0].length)+','+matrix.toString();
						break;
					case 'bayes_laplas':
						var q = [];
						for(var i=0; i<matrix[0].length; i++) {
							q[i]=document.getElementById('q_'+(i+1)).value;
						}
						var str=str[0]+','+String(matrix.length)+','+String(matrix[0].length)+','+matrix.toString()+','+q.toString();
						break;
					case 'sevidg':
						var str=str[0]+','+String(matrix.length)+','+String(matrix[0].length)+','+matrix.toString();
						break;
					case 'gurvits':
						var str=str[0]+','+String(matrix.length)+','+String(matrix[0].length)+','+matrix.toString()+','+document.getElementById('c').value;
						break;
					case 'hodg_lemon':
						var q = [];
						for(var i=0; i<matrix[0].length; i++) {
							q[i]=document.getElementById('q_'+(i+1)).value;
						}
						var str=str[0]+','+String(matrix.length)+','+String(matrix[0].length)+','+matrix.toString()+','+document.getElementById('v').value+','+q.toString();
						break;
					case 'germeyer':
						var q = [];
						for(var i=0; i<matrix[0].length; i++) {
							q[i]=document.getElementById('q_'+(i+1)).value;
						}
						var str=str[0]+','+String(matrix.length)+','+String(matrix[0].length)+','+matrix.toString()+','+document.getElementById('a').value+','+q.toString();
						break;
					case 'proizvedenie':
						var str=str[0]+','+String(matrix.length)+','+String(matrix[0].length)+','+matrix.toString()+','+document.getElementById('a').value;
						break;
					case 'bayes':
						var str=str[0]+','+String(matrix.length)+','+String(matrix[0].length)+','+matrix.toString();
						break;
					default:
						alert('Unknown method');
				}
				var pom=document.createElement('a');
				pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(str));
				pom.setAttribute('download', 'example.txt');
				pom.click();
			}