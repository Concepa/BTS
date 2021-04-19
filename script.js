function cargar(pagina){
    
    var esperar=1000;
    $.ajax({
        url:pagina,
        beforeSend: function(){
           alert("cargando...");
            
        },
        success: function (data){
            setTimeout(function(){
                
                $("#main").html(data);
           
                
            }, esperar
                    
                    );
            
            
        }
        
        
    }
            
            );
    
}