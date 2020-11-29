const isNumber = function(string){
    if(string == null){
        return false;
    }
    try{
        const j = parseInt(string);
    }catch{
        return false;
    }
    return true;
}

$("#registerForm").submit(function(){

    const age = $('input[name=age]').val();
    const parseAge = parseInt(age);
    if(isNaN(parseAge)){
        $('#warningMessage').empty();
        $('#warningMessage').append("Sua idade deve ser um número");
    }
    if(!isNaN(parseAge) && parseAge< 18){
        $('#warningMessage').empty();
        $('#warningMessage').append("Você deve ser maior de 18 anos!");
    }
    if(!isNaN(parseAge) && parseAge >= 18){
        $('#warningMessage').empty();
    }

});

$('#getDatabase').click(function(){
    $('#databaseTable').empty();
    $.ajax({
        url: "http://localhost:8081/getDatabase",
        method:"GET",
        dataType:"json",
        success:function(data){
            console.log(data);
            $('#databaseTable').append('<tr><td>' + 'Nome' + '</td><td>' + 'Idade' + '</td></tr>')
            data.forEach(element => {
                $('#databaseTable').append('<tr><td>' + element.name + '</td><td>' + element.age + '</td></tr>')
            })
        }
    })
})