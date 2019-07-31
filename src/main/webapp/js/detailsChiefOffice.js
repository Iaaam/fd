/**
 * @description: 首页回退函数
 * @author: 隋亮亮
 * @date: 2019-07-31
 */
function goBack() {
    // 重新加载回首页
    $("#contain").html("<div class=\"container-fluid\">\n" +
        "<div class=\"row\">\n" +
        "<div class=\"col-lg-12 delPadding\">\n" +
        "<img src='img/fdimg.jpg' alt=\"风电场图片\" title=\"风电场\">\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>");
    // 标记回首页
    markActive("admin-index");
}

/**
 * @description: ajax请求仓库零件
 * @author: 隋亮亮
 * @date: 2019-07-31
 */
function loadStoreHouse() {
    // 获取下拉框的当前值
    var val = $("#selectVal").val();
    $.get({
        url: "storeHouse/findAllComp",
        data: {
            startPage: 1,
            pageSize: val,
        },
        success: function (data) {
            // 设置风电场名称
            $("#fdSpan").html(data.list[0].fdMess.name);
            var result = "";
            for (var i = 0; i < data.list.length; i++){
                if(data.list[i].num < data.list[i].secNum){
                    result += "<tr class='danger'>\n" +
                        "<td>"+(i+1)+"</td>\n" +
                        "<td>"+data.list[i].component.name+"</td>\n" +
                        "<td>"+ data.list[i].component.type +"</td>\n" +
                        "<td>" +data.list[i].num+ "</td>\n" +
                        "<td>" +data.list[i].secNum+ "</td>\n" +
                        "<td>"+ data.list[i].component.unit +"</td>\n" +
                        "<td>"+data.list[i].mark+"</td>\n" +
                        "</tr>"
                }else{
                    result += "<tr>\n" +
                        "<td>"+(i+1)+"</td>\n" +
                        "<td>"+data.list[i].component.name+"</td>\n" +
                        "<td>"+ data.list[i].component.type +"</td>\n" +
                        "<td>" +data.list[i].num+ "</td>\n" +
                        "<td>" +data.list[i].secNum+ "</td>\n" +
                        "<td>"+ data.list[i].component.unit +"</td>\n" +
                        "<td>"+data.list[i].mark+"</td>\n" +
                        "</tr>"
                }

            }

            // 请求隐藏域内的表单
            $.ajax({
                url: "storeHouse/findAllComp",
                data: {
                    startPage: 1,
                    pageSize: data.total
                },
                success: function (data_cp) {
                    var str = "";
                    for (var i = 0; i < data_cp.list.length; i++){
                        str += "<tr>\n" +
                            "<td>"+(i+1)+"</td>\n" +
                            "<td>"+data_cp.list[i].component.name+"</td>\n" +
                            "<td>"+ data_cp.list[i].component.type +"</td>\n" +
                            "<td>" +data_cp.list[i].num+ "</td>\n" +
                            "<td>" +data_cp.list[i].secNum+ "</td>\n" +
                            "<td>"+ data_cp.list[i].component.unit +"</td>\n" +
                            "<td>"+data_cp.list[i].mark+"</td>\n" +
                            "</tr>";

                    }

                    $("#storeHouseMess_hidden").html(str);
                }
            });

            // 改变表单内容
            $("#storeHouseMess").html(result);
            // 改变总条数
            $("#totalPages").html(data.pages);
            // 改变总记录数
            $("#totalCount").html(data.total);

            // 拼接分页条
            result = "<li><a href='javascript:getPage(1,"+val+")' aria-label=\"Previous\">首页</a></li>\n" +
                "<li><a href='javascript:getPage(1,"+val+")'>上一页</a></li>";

            var begin = 1;
            var end = 10;


            for(var i = begin; i <= end; i++){
                // 分页条等于当前页数就做标记
                if(i <= 1){
                    result += "<li class='active'><a href='javascript:getPage("+i+","+val+")'>"+i+"</a></li>";
                }else{
                    result += "<li><a href='javascript:getPage("+i+","+val+")'>"+i+"</a></li>";
                }
            }
            result += "<li><a href='javascript:getPage(2,"+val+")'>下一页</a></li>\n" +
                "<li><a href='javascript:getPage("+data.pages+","+val+")' aria-label=\"Next\">尾页</a></li>";
            // 写回分页条
            $("#pageCount").html(result);
        }
    });

    // 下拉框注册点击事件
    $("#selectVal").change(selectChange);
    // 打印按钮注册打印事件
    $("#printTable").click(printTable);
}

