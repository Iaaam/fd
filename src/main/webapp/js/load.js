$(function () {
    // 请求头部页面
    $.ajax({
        url: "pages/head.html",
        success: function (data) {
            $("#header").html(data);
        }
    });

    // 请求底部页面
    $.ajax({
        url: "pages/footer.html",
        success: function (data) {
            $("#footer").html(data);
        }
    });

    // 请求侧边导航栏
    $.ajax({
        url: "pages/slideBar.html",
        success: function (data) {
            $("#slideBar").html(data);
            loadTitle();
        }
    });


});

/**
 * @author: 隋亮亮
 * @description: ajax请求获取title
 * date: 2019-07-30
 */
function loadTitle() {
    $.ajax({
        url: "get/gettitle",
        success: function (data) {
            // 结果字符串
            var result = "<li class=\"header\">菜单</li>\n" +
                "\n" +
                "<li class='active' id=\"admin-index\"><a id='mainIndex' href='javascript:void(0);'><i class=\"fa fa-dashboard\"></i> <span>首页</span></a></li>";

            var str = "";
            for(var i = 0; i < data.length; i++){
                // 待拼接的字符串
                str = "<li class=\"treeview\">\n" +
                    "<a href=\"#\">\n" +
                    "<i class="+ "\""+data[i].iconAddr+ "\"" +"></i> <span>"+data[i].fName+"</span>\n" +
                    "<span class=\"pull-right-container\">\n" +
                    "<i class=\"fa fa-angle-left pull-right\"></i>\n" +
                    "</span>\n" +
                    "</a>\n" +
                    "<ul class=\"treeview-menu\">";
                result += str;
                // 拼接二级标题
                for(var j = 0; j < data[i].list.length; j++){
                    str = "<li id="+"\"" + data[i].list[j].lId +"\""+" >\n" +
                        "<a href='javascript:void(0);'>\n" +
                        "<i class=\"fa fa-circle-o\"></i> "+ data[i].list[j].sName +"\n" +
                        "</a>\n" +
                        "</li>";
                    result += str;
                }
                result += "</ul>\n" +
                    "</li>";
            }
            // TODO: 标题栏在以下注册点击事件
            // 加入到html中
            $("#titleWin").html(result);

            // 首页注册点击事件
            $("#admin-index").click(mainResult);

            // 仓库类别点击事件
            $("#archives-warehouse-details-chief-officer").click(warehouseResult);
        },
        dataType: "json"
    })
}

/**
 * @description: 首页点击事件处理函数
 * @author: 隋亮亮
 * @date: 2019-07-31
 * @returns {boolean}
 */
function mainResult() {
    // 加载主界面
    $.ajax({
        url: "pages/main.html",
        success: function (data) {
            $("#contain").html(data);
        }
    });
    markActive("admin-index");
    return false;
}

/**
 * @description: 清除所有激活状态
 * @author: 隋亮亮
 * @data: 2019-07-31
 * @param id
 */
function markActive(id){
    // 清楚所有active
    $("#admin-index").removeClass("active");
    $(".treeview").removeClass("active");
    $(".treeview-menu>li").removeClass("active");
    // 给指定id增加active
    $("#"+id).addClass("active");
}



