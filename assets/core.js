function $E(tag,el){return $(el||document).getElement(tag)}

window.addEvents({
	domready:function(){
		$extend(kina,{bg:$E('img',$E('#bg',db=$(document.body))),timer:(Browser.Engine.gecko||Browser.Engine.webkit)?null:setInterval(kina.fix,200),menu:$('menu')});gal.call(gal);
		if($$('dl')[0]){var hs=$$('dt'),fx=hs.map(function(el){return new Fx.Morph(el,{wait:false})});new Accordion(hs,hs.getNext(),{opacity:false,onActive:function(head,box){if($chk(this.active))fx[this.active].start({'color':'#000','backgroundColor':'#fff'});fx[this.active=this.togglers.indexOf(head)].start({'color':'#fff','backgroundColor':'#000'})}})}
	},
	keypress:function(e){var e=new Event(e);if(e.key=='down'||e.key=='right')e.stop()}
});

kina={
	doc:{x:0,y:0},
	fix:function(){if(kina.bg.complete&&(db.offsetWidth!=kina.doc.x||db.offsetHeight!=kina.doc.y||kina.fix.src!=kina.bg.src)){var bg=kina.bg.getSize();kina.doc={x:db.offsetWidth,y:db.offsetHeight};kina.fix.src==kina.bg.src||$extend(kina.fix,{p:bg.x/bg.y,src:kina.bg.src});kina.bg.setStyles({width:(bg.y=kina.doc.x>(bg.x=Math.round(kina.doc.y*kina.fix.p)))?kina.doc.x:bg.x,height:bg.y?Math.round(kina.doc.x/kina.fix.p):kina.doc.y})}}
}

$extend(gal=function(){
	if(gal.el=$('photos')){$extend(this,{fx:new Fx.Tween(kina.menu,'bottom'),float:$('float').addEvent('click',gal.key)}).el.getElements('a').addEvent('click',this.swap)[0].addClass('cur');document.addEvents({mousemove:gal.mouse,keydown:gal.key})}
},{
	mouse:function(e){var w=db.offsetWidth/2,x=e.client.x,y=db.offsetHeight-e.client.y,el=gal.float;if(y<(gal.menu?85:20)){$clear(gal.timer);gal.menu||(gal.menu=gal.fx.start(20))}else{if(gal.menu)gal.menu=!(gal.timer=setTimeout(function(){gal.fx.start(-55)},700));else{if(y<85&&el.className)el.className=el.style.display='';else if(y>85){if(!el.className)el.style.display='block';if(x>w&&el.className!='nxt')el.className='nxt';else if(x<w&&el.className!='prv')el.className='prv';with(el.style){left=x-20+'px';top=e.client.y-10+'px'}}}}},
	swap:function(){$E('.cur',gal.el).removeClass('cur');kina.bg.src=this.addClass('cur').getElement('img').src},
	key:function(e){var nxt=e.key?(e.code==39):(gal.float.className=='nxt');return (e.key&&e.code!=37&&e.code!=39)?false:gal.swap.call($E('.cur',gal.el)[nxt?'getNext':'getPrevious']()||gal.el[nxt?'getFirst':'getLast']())},
	menu:true
});