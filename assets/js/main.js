function hideP(){
	var parrafos = Array.from(document.getElementsByClassName("parrafos"));

	var extintion= document.getElementById("extintion");
	extintion.addEventListener("click",function(){
		parrafos.forEach(function(p){
			p.classList.toggle("esconder");
		});
	});

	var button = document.getElementById("origen");
	button.addEventListener("click",function(){
		parrafos.forEach(function(p){
			p.classList.remove("esconder")
		});
	});
}
hideP();

function hideImg(){
	var images = Array.from(document.getElementsByClassName("images"));
	var eliminar = Array.from(document.getElementsByClassName("fa"));
	eliminar.forEach(function(el){
		el.addEventListener("click", function(){
			images.forEach(function(i){
				i.classList.toggle("esconder");
			});
		});
	})

	var button= document.getElementById("restaurar");
	button.addEventListener("click", function(r){
		images.forEach(function(r){
			r.classList.remove("esconder")
		})
	})
}
hideImg();