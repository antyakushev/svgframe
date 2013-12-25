(function ( $ ) {
	$.fn.svgframe = function(){
		return this.each(function(){
			var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
			var pr = {
				src: $(this).attr('src'), 
				width: $(this).width(),
				height: $(this).height(),
				shape: $(this).data('shape'),
				border: $(this).data('border')||5
			};

			pr._width = Math.max.apply(this,pr.shape.replace(/,\d+/g,'').split(' '));
			pr._height = Math.max.apply(this,pr.shape.replace(/\d+,/g,'').split(' '));

			var fr='';
			fr+='<svg preserveAspectRatio="xMinYMin slice" width="'+(pr._width+60)+'px" height="'+(pr._height+60)+'px" viewBox="-30 -30 '+(pr._width+60)+' '+(pr._height+60)+'" id="photo_frame'+id+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
			fr+='<defs><filter id="F'+id+'"><feGaussianBlur stdDeviation="10" /></filter>';
			fr+='<clipPath id="clipPath'+id+'"><path id="path'+id+'" d="M'+pr.shape+'z"/></clipPath></defs>';
			fr+='<use viewBox="-30 -30" fill="black" filter="url(#F'+id+')" xlink:href = "#path'+id+'"/>';
			fr+='<use stroke-width="'+pr.border*2+'" stroke="white" xlink:href = "#path'+id+'"/>';  
			fr+='<image x="0" y="0" width="'+pr.width+'" height="'+pr.height+'" clip-path="url(#clipPath'+id+')" xlink:href="'+pr.src+'"/>';   
		    fr+='</svg>';
		    $(this).after(fr);
	    });
	}
}( jQuery ));

  
