$(document).ready(function(){
	
	// this will get the full URL at the address bar
    var url = window.location.href; 

    // passes on every "a" tag 
    $("nav a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });
  
  $("a.button").click(function(){
    alert("その他のご希望は応相談です.ホールケーキのご注文は５日前までにお願いします.日程によってはお受けできない場合もありますのでご了承下さい。");
  });
  
  $('#slider').nivoSlider();
	
  $("#slider1").responsiveSlides({
        maxwidth: 100,
        speed: 800
      });
	  
   setTimeout(function () {
        $('.hiddenDiv').show('fast', function () {
            $(this).append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.9822887761597!2d136.9242967510737!3d35.18199398021705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003711c6ee712c5%3A0x7f17bbcad44d5c2d!2z44CSNDYxLTAwMjU!5e0!3m2!1sja!2sjp!4v1550027769087" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
        });
    }, 1000);
	

    // this will get the full URL at the address bar
    var url = window.location.href; 

    // passes on every "a" tag 
    $("#sub-header a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });

  
});