//1--обычная ячейка  2--А Б(путь и тд по краям уровень 1)   3-- потенциалы

var column=0;//4
var row=4;
var matrix=[];
var matrix_a_row=[];//края
var matrix_a_column=[];
var matrix_b_row=[];//потенциалы
var matrix_b_column=[];
//TODO кнопки: очистить



class one_block_matrix {
	constructor(price_,count_,count_2){
		this.price=price_;
		this.count=count_;
		this.count2=count_2;
	}

	Copy(){
		return new one_block_matrix(this.price,this.count,this.count2);
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
		matrix[row_][column_].count=+count_;
		matrix[row_][column_].count2=+count2_;
		break;
		case 2:
		//1 уровень по краям
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
	for(var i=0;i<row;++i){
		for(var i2=0;i2<column;++i2){
			set_matrix_cell(i,i2,null,null,null,1);
			if(i===0){
				set_matrix_cell(null,i2,null,null,null,2);
				set_matrix_cell(null,i2,null,null,null,3);
			}
		}
		set_matrix_cell(i,null,null,null,null,2);
		set_matrix_cell(i,null,null,null,null,3);
	}	

}
//добавление в созданную ячейку значений в ui
function load_matr(){
	for(var i=0;i<row;++i){
		for(var i2=0;i2<column;++i2){
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
		}
		load_matr();
		var z_output=document.getElementById("z_result_id");
		z_output.innerHTML="Z="+Z_matr(matrix);
	}


//метод наименьшей стоимости
function small_price(){
	var mass_row=matrix_a_row.slice(0,matrix_a_row.length);
	var mass_column=matrix_a_column.slice(0,matrix_a_column.length);
	
	reload_ui(true);
	not_full_clear_matrix();
	var mass_price=mass_price_matrix(matrix,row,column);

	for(var item=0;item<mass_price.length;++item){
		for(var i=0;i<row;++i){
			for(var i2=0;i2<column;++i2){
				if(matrix[i][i2].price===mass_price[item]){
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
		var z_output=document.getElementById("z_result_id");
		z_output.innerHTML="Z="+Z_matr(matrix);
	}
	function mass_price_matrix(matrix,row,column){
		var mass_price_=[];
		var mass_price=[];
		for(var i=0;i<row;++i){
			for(var i2=0;i2<column;++i2){
				mass_price_.push(matrix[i][i2].price);
			}
		}

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
		return mass_price;
	}


//метод потенциалов
function meth_pot(){

	not_full_clear_matrix();
	reload_ui(true);
	small_price();
	var na4_col=0;
	var na4_row=0;
	var not_good_method=false;

	ck:
	for(var i=0;i<row;++i){
		for(var i2=0;i2<column;++i2){
			if(matrix[i][i2].count!=0){
				na4_row=i;
				na4_col=i2;
				break ck;
			}

		}

	}

	matrix_b_row[na4_col]=Math.floor(matrix[na4_row][na4_col].price/2);

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
				div.style="background-color:blue;"
				not_good_method=true;
			}
		}
	}
}
load_matr();
if(not_good_method){
	alert("план не является оптимальным");
	var z_output=document.getElementById("z_result_id");
	z_output.innerHTML="";
}
else{
	var z_output=document.getElementById("z_result_id");
	z_output.innerHTML="Z="+Z_matr(matrix);
}
}

//--сначала квадраты идут по строке/столбцу
//потом прямоугольники 2/3 2/4... 3/2 3/3
//делаем прямоугольник и смещаем по строке и так для каждой строки
//после того как дошел до конца увеличиваем 1 грань и другую =1 и заного
//для прямоугольника:
//отсортировать ячейки по стоимости и распределить груз
function while_method(){

	not_full_clear_matrix();
	reload_ui(true);
	small_price();
	var end=false;
	var z_matrix_baz=Z_matr(matrix);
	while(!end){
		sk:
for(var width=1;width<=column;++width) //высота прямоугольника
for(var height=1;height<=row;++height) //ширина прямоугольника
for(var row_=0;row_+height-1<row;++row_) //начало обрабатываемого прямоугольника
for(var col_=0;col_+width-1<column;++col_){//начало обрабатываемого прямоугольника
	if(height!==1&&width!==1){
		var new_small_matrix=sort_one_rectangle(matrix,row_,col_,width,height);
		var matrix_new=new_matr(matrix);
		matrix_new[row_][col_]=new_small_matrix[0][0];
		matrix_new[row_][col_+width-1]=new_small_matrix[0][1];
		matrix_new[row_+height-1][col_]=new_small_matrix[1][0];
		matrix_new[row_+height-1][col_+width-1]=new_small_matrix[1][1];
		var new_z=Z_matr(matrix_new);
		if(z_matrix_baz>new_z){
			z_matrix_baz=new_z;
			matrix[row_][col_]=new_small_matrix[0][0];
			matrix[row_][col_+width-1]=new_small_matrix[0][1];
			matrix[row_+height-1][col_]=new_small_matrix[1][0];
			matrix[row_+height-1][col_+width-1]=new_small_matrix[1][1];

			break sk;
		}
	}
	
}

if(width>column&&height>row)
	end=true;
}
//row col координаты начала
load_matr();
var z_output=document.getElementById("z_result_id");
z_output.innerHTML="Z="+Z_matr(matrix);
}


function new_matr(matrix){
	var res=[];
	for(var i=0;i<matrix.length;++i){
		if(res[i]==undefined)
			res[i]=[];
		for(var i2=0;i2<matrix[i].length;++i2)
			res[i][i2]=matrix[i][i2].Copy();
	}
	return res;

}


function sort_one_rectangle(matrix,row_,col_,width,height){
	if(height==1&&width==1)
		return null;
	var matr=[];
	for(var i=0;i<2;++i){
		matr[i]=[];
	}

	matr[0].push(matrix[row_][col_].Copy())
	if(col_!==col_+width-1)
		matr[0].push(matrix[row_][col_+width-1].Copy());
	else
		matr[0].push(new one_block_matrix(0,0,0));
	if(row_!==row_+height-1)
		matr[1].push(matrix[row_+height-1][col_].Copy());
	else
		matr[1].push(new one_block_matrix(0,0,0));

	if(row_!==row_+height-1&&col_!==col_+width-1)
		matr[1].push(matrix[row_+height-1][col_+width-1].Copy());
	else
		matr[1].push(new one_block_matrix(0,0,0));

	var all_count=matr[0][0].count+matr[0][1].count+matr[1][0].count+matr[1][1].count;

	if(all_count>0){

		matr_tmp=new_matr(matr);
		var z_not_changed=Z_matr(matr);
		var z_standart=z_not_changed;
		var z_change;

//перемещаем вверх по левой строке

var pot_1=min_num(matrix_a_row[col_],matrix_a_column[row_]);
var pot_2=min_num(matrix_a_row[col_+width-1],matrix_a_column[row_+height-1]);
if(matr[0][0].count<pot_1&&matr[1][1].count<pot_2){
	var can_change_1=pot_1-matr[0][0].count;
	var can_change_2=pot_2-matr[1][1].count;
	var can_change=min_num(can_change_1,can_change_2,matr[1][0].count,matr[0][1].count);
	
	if(can_change>0){
		matr_tmp[0][0].count+=can_change;
		matr_tmp[1][1].count+=can_change;
		matr_tmp[0][1].count-=can_change;
		matr_tmp[1][0].count-=can_change;
	}
}

z_change=Z_matr(matr_tmp);
if(z_standart>z_change){
	z_standart=z_change;
	z_change=null;
	matr=new_matr(matr_tmp);
}
else
	matr_tmp=new_matr(matr);


//перемещаем вниз по левой строке

pot_1=min_num(matrix_a_row[col_+width-1],matrix_a_column[row_]);
pot_2=min_num(matrix_a_row[col_],matrix_a_column[row_+height-1]);
if(matr[0][1].count<pot_1&&matr[1][0].count<pot_2){
	can_change_1=pot_1-matr[0][1].count;
	can_change_2=pot_2-matr[1][0].count;
	can_change=min_num(can_change_1,can_change_2,matr[0][0].count,matr[1][1].count);

	if(can_change>0){
		matr_tmp[1][0].count+=can_change;
		matr_tmp[0][1].count+=can_change;
		matr_tmp[1][1].count-=can_change;
		matr_tmp[0][0].count-=can_change;
	}
}

z_change=Z_matr(matr_tmp);
if(z_standart>z_change){
	z_standart=z_change;
	z_change=null;
	matr=new_matr(matr_tmp);
}
else
	matr_tmp=new_matr(matr);


//перемещаем вправо по верхней строке

pot_1=min_num(matrix_a_row[col_+width-1],matrix_a_column[row_]);
pot_2=min_num(matrix_a_row[col_],matrix_a_column[row_+height-1]);
if(matr[0][1].count<pot_1&&matr[1][0].count<pot_2){
	can_change_1=pot_1-matr[0][1].count;
	can_change_2=pot_2-matr[1][0].count;
	can_change=min_num(can_change_1,can_change_2,matr[1][1].count,matr[0][0].count);

	if(can_change>0){
		matr_tmp[1][0].count+=can_change;
		matr_tmp[0][1].count+=can_change;
		matr_tmp[1][1].count-=can_change;
		matr_tmp[0][0].count-=can_change;
	}
}

z_change=Z_matr(matr_tmp);
if(z_standart>z_change){
	z_standart=z_change;
	z_change=null;
	matr=new_matr(matr_tmp);
}
else
	matr_tmp=new_matr(matr);


//перемещаем влево по верхней строке

pot_1=min_num(matrix_a_row[col_],matrix_a_column[row_]);
pot_2=min_num(matrix_a_row[col_+width-1],matrix_a_column[row_+height-1]);
if(matr[0][0].count<pot_1&&matr[1][1].count<pot_2){
	can_change_1=pot_1-matr[0][0].count;
	can_change_2=pot_2-matr[1][1].count;
	can_change=min_num(can_change_1,can_change_2,matr[1][0].count,matr[0][1].count);

	if(can_change>0){
		matr_tmp[0][0].count+=can_change;
		matr_tmp[1][1].count+=can_change;
		matr_tmp[0][1].count-=can_change;
		matr_tmp[1][0].count-=can_change;
	}
}

z_change=Z_matr(matr_tmp);
if(z_standart>z_change){
	z_standart=z_change;
	z_change=null;
	matr=new_matr(matr_tmp);
}
else
	matr_tmp=new_matr(matr);


if(z_not_changed==z_standart)
	return matr;
else
	return sort_one_rectangle(matr,0,0,2,2);

}
return matr;
}


//передавать параметры
function min_num(){

	var res=null;
	for(var i=0;i<arguments.length;++i){
		if(res==null)
			res=arguments[i];
		else
			if(arguments[i]<res)
				res=arguments[i];
		}
		return res;
	}
	function Z_matr(matrix){
		var res=0;
		for(var i=0;i<matrix.length;++i){
			for(var i2=0;i2<matrix[0].length;++i2){
				res+=matrix[i][i2].price*matrix[i][i2].count;
			}
		}
		return res;
	}



	document.addEventListener("DOMContentLoaded", page_start);




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
					};
					reader.readAsText(file);
				}
			}

			function saveFile() {

//размерность ->матрица->границы->потенциалы
save_matr();
var str=""+row+","+column+",";
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