/**
 * @description: 点击标题动态请求界面
 * @author: 隋亮亮
 * @date: 2019-07-31
 * @returns {boolean}
 */
function warehouseResult() {
    // 清除所有激活active样式
    markActive("archives-warehouse-details-chief-officer");
    $.ajax({
        url: "pages/archives-warehouse-details-chief-officer.html",
        success: function (data) {
            $("#contain").html(data);
            loadStoreHouse();
        }
    });
    // 阻止a标签默认事件
    return false;
}

/**
 * @description: 分页条点击
 * @author: 隋亮亮
 * @date: 2019-07-31
 * @param startPage
 * @param pageSize
 */
function getPage(startPage, pageSize) {
    $.ajax({
        url: "storeHouse/findAllComp",
        data: {
            startPage: startPage,
            pageSize: pageSize,
        },
        success: function (data) {
            // 保证前5后4
            var begin = 1;
            var end = 10;

            if(startPage < 6){
                begin = 1;
            }else if(startPage > 6 && startPage <= data.pages - 4){
                begin = startPage - 5;
                end = startPage + 4;
            }else if(startPage > data.pages-4){
                begin = data.pages - 9;
                end = data.pages;
            }
            // 生成分页条
            ajaxData(startPage, begin,end, pageSize,data);

        }
    })
}

/**
 * @description: 分页条点击动态获取界面
 * @author: 隋亮亮
 * @date: 2019-07-31
 * @param startPage
 * @param begin
 * @param end
 * @param pageSize
 * @param data
 */
function ajaxData(startPage,begin ,end, pageSize, data) {
    // 判断分页条极端情况
    if(startPage > data.pages){
        startPage = data.pages;
    }
    if(startPage <= 0){
        startPage = 1;
    }
    var result = "";
    for (var i = 0; i < data.list.length; i++){
        if(data.list[i].num < data.list[i].secNum){
            result += "<tr class='danger'>\n" +
                "<td>"+(i+1)+"</td>\n" +
                "<td>"+data.list[i].component.name+"</td>\n" +
                "<td>"+ data.list[i].component.type +"</td>\n" +
                "<td>" +data.list[i].num+ "</td>\n" +
                "<td>" +data.list[i].secNum+ "</td>\n" +
                "<td>"+ data.list[i].component.unit +"</td>\n" +
                "<td>"+data.list[i].mark+"</td>\n" +
                "</tr>"
        }else{
            result += "<tr>\n" +
                "<td>"+(i+1)+"</td>\n" +
                "<td>"+data.list[i].component.name+"</td>\n" +
                "<td>"+ data.list[i].component.type +"</td>\n" +
                "<td>" +data.list[i].num+ "</td>\n" +
                "<td>" +data.list[i].secNum+ "</td>\n" +
                "<td>"+ data.list[i].component.unit +"</td>\n" +
                "<td>"+data.list[i].mark+"</td>\n" +
                "</tr>"
        }

    }
    // 修改表格内容
    $("#storeHouseMess").html(result);
    // 修改总页数
    $("#totalPages").html(data.pages);
    // 修改总记录数
    $("#totalCount").html(data.total);

    // 拼接分页条
    result = "<li><a href='javascript:getPage(1,"+pageSize+");' aria-label=\"Previous\">首页</a></li>\n" +
        "<li><a href='javascript:getPage("+(startPage-1)+","+pageSize+")'>上一页</a></li>"
    for(var i = begin; i <= end; i++){
        if(i == startPage){
            result += "<li class='active'><a href='javascript:getPage("+i+","+pageSize+")'>"+i+"</a></li>";
        }else{
            result += "<li><a href='javascript:getPage("+i+","+pageSize+")'>"+i+"</a></li>";
        }

    }
    result += "<li><a href='javascript:getPage("+(startPage+1)+","+pageSize+")'>下一页</a></li>\n" +
        "<li><a href='javascript:getPage("+(data.pages)+","+pageSize+")' aria-label=\"Next\">尾页</a></li>";
    $("#pageCount").html(result);
}

/**
 * @description: 下拉框改变
 * @author: 隋亮亮
 * @date: 2019-07-31
 */
function selectChange() {
    // 直接请求新界面
    getPage(1,  $("#selectVal").val());
}

/**
 * @description: 打印功能
 * @author: 隋亮亮
 * @date: 2019-07-31
 */
function printTable() {
    $("#print").print({
        globalStyles: true,
        mediaPrint: false,
        stylesheet: null,
        noPrintSelector: ".no-print",
        iframe: true,
        append: null,
        prepend: null,
        manuallyCopyFormValues: true,
        deferred: $.Deferred()
    });
}

