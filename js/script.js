var currentModal = "";

function display(id, list) {

    document.getElementById(id).style.display = 'block';

    for (i = 0; i < list.length; i++) {
        
        document.getElementById(list[i]).style.display = 'none';

    
    }
}

function modalclose(id) {
    console.log("Closed");
    document.getElementById(this.currentModal).className= "selection-image-box";
    document.getElementById('modal-background').style.display = 'none';
    
}

function modal(id) {
    console.log("Oh yeah wow that's nice.")
    document.getElementById(id).className= "modal-selection-box";
    this.currentModal = id;
    document.getElementById('modal-background').style.display = 'block';
}

