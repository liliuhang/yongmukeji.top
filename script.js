<!DOCTYPE html>  
<html lang="en">  
<head>  
<meta charset="UTF-8">  
<title>服务条款和隐私政策示例</title>  
<script>  
// 确保在文档加载完成后执行以下JavaScript代码  
document.addEventListener('DOMContentLoaded', function() {  
    // 获取服务条款链接  
    var termsLink = document.getElementById('termsLink');  
    // 给服务条款链接添加点击事件监听器  
    termsLink.addEventListener('click', function(event) {  
        // 阻止链接的默认行为（即不跳转到其他页面）  
        event.preventDefault();  
        // 显示弹窗  
        alert('未编写');  
    });  
  
    // 同样的，获取隐私政策链接并添加事件监听器  
    var privacyLink = document.getElementById('privacyLink');  
    privacyLink.addEventListener('click', function(event) {  
        event.preventDefault();  
        alert('未编写');  
    });  
});  
</script>  
</head>  
<body>  
  
<p>请阅读以下条款：</p>  
<a href="#" id="termsLink">服务条款</a>  
<a href="#" id="privacyLink">隐私政策</a>  
  
</body>  
</html>