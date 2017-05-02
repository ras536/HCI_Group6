var emp_flow = 75;

function gen_rand() {
	var rand_flow = Math.floor( Math.random()*emp_flow + emp_flow );
	return rand_flow;
}

var volume_truck_min = 100;
var volume_truck_max = 2000;

function gen_rand_pckgs() {
	var rand_pckgs = Math.floor( Math.random()*volume_truck_max + volume_truck_min );
	return rand_pckgs;
}

function gen_station(){
	var rand = Math.floor( Math.random()*4 + 1);
	
	if (rand == 1) {
		var station = 'ABQA';
	} else if (rand == 2) {
		var station = 'GUPA';
	} else if (rand == 3) {
		var station = 'SAFA';
	} else if (rand == 4) { 
		var station = 'FMNA';
	}
	
	return station;
}

// Time In
function from_time() {
	var hour_random = Math.floor( Math.random()*2 + 3 ); // [1, 12]
	var minute_random = Math.floor( Math.random()*59 + 1 ); // [1, 12]
	if( minute_random < 10 ){
	  minute_random = "0" + minute_random;
	}	
	var time_in = "0" + hour_random + ":" + minute_random + ":00";
	
	return time_in;
}

function to_time() {
	// Time Out
	var hour_random = Math.floor( Math.random()*4 + 4 ); // [1, 12]
	var minute_random = Math.floor( Math.random()*59 + 1 ); // [1, 12]
	if( minute_random < 10 ){
	  minute_random = "0" + minute_random;
	}
	var time_out = "0" + hour_random + ":" + minute_random + ":00"; //04:00:00
	
	return time_out;
}

function delete_row(no)
{
document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{

var table=document.getElementById("parameter_table");
var table_len=(table.rows.length);
var row = table.insertRow(table_len-1).outerHTML=
"<tr id='row"+table_len+"'> <td> <input type='radio' name='Carrier_"+table_len+"' value='truck' checked> <p class='fa fa-truck' aria-hidden='true'></p> </input> <div> <input type='radio' name='Carrier_"+table_len+"' value='plane'> <p class='fa fa-plane' aria-hidden='true'></p> </input> </div> </td> <td> <div> <input type='text' id='input_2' name='q2_text' size='8' placeholder='Carrier Id' class='form-textbox station-textbox' value='"+gen_station()+"' /> </div> </td> <td> <select id='input_3'> <option value=''></option> <option value='ABQA'> ABQA </option> <option value='FMNA' selected> FMNA </option> <option value='GUPA'> GUPA </option> <option value='SAFA'> SAFA </option> </select> </td> <td> <div id='cid_8' class='form-input jf-required'> <input type='number' id='input_8' name='q8_number' data-type='input-number' class=' form-number-input form-textbox' style='width:60px;' size='5' value='"+gen_rand_pckgs()+"' data-component='number' /> </div> </td> <td> <div id='cid_7' class='form-input jf-required'> <input type='time' name='usr_time' value='"+from_time()+"'> </div> </td> <td> <p class='fa fa-times' onclick='delete_row("+table_len+")' aria-hidden='true'></p> </td> </tr>";

}


function delete_emp_row(no)
{
document.getElementById("emp_row"+no+"").outerHTML="";
}

function add_emp_row()
{

var table=document.getElementById("employees_table");
var table_len=(table.rows.length)-1;
var row = table.insertRow(table_len).outerHTML=
"<tr id='emp_row"+table_len+"'><td> <select id='input_3'> <option value=''></option> <option value='EMP_1'> Adams </option> <option value='EMP_2'> Baker </option> <option value='EMP_3'> Clark </option> <option value='EMP_4'> Davis </option> <option value='EMP_5'> Frank </option> <option value='EMP_6' selected> Zafar </option> </select> </td> <td> <div id='cid_7' class='form-input jf-required'> <input type='time' name='from_time' value='"+from_time()+"'> </div> </td> <td> <div id='cid_8' class='form-input jf-required'> <input type='time' name='to_time' value='"+to_time()+"'> </div> </td> <td><div id='cid_9' class='jf-required'><p>"+gen_rand()+"</p></div></td><td></td><td> <p class='fa fa-times' onclick='delete_emp_row("+table_len+")' aria-hidden='true'></p> </td> </tr>";

}
