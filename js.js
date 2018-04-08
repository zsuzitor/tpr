//северо западного угла
//циклическая перестановка
//метод наименьшей стоимости
//метод потенциалов

//TODO read_matrix_cell set_matrix_cell и тд добавил type для блоков потенциалов и А Б которые отдельными блоками и матрицами
//add_one_cell_ui
//1--обычная ячейка  2--А Б(путь и тд по краям уровень 1)   3-- потенциалы
//200 строка остановился
//

//ВЫВОДИТЬ Z
var column=0;//4
var row=4;


var matrix=[];
var matrix_a_row=[];//края
var matrix_a_column=[];
var matrix_b_row=[];//потенциалы
var matrix_b_column=[];
//TODO кнопки: очистить


//TODO
//+set_matrix_cell
//+save_matr
//+load_matr
//+add_row_f+ add_col_f добавлять УРОВНИ еще и в матрицу
class one_block_matrix {
	constructor(price_,count_,count_2){
		this.price=price_;
		this.count=count_;
		this.count2=count_2;

	}


}

//старт страницы и начало работы
function page_start(){


	column=4;
	reload_ui(false);
	load_matr();
}
//создание пустой схемы ui по размерам() при ui=false стирает матрицу и создает заного пустую(только центральную матрицу)
function reload_ui(UI){
	var div=document.getElementById("main_div_tabl");
	document.getElementById("a_column_id").innerHTML="";
	document.getElementById("b_column_id").innerHTML="";
	document.getElementById("a_row_id").innerHTML="";
	document.getElementById("b_row_id").innerHTML="";
	div.innerHTML="";
	var tmp=column;
	column=0;
	for(var i=0;i<tmp;++i){
		add_column_f(UI);

	}
	for(var i=0;i<row;++i){

		var lvl1=document.getElementById("a_column_id");

		lvl1.innerHTML+=add_one_cell_ui(i,null,2);
		if(matrix_a_column[i]==undefined)
			matrix_a_column[i]=0;
		//set_matrix_cell(null,i,)

//потенциалы

var lvl2=document.getElementById("b_column_id");
lvl2.innerHTML+=add_one_cell_ui(i,null,3);
if(matrix_b_column[i]==undefined)
	matrix_b_column[i]=0;
}
}



