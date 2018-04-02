

var column=0;//4
var row=4;


var matrix=[];
var matrix_a_row=[];//края
var matrix_a_column=[];
var matrix_b_row=[];//потенциалы
var matrix_b_column=[];
//TODO кнопки: очистить
//в ячейке еще 2 поля
//работа с файлами
//матрица

//TODO
//добавление строки не работает
//добавление столбца не правильно

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
//var res="";
for(var i=0;i<4;++i){
add_column_f();

}
function reload_ui{
	var div=document.getElementById("main_div_tabl");
	div.innerHTML="";
for(var i=0;i<column;++i){
add_column_f();

}
}


}
function set_matrix_cell(row_,column_,price_,count_,count2_){
	if(price_===null){
		var div=document.getElementById("one_input_id"+row_+"_"+column_);
matrix[row_][column_].price=div.value===""?null:div.value;
	}
	//TODO
	matrix[row_][column_].count=+count_;
	matrix[row_][column_].count2=+count2_;

}
//заносит сразу в UI
function read_matrix_cell(row_,column_,price_,count_,count2_){

var div=document.getElementById("one_input_id"+row_+"_"+column_);
div.value=matrix[row_][column_].price;
//TODO по аналогии абратно
//matrix[row_][column_].count=count_;
	//matrix[row_][column_].count2=count2_;

}
function save_matr(){
for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){
		//TODO заполнять и остальные поля

set_matrix_cell(i,i2,null,null,null);
	}
}	
}
function load_matr(){
for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){
		//TODO заполнять и остальные поля
read_matrix_cell(i,i2,null,null,null);

	}
}


}


function add_row_f(){
for(var i=0;i<column;++i){
	var div=document.getElementById("one_column_id"+i);
div.innerHTML+=add_one_cell_ui(row,i);//"<input class='input_block' id='one_input_id"+row+"_"+i+"' type='text' type='number'>";
if(matrix[row]==undefined)
	matrix[row]=[];
matrix[row][i]=new one_block_matrix(null,null,null);
}

row++;
}

function add_one_cell_ui(row_,column_){
var res="<div  class='input_block' id='input_block_id"+row_+"_"+column_+"'>";
res+="<label class='div_inline_block one_output' id='one_output_1_id"+row_+"_"+column_+"'></label>";
res+="<label  class='div_inline_block one_output' id='one_output_2_id"+row_+"_"+column_+"'></label>";
res+="<div class='one_input_div'>";
res+="<input  id='one_input_id"+row_+"_"+column_+"' type='number' type='number'>";
res+="</div></div>";
//"<input class='input_block' id='one_input_id"+i+"_"+column+"' type='text' type='number'>";
return res;
}

function add_column_f(){
var res="";
var main_div=document.getElementById("main_div_tabl");
res+="<div class='div_inline_block div_one_colum' id='one_column_id"+column+"''>";

for(var i=0;i<row;++i){
	res+=add_one_cell_ui(i,column);
	if(matrix[i]==undefined)
	matrix[i]=[];
	matrix[i][column]=new one_block_matrix(null,null,null);
}


res+="</div>";
column++;
main_div.innerHTML+=res;

}

function del_row(){
	row--;
for(var i=0;i<column;++i){
	
	var div=document.getElementById("input_block_id"+row+"_"+i);
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
	save_matr();
	add_column_f();
	load_matr();
}
function add_row(){
	save_matr();
	add_row_f();
	load_matr();

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
						row=arr[0];
						column=arr[1];
						arr.splice(0,2);
						var num=0;
						for(var i=0; i<row; i++) {
							for(var j=0; j<column; j++) {
								num= i*j+j];
								matrix[i][j]=+arr[num];
							}
						}
						num++;
						for(var i=0;i<row;++i,++num){
matrix_a_row[i]=+ arr[num];
						}
						for(var i=0;i<column;++i,++num){
matrix_a_column[i]=+ arr[num];
						}
						for(var i=0;i<row&&num<arr.length;++i,++num){
matrix_b_row[i]=+ arr[num];
						}
						for(var i=0;i<column&&num<arr.length;++i,++num){
matrix_b_column[i]=+ arr[num];
						}
						//ОТРИСОВАТЬ UI
						reload_ui();
						load_matr();
						//matrix[i].splice(column,1);
					};
					reader.readAsText(file);
				}
			}


			function saveFile() {
				//3 пункта 
				//1- размерность, сама матрица
				//без размерности тк /2
				//2- крайние куски
				//3- потенциалы

//размерность ->матрица->границы->потенциалы
				
				var str=""+row+","+column+",";

				//var num=0;
				for(var i=0; i<row; i++) {
							for(var j=0; j<column; j++) {
								//num= i*j+j];
								str+=matrix[i][j]+",";
							}
						}
for(var i=0;i<matrix_a_row.length;++i){
	str+=matrix_a_row[i]+",";

						}
						for(var i=0;i<matrix_a_column.length;++i){
	str+=matrix_a_column[i]+",";

						}
						if(matrix_b_row.length>0&&matrix_b_column.length>0){
							for(var i=0;i<row;++i){
								str+=matrix_b_row[i]+",";

						}
						for(var i=0;i<column;++i){
							str+=matrix_b_column[i]+",";

						}
						}
						str[str.length-1]="";

				//сохранение файла
				var pom=document.createElement('a');
				pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(str));
				pom.setAttribute('download', 'example.txt');
				pom.click();
			}
		