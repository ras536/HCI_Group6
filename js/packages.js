//
// packages.js for packages.html
//

//
// GLOBAL VARIABLES
//
var table_incoming = null;  // a google charts data table; global for event handling
var data = null; // google charts datatable; global for event handling

var package_array = []; // global list of packages needed for filter

//
// FUNCTIONS
//
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// Create a new truck/plane with a volume and arrival time
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
function makeIncomingPackage(){
  try{    
    // Vehicle
    var carrier_num_min = 100;
    var carrier_num_max = 1900;
    var carrier_num_rand = Math.floor( Math.random()*carrier_num_max + carrier_num_min );
    var vehicle_array = ["<p class=\"fa fa-truck\" aria-hidden=\"true\"></p>", 
                         "<p class=\"fa fa-plane\" aria-hidden=\"true\"></p>"];
    var vehicle_index = Math.floor( Math.random()*2 );  // [0, 1]        
    var carrier_type = vehicle_array[vehicle_index];
    
    // Source
    var source_list = ["ABQA", "FMNA", "GUPA", "SAFA"];
    var source_index = Math.floor( Math.random()*source_list.length );  // [0, size - 1]
    var text_source = source_list[ source_index ];
    
    // Volume
    var volume_truck_min = 100;
    var volume_truck_max = 1900;
    var volume_plane_min = 1000;
    var volume_plane_max = 19000;
    var text_volume; 
    if( vehicle_index == 0 ){
      var volume_random = Math.floor( Math.random()*volume_truck_max + volume_truck_min );
      text_volume = volume_random;
    }else{
      var volume_random = Math.floor( Math.random()*volume_plane_max + volume_plane_min );
      text_volume = volume_random;
    }
    
    // Time
    var hour_random = Math.floor( Math.random()*06 + 1 ); // [1, 7]
    var minute_random = Math.floor( Math.random()*59 + 1 ); // [1, 59]
    
    // Status
    var status_array = ["<p class=\"fa fa-check-circle\" aria-hidden=\"true\"></p>",
                        "<p class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></p>",
                        "<p class=\"fa fa-times-circle\" aria-hidden=\"true\"></p>"];
    var status_index = Math.floor( Math.random()*3 );
    var text_status = status_array[ status_index ];

    return new Array(carrier_type, 
                    carrier_num_rand,
                    text_source, 
                    text_volume, 
                    [hour_random, minute_random, 0], 
                    text_status);
  }
  catch( e ){
    alert("makIncomingPackage:\n" + e);
  }
}

// The initial method to populate and draw the chart.
function drawChart(){
    // Reference: https://developers.google.com/chart/interactive/docs/examples
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Carrier Type');
    data.addColumn('number', 'Carrier Number');
    data.addColumn('string', 'Source');
    data.addColumn('number', 'Volume');
    data.addColumn('timeofday', 'Arrival Time');
    data.addColumn('string', 'Status');
    
    data.addRows(30);
    for(row = 0; row < 30; row++){
      var p = makeIncomingPackage();
      
      // Populate Array
      package_array.push( p );
      
      // Populate Google Chart
      data.setCell(row, 0, p[0]);
      data.setCell(row, 1, p[1]);
      data.setCell(row, 2, p[2]);
      data.setCell(row, 3, p[3]);
      data.setCell(row, 4, p[4]);
      data.setCell(row, 5, p[5]);
    }
    
    table_incoming = new google.visualization.Table( document.getElementById("div_table_incoming") );
    table_incoming.draw(data, {width: '100%', height: '320px', allowHtml: true});
    google.visualization.events.addListener(table_incoming, 'select', tableSelectHandler);
}

