function buttton(){
    var select = document.getElementById('select');
    var link = document.getElementById('link');
    //document.getElementById("demo").innerHTML = select;
    
    if(select.selectedIndex == 1){
        link.href = "Luis.html";
        console.log('Luis');
    } else if(select.selectedIndex == 2){
        link.href = "Thor.html";
        console.log('Thor');
    } else if(select.selectedIndex == 3){
        link.href = "Steven.html";
        console.log('Steven');
    } else if(select.selectedIndex == 4){
        link.href = "Gii.html";
        console.log('Gii');
    }
}

