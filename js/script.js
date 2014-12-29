$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
    var regM = /ipod|ipad|iphone/gi,
     result = ua.match(regM)
    if(!result) {
     $('.sf-menu li').each(function(){
      if($(">ul", this)[0]){
       $(">a", this).toggle(
        function(){
         return false;
        },
        function(){
         window.location.href = $(this).attr("href");
        }
       );
      } 
     })
    }
   } 
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')


// select

$.extend({  
 styledSelect : function(){

   $('.styled_select').each(function(){

    var $this = $(this),
     list = $this.children('.options_list').removeClass('d_none'),
     title = $this.children('.select_title').removeClass('d_none'),
     options = $this.children('select').children('option'),
     len = options.length,
     transitionIn = $this.data('transitionIn'),
     transitionOut = $this.data('transitionOut');

     options.parent().hide();

     for(var i = 0; i < len; i++){
      list.append('<li class="tr_delay color_dark sc_hover">'+options.eq(i).val()+'</li>');
     }

     title.add(list.children('li')).on('click',function(){
      list.toggleClass('active visible hidden');
      title.toggleClass('active');
      if(list.parent().hasClass('active')){
       setTimeout(function(){
        list.parent().removeClass('active');
        return false;
       },400); // delay should be equal duration in class .tr_all
      }
      list.parent().addClass('active');
     });

     list.on('click','li',function(){
      var val = $(this).text();
      options.parent().val(val);
      title.text(val);
     });

   });

  }});

$(document).ready(function(){
  // imput file
  $('.select_file').children('a').on('click',function(){$(this).prev().trigger('click')});
  $('.select_file').children('span').on('click',function(){$(this).parent().find(".file_inp").trigger('click')});
  $('.select_file').children('input').on('change',function(){$(this).siblings("span").text($(this).val())});
});