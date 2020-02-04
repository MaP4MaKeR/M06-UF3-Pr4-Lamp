$().ready(function () {

    $("#lamp").on({
        click : function() {
            if( $("#lamp").attr('src') == "img/lamp_off.jpg" ) 
            {             
                $("#lamp").attr('src', 'img/lamp_on.jpg');     
            }  
            else {
                $("#lamp").attr('src', 'img/lamp_off.jpg');
            }
        }
    });
});