function updateChart( p_array ){
    try{
    // Reference: https://developers.google.com/chart/interactive/docs/examples
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Carrier Type');
    data.addColumn('number', 'Carrier Number');
    data.addColumn('string', 'Source');
    data.addColumn('number', 'Volume');
    data.addColumn('timeofday', 'Arrival Time');
    data.addColumn('string', 'Status');
    
    data.addRows( p_array.length );
    for(row = 0; row < p_array.length; row++){
      // Populate Google Chart
      data.setCell(row, 0, p_array[row][0]);
      data.setCell(row, 1, p_array[row][1]);
      data.setCell(row, 2, p_array[row][2]);
      data.setCell(row, 3, p_array[row][3]);
      data.setCell(row, 4, p_array[row][4]);
      data.setCell(row, 5, p_array[row][5]);
    }
    
    table_incoming.innerHTML = "";
    table_incoming = new google.visualization.Table( document.getElementById("div_table_incoming") );
    table_incoming.draw(data, {width: '100%', height: '320px', allowHtml: true});
    google.visualization.events.addListener(table_incoming, 'select', tableSelectHandler);
    }
    catch( e ){
      alert("updateChart:\n" + e );
    }
}

// When a filter is applied call this
function filterChart(){
  try{
  // Get Filter Settings
  var dom_station = document.getElementById("filter_station");
  var dom_number = document.getElementById("filter_number");
  var dom_volume = document.getElementById("filter_volume");
  var dom_time = document.getElementById("filter_time");
  var dom_status = document.getElementById("filter_status");
  
  var text_station = dom_station.value;
  var text_number = dom_number.value;
  var text_volume = dom_volume.value;
  var text_time = dom_time.value;
  var text_status = dom_status.value;
  
  // Create New Array
  var filter_array = [];
  
  for( var index = 0; index < package_array.length; index++ ){
    var p_carrier = package_array[index][0];
    var p_number = package_array[index][1];
    var p_source = package_array[index][2];
    var p_volume = package_array[index][3];
    var p_time = package_array[index][4];
    var p_status = package_array[index][5];
    
    var source_bool = false;
    var number_bool = false;
    var volume_bool = false;
    var time_bool = false;
    var status_bool = false;
    
    // Station
    if( text_station == "ALL" || p_source == text_station){
      source_bool = true;
    }
    
    // Number
    var filter_number_length = text_number.length;
    var p_number_length = String(p_number).length;
    var number_substring = String(p_number).substring(0, filter_number_length);
    if( text_number == "" || text_number == String(number_substring) ){
      number_bool = true;
    }
    
    // Volume
    if( parseInt(p_volume) <= parseInt(text_volume) ){
      volume_bool = true;
    }
    
    // Time
    if(text_time != ""){ 
      var array_time = text_time.split(":");
      var filter_time = parseInt(array_time[0])*100 + parseInt(array_time[1]);
      var x_time = parseInt(p_time[0])*100 + parseInt(p_time[1]);

      if( x_time <= filter_time ){
        time_bool = true;
      }
    }else{
      time_bool = true;
    }
    
    // Status
    if( text_status == "ANY" || p_status.includes( text_status ) ){
      status_bool = true;
    }
    
    // Append to New Array
    if( source_bool && number_bool && volume_bool && time_bool && status_bool ){
      filter_array.push( package_array[index] );
    }
  }
  updateChart( filter_array );
  }
  catch( e ){
    alert("filterChart:\n" + e);
  }
}

// Clear Filter
function clearFilter(){
  updateChart( package_array );
}

// Reference: https://developers.google.com/chart/interactive/docs/events
function tableSelectHandler(){  
  try{
    var sel = table_incoming.getSelection();
    for(var i = 0; i < sel.length; i++){
      var item = sel[i];
      var row_int = item.row;
      if( !row_int ) row_int = 0;
      
      //alert( data.getFormattedValue(row_int, 0) );
      //alert( data.getFormattedValue(row_int, 1) );
      //alert( data.getFormattedValue(row_int, 2) );
      //alert( data.getFormattedValue(row_int, 3) );
      //alert( data.getFormattedValue(row_int, 4) );
    }
  }catch( err ){
    alert( err );
  }
}

// DOCUMENT LOADED
window.onload = function(){
  try{
    google.charts.load('current', {'packages' : ['corechart', 'table']});
    google.charts.setOnLoadCallback( drawChart );
    
    // Update the margin because css doesn't work for the dynamically created table.
    document.getElementById("div_table_incoming").setAttribute("style", "margin-bottom: 2.0em;");
  }
  catch( e ){
    alert(e);
  }
}
