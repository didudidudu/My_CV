var deerResume = angular.module('deerResume', ['ngRoute','wiz.markdown','ngNotify','angularLocalStorage']);

//var baseurl = 'http://cvbox.sinaapp.com/'; // 使用SAE托管简历数据
var baseurl = 'https://didudidudu.github.io/My_CV/js/data.js'; // 使用本地文件托管简历数据，本地模式下，不支持在线编辑


deerResume.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/admin', {
        templateUrl: 'admin.html',
        controller: 'adminCtrl'
      }).
      when('/resume', {
        templateUrl: 'resume.html',
        controller: 'resumeCtrl'
      }).
      otherwise({
        redirectTo: '/resume'
      });
  }]);

deerResume.controller('resumeCtrl', function ($scope,$http,storage) {

  storage.bind($scope,'vpass');

  var url = '';
  if( $scope.vpass && $scope.vpass.length > 3 )
    url = baseurl+"?a=show&domain="+encodeURIComponent(window.location)+"&vpass="+encodeURIComponent($scope.vpass);
  else 
    url = baseurl+"?a=show&domain="+encodeURIComponent(window.location);

  function getInfo(){
	var viewpass = '1234'; // 密码必须大于3位。留空则任何人可以访问
	var title = '标题';
	var subtitle = '子标题';
	var content = `
# 个人信息

 - 冷熊/男/1990 
 - 本科/北极大学计算机系 
 - 工作年限：3年
 - 微博：[@Easy](http://weibo.com/easy) （如果没有技术相关内容，也可以不放）
 - 技术博客：http://old.ftqq.com ( 使用GitHub Host的Big较高  )
 - Github：http://github.com/easychen ( 有原创repo的Github帐号会极大的提升你的个人品牌  )

 - 期望职位：PHP高级程序员，应用架构师
 - 期望薪资：税前月薪15k~20k，特别喜欢的公司可例外
 - 期望城市：北京


# 联系方式

（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）

- 手机：135.... （如果是外地手机，可注明。如经常关机，要写上最优联系时间）
- Email：goodman@gmail.com （虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用G，非要用的话，不要用数字邮箱名）
- QQ/微信号：6...（提供一个通过网络可以联系到你的方式）


# 工作经历
（工作经历按逆序排列，最新的在最前边，按公司做一级分组，公司内按二级分组）

## ABC公司 （ 2012年9月 ~ 2014年9月 ）

### DEF项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### GHI项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### 其他项目

（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）

  
## JKL公司 （ 2010年3月 ~ 2012年8月 ）

### MNO项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### PQR项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### 其他项目

（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）
  
  
# 开源项目和作品
（这一段用于放置工作以外的、可证明你的能力的材料）

## 开源项目
（对于程序员来讲，没有什么比Show me the code能有说服力了）

  - [STU](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明
  - [WXYZ](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明

## 技术文章
（挑选你写作或翻译的技术文章，好的文章可以从侧面证实你的表达和沟通能力，也帮助招聘方更了解你）

- [一个产品经理眼中的云计算：前生今世和未来](http://get.jobdeer.com/706.get)
- [来自HeroKu的HTTP API 设计指南(翻译文章)](http://get.jobdeer.com/343.get) （ 好的翻译文章可以侧证你对英文技术文档的阅读能力）

## 演讲和讲义
（放置你代表公司在一些技术会议上做过的演讲，以及你在公司分享时制作的讲义）

  - 2014架构师大会演讲：[如何通过Docker优化内部开发](http://ftqq.com)
  - 9月公司内部分享：[云计算的前生今世](http://ftqq.com)
    
    
# 技能清单
（我一般主张将技能清单写入到工作经历里边去。不过很难完整，所以有这么一段也不错）

以下均为我熟练使用的技能

- Web开发：PHP/Hack/Node
- Web框架：ThinkPHP/Yaf/Yii/Lavarel/LazyPHP
- 前端框架：Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic
- 前端工具：Bower/Gulp/SaSS/LeSS/PhoneGap
- 数据库相关：MySQL/PgSQL/PDO/SQLite
- 版本管理、文档和自动化部署工具：Svn/Git/PHPDoc/Phing/Composer
- 单元测试：PHPUnit/SimpleTest/Qunit
- 云和开放平台：SAE/BAE/AWS/微博开放平台/微信应用开发
      `;
	
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

  
  $scope.resume = getInfo();
  console.log($scope.resume);
//   $http.get(url).success(function( data ){
//       $scope.resume = data;
//       console.log(data);
//     }); 

  
  $scope.password = function( vpass )
  {
    $scope.vpass = vpass;
    window.location.reload();
  }

});

deerResume.controller('adminCtrl', function ($scope,$http,storage,ngNotify) {

  storage.bind($scope,'wpass');
  storage.bind($scope,'vpass');
  storage.bind($scope,'apass');
  storage.bind($scope,'resume.content');

  var url = '';
  if( $scope.vpass && $scope.vpass.length > 3 )
    url = baseurl+"?a=show&domain="+encodeURIComponent(window.location)+"&vpass="+encodeURIComponent($scope.vpass);
  else 
    url = baseurl+"?a=show&domain="+encodeURIComponent(window.location);

  $http.get(url).success(function( data ){
      var oldcontent = $scope.resume.content;
      $scope.resume = data;
      $scope.resume.admin_password = $scope.apass;
      $scope.resume.view_password = $scope.wpass;
      if( oldcontent.length > 0  ) $scope.resume.content = oldcontent;
    }); 

  $scope.save = function( item )
  {
    $http
    ({
      method: 'POST',
      url: baseurl+"?a=update&domain="+encodeURIComponent(window.location),
      data: $.param({'title':item.title,'subtitle':item.subtitle,'content':item.content,'view_password':item.view_password,'admin_password':item.admin_password}),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(
      function( data ){
        //$scope.notice('');
        if( data.errno == 0 )
        {
          $scope.apass = item.admin_password;
          $scope.wpass = item.view_password;
          ngNotify.set(data.notice,'success');
          
        }
        else
        {
          ngNotify.set(data.error,'error');
        }
      }
          
    );
  };

  // 请求云端数据，有三种情况：
  // 1 云端没有任何记录，这个时候显示默认模板
  // 2 云端已经存在数据，且设置有阅读密码，这时候提示输入密码
  
  // 右上角留入口


});

// ============
function makepdf()
{
  //post('http://pdf.ftqq.com',{'title':$('#drtitle').html(),'subtitle':$('#drsubtitle').html(),'content':$('#cvcontent').html(),'pdfkey':'jobdeersocool'});
  $("#hform [name=title]").val($('#drtitle').html());
  $("#hform [name=subtitle]").val($('#drsubtitle').html());
  $("#hform [name=content]").val($('#cvcontent').html());
  $("#hform [name=pdfkey]").val('jobdeersocool');
  $("#hform").submit();
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    var form = jQuery('<form/>', {
    'id':'hform',
    'method':method ,
    'action':path,
    'target':'_blank'
    });

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            
            var hiddenField = jQuery('<input/>', {
            'type':'hidden' ,
            'name':key,
            'value':params[key]
            });

            form.appendChild(hiddenField);
         }
    }



    form.submit();
}


function pdf()
{
  var doc = new jsPDF();
  var specialElementHandlers = {
  '.action-bar': function(element, renderer){
      return true;
    }
  };

  doc.fromHTML($('#resume_body').get(0), 15, 15, {
    'width': 170, 
    'elementHandlers': specialElementHandlers
  });

  doc.output("dataurlnewwindow");
}
