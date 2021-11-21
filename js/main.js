

$(".busra").click(()=>{
    $(".busra").css("clip-path","polygon(0 0, 100% 0%, 100% 100%, 0% 100%)");
    $(".busra h2").css("bottom","50vh");
    $(".busra h2").css("right","50vw");
    setTimeout("window.open('../page/main.html','_self')",500);
})
$(".berk").click(()=>{
    $(".berk").css("clip-path","polygon(0 0, 100% 0%, 100% 100%, 0% 100%)");
    $(".busra").css("clip-path","polygon(100% 0, 100% 0, 100% 100%, 100% 100%)");
    $(".berk h2").css("top","50vh");
    $(".berk h2").css("left","50vw");
    setTimeout("window.open('../page/berk.html','_self')",500);
})

$(".berk").hover(()=>{
    $(".berk").css("clip-path","polygon(0 0, 100% 0, 20% 100%, 0% 100%)");
    $(".busra").css("clip-path","polygon(100% 0, 100% 0, 100% 100%, 20% 100%)");
})
$(".berk").mouseleave(()=>{
    $(".berk").css("clip-path","polygon(0 0, 88% 0, 12% 100%, 0% 100%)");
    $(".busra").css("clip-path","polygon(88% 0, 100% 0, 100% 100%, 12% 100%)");
})
$(".busra").hover(()=>{
    $(".berk").css("clip-path","polygon(0 0, 80% 0, 0 100%, 0 100%)");
    $(".busra").css("clip-path","polygon(80% 0, 100% 0, 100% 100%, 0 100%)");
})
$(".busra").mouseleave(()=>{
    $(".berk").css("clip-path","polygon(0 0, 88% 0, 12% 100%, 0% 100%)");
    $(".busra").css("clip-path","polygon(88% 0, 100% 0, 100% 100%, 12% 100%)");
})



