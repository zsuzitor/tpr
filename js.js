//северо западного угла
//циклическая перестановка
//метод наименьшей стоимости
//метод потенциалов

//TODO read_matrix_cell set_matrix_cell и тд добавил type для блоков потенциалов и А Б которые отдельными блоками и матрицами
//add_one_cell_ui
//1--обычная ячейка  2--А Б(путь и тд по краям уровень 1)   3-- потенциалы
//200 строка остановился
//
var column=0;//4
var row=4;


var matrix=[];
var matrix_a_row=[];//края
var matrix_a_column=[];
var matrix_b_row=[];//потенциалы
var matrix_b_column=[];
//TODO кнопки: очистить


//TODO


class one_block_matrix {
 constructor(price_,count_,count_2){
this.price=price_;
this.count=count_;
this.count2=count_2;

 }


}

//старт страницы и начало работы
function page_start(){

for(var i=0;i<4;++i){
add_column_f();

}
//перестройка схемы ui()
function reload_ui(){
	var div=document.getElementById("main_div_tabl");
	div.innerHTML="";
for(var i=0;i<column;++i){
add_column_f();

}
}


}
//из существующей ячейке значения заносятся в js
function set_matrix_cell(row_,column_,price_,count_,count2_,type){

	switch(type){
		case 1:
		//обычная ячейка
		break;
		case 2:
		//1 уровень по краям
		break;
		case 3:
		//потенциалы
		break;
	}
	if(price_===null){
		var div=document.getElementById("one_input_id"+row_+"_"+column_);
matrix[row_][column_].price=div.value===""?null:div.value;
	}
	//TODO
	matrix[row_][column_].count=+count_;
	matrix[row_][column_].count2=+count2_;

}
//заносит цену сразу в UI в созданный див
function read_matrix_cell(row_,column_,price_,count_,count2_,type){


	switch(type){
		case 1:
		//обычная ячейка
		break;
		case 2:
		//1 уровень по краям
		break;
		case 3:
		//потенциалы
		break;
	}


var div=document.getElementById("one_input_id"+row_+"_"+column_);
div.value=matrix[row_][column_].price;
//TODO по аналогии абратно
//matrix[row_][column_].count=count_;
	//matrix[row_][column_].count2=count2_;

}
//внесение данных из ui в js
function save_matr(){
	//TODO сохранять еще и уровни+потенциалы
for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){
		//TODO заполнять и остальные поля

set_matrix_cell(i,i2,null,null,null);
	}
}	
}
//добавление в созданную ячейку значений в ui
function load_matr(){
	//TODO загружать еще и уровни+потенциалы
for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){
		//TODO заполнять и остальные поля
read_matrix_cell(i,i2,null,null,null);

	}
}


}

//добавить строку
function add_row_f(){
for(var i=0;i<column;++i){
	//обычне ячейки
	var div=document.getElementById("one_column_id"+i);
div.innerHTML+=add_one_cell_ui(row,i,1);//"<input class='input_block' id='one_input_id"+row+"_"+i+"' type='text' type='number'>";
if(matrix[row]==undefined)
	matrix[row]=[];
matrix[row][i]=new one_block_matrix(null,null,null);

}

//уровень 1

var lvl1=document.getElementById("a_column_id");
//lvl1.innerHTML+=add_one_cell_uiadd_one_cell_ui(row,i,2);

//потенциалы
var lvl2=document.getElementById("b_column_id");
//lvl2.innerHTML+=add_one_cell_uiadd_one_cell_ui(row,i,2);

row++;
}
//отрисовка 1 ячейки с данными
function add_one_cell_ui(row_,column_,type){
	var res="";
	if(type==1){
res="<div  class='input_block' id='input_block_id"+row_+"_"+column_+"'>";
res+="<label class='div_inline_block one_output' id='one_output_1_id"+row_+"_"+column_+"'></label>";
res+="<label  class='div_inline_block one_output' id='one_output_2_id"+row_+"_"+column_+"'></label>";
res+="<div class='one_input_div'>";
res+="<input  id='one_input_id"+row_+"_"+column_+"' type='number' type='number'>";
res+="</div></div>";
	}
	else{
		//TODO
		res="";
	}

//"<input class='input_block' id='one_input_id"+i+"_"+column+"' type='text' type='number'>";
return res;
}