//из существующей ячейке значения заносятся в js
function set_matrix_cell(row_,column_,price_,count_,count2_,type){

	switch(type){
		case 1:
		//обычная ячейка
		if(price_===null){
			var div=document.getElementById("one_input_id"+row_+"_"+column_);
			matrix[row_][column_].price=+ (div.value===""?null:div.value);
		}
		else{
			matrix[row_][column_].price=+price_;
		}
	//TODO
	matrix[row_][column_].count=+count_;
	matrix[row_][column_].count2=+count2_;
	break;
	case 2:
		//1 уровень по краям
//one_input_a_row_id"+column_"

if(row_==null||row_==undefined){
	var div=document.getElementById("one_input_a_row_id"+column_);
	matrix_a_row[column_]=+div.value;

}
else{
	var div=document.getElementById("one_input_a_col_id"+row_);
	matrix_a_column[row_]=+div.value;
}

break;
case 3:
		//потенциалы
		

		if(row_==null||row_==undefined){
			if(price_==null||row_==undefined){
				var div=document.getElementById("one_input_b_row_id"+column_);
				matrix_b_row[column_]=+div.value;
			}
			else{
				matrix_b_row[column_]=+price_;
			}


		}

		
		else{
			if(price_==null||row_==undefined){
				var div=document.getElementById("one_input_b_col_id"+row_);
				matrix_b_column[row_]=+div.value;
			}
			else{
				
				matrix_b_column[row_]==+price_;
			}
			
		}
		break;
		default:
		alert("Ошибка в свиче 3");
		break;
	}
	

}
//заносит цену сразу в UI в созданный див
function read_matrix_cell(row_,column_,type){


	switch(type){
		case 1:
		//обычная ячейка
		var div=document.getElementById("one_input_id"+row_+"_"+column_);
		div.value=matrix[row_][column_].price;

// по аналогии абратно
div=document.getElementById("one_output_1_id"+row_+"_"+column_);
div.innerHTML=matrix[row_][column_].count;
div=document.getElementById("one_output_2_id"+row_+"_"+column_);
div.innerHTML=matrix[row_][column_].count2;

break;
case 2:
		//1 уровень по краям
		if(row_==null||row_==undefined){
			var div=document.getElementById("one_input_a_row_id"+column_);
			div.value=matrix_a_row[column_];

		}
		else{
			var div=document.getElementById("one_input_a_col_id"+row_);

			div.value=matrix_a_column[row_];
		}


		break;
		case 3:
		//потенциалы
		if(row_==null||row_==undefined){
			var div=document.getElementById("one_input_b_row_id"+column_);
			div.value=matrix_b_row[column_];

		}
		else{
			var div=document.getElementById("one_input_b_col_id"+row_);
			div.value=matrix_b_column[row_];
		}
		

		break;
		default:
		alert("Ошибка в свиче 1");
		break;
	}


	

}
//внесение данных из ui в js
function save_matr(){
	//TODO сохранять еще и уровни+потенциалы
	for(var i=0;i<row;++i){
		for(var i2=0;i2<column;++i2){
		//TODO заполнять и остальные поля

		set_matrix_cell(i,i2,null,null,null,1);
		if(i===0){
			set_matrix_cell(null,i2,null,null,null,2);
			set_matrix_cell(null,i2,null,null,null,3);

			//matrix_a_row[i2]=document.getElementById("one_input_a_row_id"+column_).value;
			//matrix_b_row[i2]=document.getElementById("one_input_b_row_id"+column_).value;

		}
	}
	set_matrix_cell(i,null,null,null,null,2);
	set_matrix_cell(i,null,null,null,null,3);
	//matrix_a_column[i]=document.getElementById("one_input_a_col_id"+row_).value;
	//matrix_b_column[i]=document.getElementById("one_input_b_col_id"+row_).value;
}	

}
//добавление в созданную ячейку значений в ui
function load_matr(){
	//TODO загружать еще и уровни+потенциалы
	for(var i=0;i<row;++i){
		for(var i2=0;i2<column;++i2){
		//TODO заполнять и остальные поля
		read_matrix_cell(i,i2,1);
		if(i===0){
			read_matrix_cell(null,i2,2);
			read_matrix_cell(null,i2,3);

		}
	}
	read_matrix_cell(i,null,2);
	read_matrix_cell(i,null,3);
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
matrix[row][i]=new one_block_matrix(0,null,null);

}

//уровень 1

var lvl1=document.getElementById("a_column_id");
lvl1.innerHTML+=add_one_cell_ui(row,null,2);
matrix_a_column[row]=0;

//потенциалы
var lvl2=document.getElementById("b_column_id");
lvl2.innerHTML+=add_one_cell_ui(row,null,3);
matrix_b_column[row]=0;

row++;
}
//отрисовка 1 ячейки с данными
//type 1--ячека таблицы 2--ячейка уровня 1 3-- ячейка уровня 2
function add_one_cell_ui(row_,column_,type){
	var res="";
	switch(type){
		case 1:
		res="<div  class='input_block' id='input_block_id"+row_+"_"+column_+"'>";
		res+="<label class='div_inline_block one_output' id='one_output_1_id"+row_+"_"+column_+"'></label>";
		res+="<label  class='div_inline_block one_output' id='one_output_2_id"+row_+"_"+column_+"'></label>";
		res+="<div class='one_input_div'>";
		res+="<input  id='one_input_id"+row_+"_"+column_+"' type='number' type='number'>";
		res+="</div></div>";
		break;

		case 2:
		if(row_==null||row_==undefined){
			res="<div class='input_block_down input_block div_inline_block' id='ui_block_a_row_id"+column_+"'>";
			res+="<input  id='one_input_a_row_id"+column_+"' type='number' type='number'>";
			res+="</div>";
		}
		else{
			res="<div class='input_block' id='ui_block_a_col_id"+row_+"'>";
			res+="<input  id='one_input_a_col_id"+row_+"' type='number' type='number'>";
			res+="</div>";
		}
		
		break;

		case 3:
		if(row_==null||row_==undefined){
			res="<div class='input_block_down input_block div_inline_block' id='ui_block_b_row_id"+column_+"'>";
			res+="<input  id='one_input_b_row_id"+column_+"' type='number' type='number'>";
			res+="</div>";
		}
		else{
			res="<div class='input_block' id='ui_block_b_col_id"+row_+"'>";
			res+="<input  id='one_input_b_col_id"+row_+"' type='number' type='number'>";
			res+="</div>";
		}

		
		break;
		default:
		alert("Ошибка в свиче 2");
		break;
	}
	

//"<input class='input_block' id='one_input_id"+i+"_"+column+"' type='text' type='number'>";
return res;
}

