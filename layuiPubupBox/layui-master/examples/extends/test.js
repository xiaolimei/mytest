// 入口文件

layui.define(['layer', 'form'], function(exports){
    var layer = layui.layer
        ,form = layui.form;

   // layer.msg('Hello World');
    //console.log("ok");

    exports('indexTest', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});
