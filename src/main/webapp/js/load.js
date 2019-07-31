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
            // 加入到html中
            $("#titleWin").html(result);

            // 首页注册点击事件
            $("#admin-index").click(mainResult);

            // 仓库类别点击事件
            $("#archives-warehouse-details-officer").click(warehouseResult);
        },
        dataType: "json"
    })
}

/**
 * ajax请求仓库零件
 */
function loadStoreHouse() {
    $.get({
        url: "storeHouse/findAllComp",
        success: function (data) {
            var result = "";
            for (var i = 0; i < data.length; i++){
                result += "<tr>\n" +
                    "<td><input name=\"ids\" type=\"checkbox\"></td>\n" +
                    "<td>"+(i+1)+"</td>\n" +
                    "<td>"+data[i].component.name+"</td>\n" +
                    "<td>"+ data[i].component.type +"</td>\n" +
                    "<td>" +data[i].num+ "</td>\n" +
                    "<td>"+ data[i].component.unit +"</td>\n" +
                    "<td>"+data[i].mark+"</td>\n" +
                    "</tr>"
            }

            $("#storeHouseMess").html(result);
        }
    })
}


/**
 * 首页点击事件处理函数
 * @returns {boolean}
 */
function mainResult() {
     $.ajax({
         url: "pages/main.html",
         success: function (data) {
             $("#contain").html(data);
         }
     });
    markActive("admin-index");
    return false;
}

function warehouseResult() {
    markActive("archives-warehouse-details-officer");
    $.ajax({
        url: "pages/archives-warehouse-details-officer.html",
        success: function (data) {
            $("#contain").html(data);
            loadStoreHouse()
        }
    });
    return false;
}


/**
 * 清除所有激活状态
 * @param id
 */
function markActive(id){
    $("#admin-index").removeClass("active");
    $(".treeview").removeClass("active");
    $(".treeview-menu>li").removeClass("active");
    $("#"+id).addClass("active");
}



