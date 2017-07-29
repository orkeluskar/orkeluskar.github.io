function calculate(){
  var string = document.getElementById('a').value;
  
  var hashtable = {};
    for(var i = 0; i < string.length; i++){
        if(!hashtable[string[i]]){
            hashtable[string[i]] = 1
        }
        else{
            hashtable[string[i]] += 1
        }   
    }

    for(var i = 0; i < string.length; i++){
        if(hashtable[string[i]] == 1){
            document.getElementById('target').innerHTML = string[i]
            break
        }
    }
}

var dialog = document.querySelector('dialog');
    var showModalButton = document.querySelector('.show-modal');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showModalButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
});



