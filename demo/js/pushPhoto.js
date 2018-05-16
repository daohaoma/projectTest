var file;

var addImage = function(){
    file = jQuery('.file')[0].files[0];
    //添加图片路径到img src中进行预览
    jQuery('#iamge').attr('src',getObjectURL(file));
    //不同浏览器下的路径不同
     function getObjectURL(file) {
          var url = null;
          if (window.createObjectURL != undefined) { // basic
            url = window.createObjectURL(file);
          } else if (window.URL != undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file);
          } else if (window.webkitURL != undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file);
          }
          return url;
        }
}

var imgdata = new FormData();
 imgdata.append("img",file);
 //利用ajax上传
jQuery.ajax({
        type: "PUT",
        url: url,
        data: imgdata,
        async: false,
        cache: false,
        contentType: false,
        processData: false,

        success: function (data) {
         alert("上传成功");
        },
        error: function (jqXHR) {
          alert("上传失败")

        }
    })