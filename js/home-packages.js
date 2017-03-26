// Create a new truck/plane with a volume and arrival time
// and insert it into the Package Breakdown table
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow

function makeIncomingPackage(){
  try{
    var dom_table = document.getElementById("table_incoming_packages");
    var row = dom_table.insertRow( 1 ); // Create New Row at Top of Table after Headings
    var col_vehicle = row.insertCell();
    var col_volume = row.insertCell();
    var col_time = row.insertCell();
    
    // Vehicle
    var vehicle_array = ["<p class=\"fa fa-truck\" aria-hidden=\"true\"></p>", 
                         "<p class=\"fa fa-plane\" aria-hidden=\"true\"></p>"];
    var vehicle_index = Math.floor( Math.random()*2 );  // [0, 1]        
    var text_vehicle = vehicle_array[vehicle_index];
        
    // Volume
    var volume_truck_min = 100;
    var volume_truck_max = 2000;
    var volume_plane_min = 1000;
    var volume_plane_max = 20000;
    var text_volume; 
    if( vehicle_index == 0 ){
      var volume_random = Math.floor( Math.random()*volume_truck_max + volume_truck_min );
      text_volume = document.createTextNode( volume_random );
    }else{
      var volume_random = Math.floor( Math.random()*volume_plane_max + volume_plane_min );
      text_volume = document.createTextNode( volume_random );
    }
    
    // Time
    var hour_random = Math.floor( Math.random()*12 + 1 ); // [1, 12]
    var minute_random = Math.floor( Math.random()*59 + 1 ); // [1, 12]
    if( minute_random < 10 ){
      minute_random = "0" + minute_random;
    }
    var pm_random = Math.floor( Math.random()*2 ); // [0, 1]
    var text_ampm = "am";
    if( pm_random == 1 ){
      text_ampm = "pm";
    }
    var text_time = document.createTextNode( hour_random + ":" + minute_random + text_ampm);
    
    // Update Cell Content
    col_vehicle.innerHTML = text_vehicle;
    col_volume.appendChild(text_volume);
    col_time.appendChild(text_time);
  }
  catch( e ){
    alert("makIncomingPackage:\n" + e);
  }
}

// DOCUMENT LOADED
window.onload = function(){
  try{
    for(i = 0; i < 30; i++){
      makeIncomingPackage();
    }
  }
  catch( e ){
    alert(e);
  }
}
