/*
* JQuery Only Number v1.0
* https://github.com/jmlavoier/jquery.onlynumber.git
*/

$.fn.onlynumber = (function(param) {
	
	var thisObj = $(this);
	
    
    var keyuponlynumber = function(e){
        var keyCode = e.keyCode;
        var exp     = /[^0-9]/g;
        var valor   = thisObj.val();
        
        //Não executa se clicou nas setas, enter, delete e backspace
        if (!(keyCode >= 37 && keyCode <= 40) && keyCode != 8 && keyCode != 46 && keyCode != 13){            
            thisObj.val(valor.replace(exp,""));
        }
    }
	
	
	if (param == 'destroy') { 
        //Se é para acabar com o evento
        thisObj.unbind('keyup');
	}else{ 
        //Senão cria evento
		thisObj.bind('keyup',keyuponlynumber);
	}
    	
});




