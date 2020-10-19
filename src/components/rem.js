/* function setRem(){
   const designWidth = 750
  // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
  //设置根元素字体大小
    htmlDom.style.fontSize= ((htmlWidth / designWidth) * 100) + 'px';
}
setRem()
window.onresize = function(){
    setRem()
} */
//设计窗口字体
(function(doc, win) {//      用原生方法获取用户设置的浏览器的字体大小(兼容ie)
	if(doc.documentElement.currentStyle) {            
		var user_webset_font=doc.documentElement.currentStyle['fontSize'];  
	}else {            
		var user_webset_font=getComputedStyle(doc.documentElement,false)['fontSize'];     
//		console.log("user_webset_font" + user_webset_font);
	} 
	//    取整后与默认16px的比例系数
	var xs=parseFloat(user_webset_font)/16;
	//    设置rem的js设置的字体大小       
	var view_jsset_font,result_font;                 
	var docEl = doc.documentElement,        
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',        
	clientWidth,        
	recalc = function() {            
		clientWidth = docEl.clientWidth;            
		if(!clientWidth) return;            
		if(!doc.addEventListener) return;         
		if(clientWidth < 750){
			//  设置rem的js设置的字体大小 
			// (document.documentElement.clientWidth / baseWidth(375) * baseSize(75)).toFixed(2)              
			view_jsset_font = 100 * (clientWidth / 1000);//1000
			//  最终的字体大小为rem字体/系数                
			result_font = view_jsset_font/xs;
			//  设置根字体大小                
			docEl.style.fontSize = result_font + 'px';               
		}else{                         
			docEl.style.fontSize = 56 + 'px'; 
		}       
	};                 
	win.addEventListener(resizeEvt, recalc, false);    
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);