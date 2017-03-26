function delete_row(no)
{
document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{

var table=document.getElementById("parameter_table");
var table_len=(table.rows.length)-1;
var row = table.insertRow(table_len).outerHTML=
"<tr id='row"+table_len+"'> <td> <input type='radio' name='Carrier_"+table_len+"' value='truck' checked> <i class='fa fa-truck' aria-hidden='true'></i> </input> <div> <input type='radio' name='Carrier_"+table_len+"' value='plane'> <i class='fa fa-plane' aria-hidden='true'></i> </input> </div> </td> <td> <div> <input type='text' id='input_2' name='q2_text' size='8' placeholder='Carrier Id' class='form-textbox' value='' /> </div> </td> <td> <select id='input_3'> <option value=''></option> <option value='ABQA'> ABQA </option> <option value='FMNA'> FMNA </option> <option value='GUPA'> GUPA </option> <option value='SAFA'> SAFA </option> </select> </td> <td> <div id='cid_8' class='form-input jf-required'> <input type='number' id='input_8' name='q8_number' data-type='input-number' class=' form-number-input form-textbox' style='width:60px;' size='5' value='' data-component='number' /> </div> </td> <td> <div id='cid_7' class='form-input jf-required'> <input type='time' name='usr_time'> </div> </td> <td> <i class='fa fa-times' onclick='delete_row("+table_len+")' aria-hidden='true'></i> </td> </tr>";

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
"<tr id='emp_row"+table_len+"'><td> <select id='input_3'> <option value=''></option> <option value='EMP_1'> Adams </option> <option value='EMP_2'> Baker </option> <option value='EMP_3'> Clark </option> <option value='EMP_4'> Davis </option> <option value='EMP_5'> Frank </option> <option value='EMP_6'> Zafar </option> </select> </td> <td> <div id='cid_7' class='form-input jf-required'> <input type='time' name='from_time'> </div> </td> <td> <div id='cid_8' class='form-input jf-required'> <input type='time' name='to_time'> </div> </td> <td> <i class='fa fa-times' onclick='delete_emp_row("+table_len+")' aria-hidden='true'></i> </td> </tr>";

}
