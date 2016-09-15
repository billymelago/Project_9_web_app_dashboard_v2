

if(!localStorage.getItem('email_pref')) {
    loadStoragePref();
} else {
    setStoragePref();
}

function setStoragePref() {
    var sendEmailNotifications = localStorage.getItem('email_pref');
    var setProfileToPublic = localStorage.getItem('profile_pref');
    var timezoneChoice = localStorage.getItem('timezone_pref');
    
    document.getElementById('cmn-toggle-7').checked = sendEmailNotifications; //true or false
    document.getElementById('cmn-toggle-8').checked = setProfileToPublic; 
    document.getElementById('cmn-select-9').value = timezoneChoice;
    console.log(sendEmailNotifications);
    
    
}

function loadStoragePref() {
    var result = function(r) {
        if(document.getElementById('cmn-toggle-7').checked){
            r = 'true'
    } else if(!document.getElementById('cmn-toggle-7').checked){
            r = 'false';
        }
    };
                                    // true or false    
    localStorage.setItem('email_pref', 'result(r)');
    localStorage.setItem('profile_pref', document.getElementById('cmn-toggle-8').checked);
    localStorage.setItem('timezone_pref', document.getElementById('cmn-select-9').value);
    
    setStoragePref();
}



//when 'save' is clicked
//go and see if cmn-toggle is checked. true or false
//store result in setItem(' _pref', result) true or false



document.getElementById("save").addEventListener('click', loadStoragePref);

document.getElementById("cancel").addEventListener("click", function() {
  localStorage.clear();
  location.reload();  
}); 