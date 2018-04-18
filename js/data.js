
function getInfo(){
	var viewpass = '1234'; // 密码必须大于3位。留空则任何人可以访问
	var title = '标题';
	var subtitle = '子标题';
	var content = 'MarkDown';
	
	var data = {};
	
	data.local = 1;
		
		data.errno = '0';
		data.show = 1;
		data.title = title;
		data.subtitle = subtitle;
		data.content = content;
	
	
	return data;
	//console.log(data);
}
