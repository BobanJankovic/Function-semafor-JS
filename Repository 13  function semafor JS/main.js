function semafor () {
    var boje = document.getElementsByClassName('boje');
    boje[0].style.background = 'red';
    boje[1].style.background = 'gray';
    boje[2].style.background = 'gray';
    

    function changeToYellow () {
        boje[1].style.background = 'yellow';  

    }
    
    function changeToGreen () {
        boje[0].style.background = 'gray';
        boje[1].style.background = 'gray';
        boje[2].style.background = 'green';  

    }

function semafor2 () {
    var boje2 = document.getElementsByClassName('boje2');
    boje2[0].style.background = 'red';
    boje2[1].style.background = 'gray';
    boje2[2].style.background = 'gray';

    function changeToYellow2 () {
        boje2[1].style.background = 'yellow';  

    }
    function changeToGreen2 () {
        boje2[0].style.background = 'gray';
        boje2[1].style.background = 'gray';
        boje2[2].style.background = 'green';  

    }
    function changeToReed2 () {
        boje2[0].style.background = 'red';
        boje2[1].style.background = 'gray';
        boje2[2].style.background = 'gray';  

    }
    var x2 = setTimeout(changeToYellow2,1000);
    var y2 = setTimeout (changeToGreen2, 2000);
    var y3 = setTimeout (changeToReed2, 3000);
    
}


		if (boje[0].style.background === 'red') {
			semafor2 ();
		} 

			var x = setTimeout(changeToYellow,4000);
			var y = setTimeout (changeToGreen, 6000);
		var start = setInterval (semafor, 11000);

}

semafor();



