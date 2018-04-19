var deerResume = angular.module('deerResume', ['ngRoute','wiz.markdown','ngNotify','angularLocalStorage']);

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


  function getInfo(pwd){
			var viewpass = '1111'; // 密码必须大于3位。留空则任何人可以访问
			var title = '标题';
			var subtitle = '子标题';
			var content = maincontent;
			
			var data = {};
			data.local = 1;
			data.errno = '0';
			data.show = 0;
			data.title = title;
			data.subtitle = subtitle;
			data.content = content;
			
			if(pwd == viewpass){
	  		data.show = 1;
	  	}
//			console.log(data.show);
			
			return data;
}
  $scope.resume = getInfo($scope.vpass);

  
  $scope.password = function( vpass )
  {
    $scope.vpass = vpass;
//  console.log($scope.vpass);
    window.location.reload();
  }

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
