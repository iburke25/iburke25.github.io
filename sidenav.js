const rec = $('#svg')
const rec2 = $('#svg2')
const rec3 = $('#svg3')
const rec4 = $('#svg4')
const rec5 = $('#svg5')
const str = $('#str')
const str2 = $('#str2')
const str3 = $('#str3')
const str4 = $('#str4')
const str5 = $('#str5')

let topx = 175;
let botx = 200;
let tops = 170;
let bots = 190;
let topx2 = 175;
let botx2 = 200;
let tops2 = 170;
let bots2 = 190;
let topx3 = 175;
let botx3 = 200;
let tops3 = 170;
let bots3 = 190;
let topx4 = 175;
let botx4 = 200;
let tops4 = 170;
let bots4 = 190;
let topx5 = 175;
let botx5 = 200;
let tops5 = 170;
let bots5 = 190;


rec.mouseover(function (){		
	if (topx == 175 && botx == 200) {			
		var int = setInterval(frame, 1);
		function frame() {		
		if (topx == 210 && botx == 235 && tops == 205 && bots == 225) {
			clearInterval(int);			
		} else {
			topx++;
			botx++;
			tops++;
			bots++;
			rec.attr('d', `M52 305 L${topx} 305 L${botx} 350 L52 350 L52 305 Z`);
			str.attr('d', `M57 310 L${tops} 310 L${bots} 345 L57 345 L57 310 Z`);							
		}		
	}
}
});

rec.mouseout(function (){					
		setTimeout(function() { 
		if (topx == 210 && botx == 235) {				
		let int2 = setInterval(frame, 1);
		function frame() {
		if (topx == 175 && botx == 200 && tops == 170 && bots == 190){
			clearInterval(int2);						
		} else {
			topx--;
			botx--;
			tops--;
			bots--;
			rec.attr('d', `M52 305 L${topx} 305 L${botx} 350 L52 350 L52 305 Z`);
			str.attr('d', `M57 310 L${tops} 310 L${bots} 345 L57 345 L57 310 Z`); 			
		}
	}
}
}, 200);	
});

rec2.mouseover(function (){		
	if (topx2 == 175 && botx2 == 200) {			
		var int = setInterval(frame, 1);
		function frame() {		
		if (topx2 == 210 && botx2 == 235 && tops2 == 205 && bots2 == 225) {
			clearInterval(int);			
		} else {
			topx2++;
			botx2++;
			tops2++;
			bots2++;
			rec2.attr('d', `M52 405 L${topx2} 405 L${botx2} 450 L52 450 L52 405 Z`);
			str2.attr('d', `M57 410 L${tops2} 410 L${bots2} 445 L57 445 L57 410 Z`);							
		}		
	}
}

});

rec2.mouseout(function (){					
		setTimeout(function() { 
		if (topx2 == 210 && botx2 == 235) {				
		let int2 = setInterval(frame, 1);
		function frame() {
		if (topx2 == 175 && botx2 == 200 && tops2 == 170 && bots2 == 190){
			clearInterval(int2);						
		} else {
			topx2--;
			botx2--;
			tops2--;
			bots2--;
			rec2.attr('d', `M52 405 L${topx2} 405 L${botx2} 450 L52 450 L52 405 Z`);
			str2.attr('d', `M57 410 L${tops2} 410 L${bots2} 445 L57 445 L57 410 Z`);		
		}
	}
}
}, 200);	
});

rec3.mouseover(function (){		
	if (topx3 == 175 && botx3 == 200) {			
		var int = setInterval(frame, 1);
		function frame() {		
		if (topx3 == 210 && botx3 == 235 && tops3 == 205 && bots3 == 225) {
			clearInterval(int);			
		} else {
			topx3++;
			botx3++;
			tops3++;
			bots3++;
			rec3.attr('d', `M52 505 L${topx3} 505 L${botx3} 550 L52 550 L52 505 Z`);
			str3.attr('d', `M57 510 L${tops3} 510 L${bots3} 545 L57 545 L57 510 Z`);							
		}		
	}
}

});

rec3.mouseout(function (){					
		setTimeout(function() { 
		if (topx3 == 210 && botx3 == 235) {				
		let int2 = setInterval(frame, 1);
		function frame() {
		if (topx3 == 175 && botx3 == 200 && tops3 == 170 && bots3 == 190){
			clearInterval(int2);						
		} else {
			topx3--;
			botx3--;
			tops3--;
			bots3--;
			rec3.attr('d', `M52 505 L${topx3} 505 L${botx3} 550 L52 550 L52 505 Z`);
			str3.attr('d', `M57 510 L${tops3} 510 L${bots3} 545 L57 545 L57 510 Z`);			
		}
	}
}
}, 200);	
});

rec4.mouseover(function (){		
	if (topx4 == 175 && botx4 == 200) {			
		var int = setInterval(frame, 1);
		function frame() {		
		if (topx4 == 210 && botx4 == 235 && tops4 == 205 && bots4 == 225) {
			clearInterval(int);			
		} else {
			topx4++;
			botx4++;
			tops4++;
			bots4++;
			rec4.attr('d', `M52 605 L${topx4} 605 L${botx4} 650 L52 650 L52 605 Z`);
			str4.attr('d', `M57 610 L${tops4} 610 L${bots4} 645 L57 645 L57 610 Z`);							
		}		
	}
}

});

rec4.mouseout(function (){					
		setTimeout(function() { 
		if (topx4 == 210 && botx4 == 235) {				
		let int2 = setInterval(frame, 1);
		function frame() {
		if (topx4 == 175 && botx4 == 200 && tops4 == 170 && bots4 == 190){
			clearInterval(int2);						
		} else {
			topx4--;
			botx4--;
			tops4--;
			bots4--;
			rec4.attr('d', `M52 605 L${topx4} 605 L${botx4} 650 L52 650 L52 605 Z`);
			str4.attr('d', `M57 610 L${tops4} 610 L${bots4} 645 L57 645 L57 610 Z`);			
		}
	}
}
}, 200);	
});

rec5.mouseover(function (){		
	if (topx5 == 175 && botx5 == 200) {			
		var int = setInterval(frame, 1);
		function frame() {		
		if (topx5 == 210 && botx5 == 235 && tops5 == 205 && bots5 == 225) {
			clearInterval(int);			
		} else {
			topx5++;
			botx5++;
			tops5++;
			bots5++;
			rec5.attr('d', `M52 705 L${topx5} 705 L${botx5} 750 L52 750 L52 705 Z`);
			str5.attr('d', `M57 710 L${tops5} 710 L${bots5} 745 L57 745 L57 710 Z`);							
		}		
	}
}

});

rec5.mouseout(function (){					
		setTimeout(function() { 
		if (topx5 == 210 && botx5 == 235) {				
		let int2 = setInterval(frame, 1);
		function frame() {
		if (topx5 == 175 && botx5 == 200 && tops5 == 170 && bots5 == 190){
			clearInterval(int2);						
		} else {
			topx5--;
			botx5--;
			tops5--;
			bots5--;
			rec5.attr('d', `M52 705 L${topx5} 705 L${botx5} 750 L52 750 L52 705 Z`);
			str5.attr('d', `M57 710 L${tops5} 710 L${bots5} 745 L57 745 L57 710 Z`);			
		}
	}
}
}, 200);	
});




