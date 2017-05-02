

function showDetails(detailID, buttonID){
  
  var detail = document.getElementById(detailID);
  
  detail.style.display='block';
  
  var button = document.getElementById(buttonID);
  button.innerHTML = "<button type='button' class='closebtn fa-large fa-chevron-circle-up' onclick=\"hideDetails('"+detailID+"','"+buttonID+"')\"></button>"
  
  return;
  
};

function hideDetails(detailID, buttonID){
  
  var detail = document.getElementById(detailID);
  
  detail.style.display='none';
  
  var button = document.getElementById(buttonID);
  button.innerHTML = "<button type='button' class='closebtn fa-large fa-chevron-circle-down' onclick=\"showDetails('"+detailID+"','"+buttonID+"')\"></button>"
  
  return;
  
};
