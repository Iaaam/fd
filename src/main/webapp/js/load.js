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
            var result = "";
            for(var i = 0; i < data.length; i++){
                // 待拼接的字符串
                var str = "<li class=\"treeview\">\n" +
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
                    str = "<li id=\"archives-warehouse-details-officer\" >\n" +
                        "<a href=\"archives-warehouse-details-officer.html\">\n" +
                        "<i class=\"fa fa-circle-o\"></i> "+ data[i].list[j].sName +"\n" +
                        "</a>\n" +
                        "</li>";
                    result += str;
                }
                result += "</ul>\n" +
                    "</li>";
            }
            // 加入到html中
            $("#titleWin").html(result);
        },
        dataType: "json"
    })
}