//добавить столбец
function add_column_f(UI){
	var res="";
	var main_div=document.getElementById("main_div_tabl");
	res+="<div class='div_inline_block div_one_colum' id='one_column_id"+column+"''>";

	for(var i=0;i<row;++i){
		res+=add_one_cell_ui(i,column,1);
		if(matrix[i]==undefined)
			matrix[i]=[];
		if(!UI){
			
			matrix[i][column]=new one_block_matrix(0,null,null);
		}
		
	}


	res+="</div>";
//уровень 1

var lvl1=document.getElementById("a_row_id");
lvl1.innerHTML+=add_one_cell_ui(null,column,2);
if(!UI)
	matrix_a_row[column]=0;
//потенциалы
var lvl2=document.getElementById("b_row_id");
lvl2.innerHTML+=add_one_cell_ui(null,column,3);
if(!UI)
	matrix_b_row[column]=0;

column++;
main_div.innerHTML+=res;


}


//кнопка удалить строку
function del_row(){
	row--;
	for(var i=0;i<column;++i){

		var div=document.getElementById("input_block_id"+row+"_"+i);
		div.remove();
		matrix.splice(row,1);

	}
	div=document.getElementById("ui_block_a_col_id"+row);
	div.remove();
	matrix_a_column.splice(row,1);
	div=document.getElementById("ui_block_b_col_id"+row);
	div.remove();
	matrix_b_column.splice(row,1);

}

//кнопка удалить столбец
function del_column(){
	column--;
	var div=document.getElementById("one_column_id"+column);
	div.remove();
	
	for(var i=0;i<row;++i){

		matrix[i].splice(column,1);
	}
	div=document.getElementById("ui_block_a_row_id"+column);
	div.remove();
	matrix_a_row.splice(column,1);
	div=document.getElementById("ui_block_b_row_id"+column);
	div.remove();
	matrix_b_row.splice(column,1);

}
//кнопка добавить столбец
function add_column(){
	save_matr();
	add_column_f(false);
	load_matr();
}
//кнопка добавить строку
function add_row(){
	save_matr();
	add_row_f();
	load_matr();

}
//очистить все кроме цены в коде(матрица+ потенциалы)
function not_full_clear_matrix(){//full
	for(var i=0;i<row;++i){
		for(var i2=0;i2<column;++i2){
		//TODO заполнять и остальные поля
		//var tmp;
		//if(full)
//tmp_price=null;
//else
var tmp_price=matrix[i][i2].price;
set_matrix_cell(i,i2,tmp_price,null,null,1);
read_matrix_cell(i,i2,1);
if(i===0){

	set_matrix_cell(null,i2,0,null,null,3);
	read_matrix_cell(null,i2,3);
}

}

set_matrix_cell(i,null,0,null,null,3);
read_matrix_cell(i,null,3);
}
}
//functions подсчета северозаподного угла
function deg(){
	
	var mass_row=matrix_a_row.slice(0,matrix_a_row.length);
	var mass_column=matrix_a_column.slice(0,matrix_a_column.length);
	var i2=0;
	var tmp=0;
	reload_ui(true);
	not_full_clear_matrix();//false
	for(var i=0;i<column;++i){
		
		//for(var i2=0;i2<column;++i2){
			while(true){
				if(mass_row[i]>mass_column[i2]){
					tmp=mass_column[i2];

				}
				else{
					tmp=mass_row[i];
				}
				mass_row[i]-=tmp;
				mass_column[i2]-=tmp;
				//matrix[i][i2].count=tmp;
				set_matrix_cell(i,i2,matrix[i][i2].price,tmp,null,1);
				if(mass_row[i]!=0){
					i2++;
				}
				else
					break;
			}

			

	//}
}
load_matr();
}


