function saveLocal(pram){
    localStorage.setItem('targetId',pram)
}

$(function(){
     var targetId =  localStorage.getItem('targetId');
     if(targetId){
         var dom = '#'+targetId;
         if($(dom)){
             $("html,body").animate({ scrollTop:$(dom).offset().top});
         }
         localStorage.removeItem('targetId');
     }

    var test = /_min\./
    //遍历所有的图片节点
    $("img").each(function(index,obj){
        if(test.test($(this).attr("src"))){
            var reSrc = $(this).attr("src").replace(test,".");
            $(this).attr("src",reSrc)
        }
    })


})

