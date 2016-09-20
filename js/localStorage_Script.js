if(localStorage.getItem('email_pref')) {
  document.getElementById('cmn-toggle-7').checked = JSON.parse(localStorage.getItem('email_pref'));
  document.getElementById('cmn-toggle-8').checked = JSON.parse(localStorage.getItem('profile_pref')); 
  document.getElementById('cmn-select-9').value = localStorage.getItem('timezone_pref');
}

document.getElementById("save").addEventListener('click', function() {
  localStorage.setItem('email_pref', document.getElementById('cmn-toggle-7').checked);
  localStorage.setItem('profile_pref', document.getElementById('cmn-toggle-8').checked);
  localStorage.setItem('timezone_pref', document.getElementById('cmn-select-9').value);
    location.reload();
});

document.getElementById("cancel").addEventListener("click", function() {
  localStorage.clear();
  location.reload();
});
