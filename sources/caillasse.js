if ($(".action_print_ann").length>0) { // detail d'une annonce
	var idAnnonce = $(".action_print_ann").attr("rel").split("/")[2];
	$(".read_more").after("<img src='http://petitscailloux.com/Graph.aspx?bFrame=true&sId="+idAnnonce+"'/>");
} else if ($(".acc_detail").length>0) { //resultat de recherche
	$(".acc_detail").each(function (index) {
		url =$("a",this).attr("href");
		/.*\/(.*?)\.htm/.exec(url);
		$(this).after("<img src='http://petitscailloux.com/Graph.aspx?bFrame=true&sId="+ RegExp.$1 +"'/>");
	});
}