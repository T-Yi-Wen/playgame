//var myhref="http://192.168.0.222:8091"  //zhang
var myhref="http://192.168.0.176:8091/"  //jiang



function myat(i,v){
	if(i==0){
		var myimg="https://ijobway.oss-cn-shanghai.aliyuncs.com/05_spjh/image/dd78f5829c6e8b14b2be6a58e884cbf3.png"
	}else{
		var myimg="https://ijobway.oss-cn-shanghai.aliyuncs.com/05_spjh/image/f59963085fe79485b452d6300c52c3b5.png"
	}
	var html=document.createElement("div")
	html.classList.add("myalert-zzc")
//	'<div id="myalert-zzc" style="display:block">'+
	html.innerHTML=	'<div id="myalert-box">'+
			'<div class="myalert-tit">温馨提示 </div>'+
			'<div class="myalert-c-box">'+
				'<span>'+
					'<img src="'+myimg+'">'+
				'</span>'+
				'<span>'+v+'</span>'+
			'</div>'+
			'<div class="myalert-btn" onclick="myatxx()">确定</div>'+
		'</div>'
//	'</div>'
	
	document.getElementsByTagName("body")[0].appendChild(html)
}

function myatxx(){
	document.getElementsByClassName("myalert-zzc")[0].remove();
}