//метод наименьшей стоимости
function small_price(){
	var mass_row=matrix_a_row.slice(0,matrix_a_row.length);
	var mass_column=matrix_a_column.slice(0,matrix_a_column.length);
	var mass_price_=[];
	var mass_price=[];
	reload_ui(true);
	not_full_clear_matrix();
	for(var i=0;i<row;++i){
		for(var i2=0;i2<column;++i2){

			mass_price_.push(matrix[i][i2].price);
		}
	}
	/*
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

}*/
mass_price_.sort((a, b) =>{
	if (a > b) return 1;
	if (a < b) return -1;
});

for(var i=0;i<mass_price_.length;++i){
	if(i+1<mass_price_.length){
		if(mass_price_[i]!==mass_price_[i+1])
			mass_price.push(mass_price_[i])
	}
	else{
		if(mass_price[mass_price.length-1]!==mass_price_[i])
			mass_price.push(mass_price_[i])
	}
}

for(var item=0;item<mass_price.length;++item){
	for(var i=0;i<row;++i){
		for(var i2=0;i2<column;++i2){
			if(matrix[i][i2].price===mass_price[item]){
//TODO
var tmp=0;
if(mass_row[i2]!==0&&mass_column[i]!==0)
	if(mass_row[i2]>mass_column[i]){
		tmp=mass_column[i];

	}
	else{
		tmp=mass_row[i2];
	}
	mass_row[i2]-=tmp;
	mass_column[i]-=tmp;
	matrix[i][i2].count=tmp;
}




}
}
}

load_matr();

}



//метод потенциалов
function meth_pot(){

	not_full_clear_matrix();
	reload_ui(true);
	small_price();
	var na4_col=0;
	var na4_row=0;
	var not_good_method=false;
//var first_pot=Math.floor(matrix[0][0].price/2);

ck:
for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){
		if(matrix[i][i2].count!=0){//||matrix[i][i2].count==null
			na4_row=i;
			na4_col=i2;
			break ck;
		}

	}

}

matrix_b_row[na4_col]=Math.floor(matrix[na4_row][na4_col].price/2);
//matrix_b_column[0]=first_pot;
//matrix_b_row[0]=first_pot;
//if(first_pot*2!==matrix[0][0].price)
//matrix_b_row[0]++;

//ТУТ ХЗ возможно надо идти только по пустым
for(var i=0;i<row;++i){
	matrix_b_column[i]=matrix[i][na4_col].price-matrix_b_row[na4_col];
}
for(var i=0;i<column;++i){
	matrix_b_row[i]=matrix[na4_row][i].price-matrix_b_column[0];	
}

for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){
		if(matrix[i][i2].count==0||matrix[i][i2].count==null){
			matrix[i][i2].count2=+matrix_b_row[i2]+ +matrix_b_column[i];
			if(!(matrix[i][i2].price-matrix[i][i2].count2>0)){
				var div=document.getElementById("input_block_id"+i+"_"+i2)
	//input_block_id0_0
	div.style="background-color:blue;"
	not_good_method=true;
}
}

}

}
load_matr();
if(not_good_method){
	alert("план не является оптимальным");
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
			row=+arr[0];
			column=+arr[1];
			arr.splice(0,2);
			matrix=[];
 matrix_a_row=[];//края
 matrix_a_column=[];
 matrix_b_row=[];//потенциалы
 matrix_b_column=[];
// for(var i=0;i<row;++i){
// 	matrix[i]=[];
// }


for(var i=0;i<row;++i){
	for(var i2=0;i2<column;++i2){
	//обычне ячейки
	
	if(matrix[i]==undefined)
		matrix[i]=[];
	matrix[i][i2]=new one_block_matrix(0,null,null);

}
}


var num=0;
for(var i=0; i<row; i++) {
	for(var j=0; j<column; j++) {
		//num= i*column+j;
		var mass_obj=arr[num].split("/");
		matrix[i][j].price=+mass_obj[0];
		matrix[i][j].count=+mass_obj[1];
		matrix[i][j].count2=+mass_obj[2];
		num++;
	}
}
//num++;
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
						reload_ui(true);
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
save_matr();
var str=""+row+","+column+",";

				//var num=0;
				for(var i=0; i<row; i++) {
					for(var j=0; j<column; j++) {
								//num= i*j+j];
								str+=matrix[i][j].price+"/"+matrix[i][j].count+"/"+matrix[i][j].count2+",";
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
				//alert(str);
				pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(str));
				pom.setAttribute('download', 'example.txt');
				pom.click();
			}