//добавить столбец
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
//уровень 1

var lvl1=document.getElementById("a_row_id");
//lvl1.innerHTML+=add_one_cell_uiadd_one_cell_ui(row,i,2);

//потенциалы
var lvl2=document.getElementById("b_row_id");
//lvl2.innerHTML+=add_one_cell_uiadd_one_cell_ui(row,i,2);

}


//кнопка удалить строку
function del_row(){
	row--;
for(var i=0;i<column;++i){
	
	var div=document.getElementById("input_block_id"+row+"_"+i);
div.remove();
matrix.splice(row,1);

}


}

//кнопка удалить столбец
function del_column(){
	var div=document.getElementById("one_column_id"+(column-1));
	div.remove();
	column--;
for(var i=0;i<column;++i){

	matrix[i].splice(column,1);
}


}
//кнопка добавить столбец
function add_column(){
	save_matr();
	add_column_f();
	load_matr();
}
//кнопка добавить строку
function add_row(){
	save_matr();
	add_row_f();
	load_matr();

}
//очистить все кроме цены в коде
function not_full_clear_matrix(){
	for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){
		//TODO заполнять и остальные поля
set_matrix_cell(i,i2,matrix[i][i2].price,null,null);

	}
}
}
//functions подсчета северозаподного угла
function deg(){
	
var mass_row=matrix_a_row.slice(0,matrix_a_row.length-1);
var mass_column=matrix_a_column.slice(0,matrix_a_column.length-1);
var i2=0;
var tmp=0;
 not_full_clear_matrix();
	for(var i=0;i<column;++i){
		
		//for(var i2=0;i2<column;++i2){
			while(true){
				if(mass_row[i]>mass_column[i2]){
				tmp=mass_column[i2];
				
			}
			else{
				tmp=mass_row[i];
			}
			mass_row[i]-=-tmp;
				mass_column[i2]-=tmp;
				matrix[i][i2].count=tmp;
if(mass_row[i]!=0){
i2++;
}
else
break;
			}

	set_matrix_cell(i,i2,matrix[i][i2].price,tmp,null);

	//}
	}
}


//метод наименьше стоимости
function small_price(){
var mass_row=matrix_a_row.slice(0,matrix_a_row.length-1);
var mass_column=matrix_a_column.slice(0,matrix_a_column.length-1);
var mass_price_=[];
var mass_price=[];
for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){

		mass_price_.push(matrix[i][i2]);
	}
}
for(var i=0;i<mass_price_.length-1;++i){
if(mass_price_.count(mass_price_[i])>1){
//mass_price.splice(i,1);
if(mass_price.count(mass_price_[i])===0){
	mass_price.push(mass_price_[i]);
}
}
else{
mass_price.push(mass_price_[i]);
}

}
mass_price.sort((a, b) =>{
  if (a > b) return 1;
  if (a < b) return -1;
});


for(var item=0;item<mass_price.length;++item){
	for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){
		if(matrix[i][i2].price===mass_price[item]){
//TODO
var tmp=0;
if(mass_row[i]!==0&&mass_column[i2]!==0)
if(mass_row[i]>mass_column[i2]){
				tmp=mass_column[i2];
				
			}
			else{
				tmp=mass_row[i];
			}
			mass_row[i]-=-tmp;
				mass_column[i2]-=tmp;
				matrix[i][i2].count=tmp;
		}
		
		
	

	}
}
}



}




//






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
								num= i*j+j;
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
				alert(str);
				pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(str));
				pom.setAttribute('download', 'example.txt');
				pom.click();
			}
		