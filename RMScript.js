var DOMCheck = function(){
    room_1_lightStatus = document.getElementById('room_1_light');
    room_1_fanStatus = document.getElementById('room_1_fan');
    outdoorLightStatus = document.getElementById('outdoor_light');
    gateLightStatus = document.getElementById('gate_light');
    if (room_1_lightStatus.checked==true){
        console.log('Room-1-Light-On');
    }
    else {
        console.log('Room-1-Light-Off');
    }
    
    if (room_1_fanStatus.checked==true){
        console.log('room-1-fan-On');
    }
    else {
        console.log('room-1-fan-Off');
    }
    
    if (outdoorLightStatus.checked==true){
        console.log('outdoor-light-On');
    }
    else {
        console.log('outdoor-light-Off');
    }
    
    if (gateLightStatus.checked==true){
        console.log('gate-light-On');
    }
    else {
        console.log('gate-light-Off');
    }
    
    controlTheSwitches();
};


var controlTheSwitches = function(){
    
};



var testTrigger = function(switchId){
    
    document.getElementById(switchId).checked = ((document.getElementById(switchId).checked == true)? false : true);
}

var smartHomeController = (function(){
  
    
    
    
    /* Need to add
    contents 
    Here */
    
    
    
    
    
    
});




  var capturePhoto = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/capture", true);
    xhr.send();
  }
