// 页面总页数
var totalPages = 0;

/**
 * @description: 回退函数
 * @author: 隋亮亮
 * @date: 2019-07-31
 */
function goBack(name, id) {
    // 进行弹栈
    var obj;
    var str;
    var ht;
    if(stack.length == 1){
        str = stack[0].name;
        ht = stack[0].htmlStr;
    }else{
        obj = stack.pop();
        str = obj.name;
        ht = obj.htmlStr;
    }
    if(str != name){
        // 得不到name，接着弹栈
        while(str != name){
            if(stack.length == 1){
                str = stack[0].name;
                ht = stack[0].htmlStr;
            }else{
                obj = stack.pop();
                str = obj.name;
                ht = obj.htmlStr;
            }
        }
    }
    $("#contain").html(ht);
    markActive(id);
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
            pageSize: val
        },
        success: function (data) {
            ajaxContent(data)
        },
        dataType: "json"
    });

    // 下拉框注册点击事件
    $("#selectVal").change(selectChange);
    // 打印按钮注册打印事件
    $("#printTable").click(printTable);
    // 刷新按钮注册点击事件
    $("#reFresh").click(reFresh);

    // search点击事件
    $("#search").click(search);
}

function ajaxContent(data,name, no, inputVal) {
    // 获取下拉框的当前值
    var val = $("#selectVal").val();
    totalPages = data.total;

    if(name == undefined && no == undefined){
        // 设置风电场名称
        $("#fdSpan").html(data.list[0].fdMess.name);
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
    // 改变表单内容
    $("#storeHouseMess").html(result);
    // 改变总条数
    $("#totalPages").html(data.pages);
    // 改变总记录数
    $("#totalCount").html(data.total);

    if(name == undefined && no == undefined){
        // 拼接分页条
        result = "<li><a href='javascript:getPage(1,"+val+")' aria-label=\"Previous\">首页</a></li>\n" +
            "<li><a href='javascript:getPage(1,"+val+")'>上一页</a></li>";
    }else if(name != undefined){
        // 拼接分页条
        result = "<li><a href='javascript:getPage(1,"+val+","+ "\"" +""+ name +""+"\""+", undefined)' aria-label=\"Previous\">首页</a></li>\n" +
            "<li><a href='javascript:getPage(1,"+val+","+ "\"" +""+ name +""+"\""+", undefined)'>上一页</a></li>";
    }else{
        // 拼接分页条
        result = "<li><a href='javascript:getPage(1,"+val+",undefined,"+"\""+""+ no +""+"\""+")' aria-label=\"Previous\">首页</a></li>\n" +
            "<li><a href='javascript:getPage(1,"+val+",undefined,"+"\""+""+ no +""+"\""+")'>上一页</a></li>";
    }

    var begin = 1;
    var end = 10;


    for(var i = begin; i <= end; i++){
        if(name != undefined){
            // 分页条等于当前页数就做标记
            if(i <= 1){
                result += "<li class='active'><a href='javascript:getPage("+i+","+val+","+"\""+""+ name +""+"\""+", undefined)'>"+i+"</a></li>";
            }else{
                result += "<li><a href='javascript:getPage("+i+","+val+","+"\""+""+ name +""+"\""+", undefined)'>"+i+"</a></li>";
            }
        }else if(no != undefined){
            // 分页条等于当前页数就做标记
            if(i <= 1){
                result += "<li class='active'><a href='javascript:getPage("+i+","+val+",undefined,"+"\""+"" + no + ""+"\""+")'>"+i+"</a></li>";
            }else{
                result += "<li><a href='javascript:getPage("+i+","+val+",undefined,"+"\""+"" + no + ""+"\""+")'>"+i+"</a></li>";
            }
        }else{
            // 分页条等于当前页数就做标记
            if(i <= 1){
                result += "<li class='active'><a href='javascript:getPage("+i+","+val+")'>"+i+"</a></li>";
            }else{
                result += "<li><a href='javascript:getPage("+i+","+val+")'>"+i+"</a></li>";
            }
        }
    }

    if(name != undefined){
        result += "<li><a href='javascript:getPage(2,"+val+","+"\""+"" + name + ""+"\""+", undefined)'>下一页</a></li>\n" +
            "<li><a href='javascript:getPage("+data.pages+","+val+","+"\""+"" + name + ""+"\""+", undefined)' aria-label=\"Next\">尾页</a></li>";
    }else if(no != undefined){
        result += "<li><a href='javascript:getPage(2,"+val+",undefined,"+"\""+"" + no + ""+"\""+")'>下一页</a></li>\n" +
            "<li><a href='javascript:getPage("+data.pages+","+val+", undefined,"+"\""+"" + no + ""+"\""+")' aria-label=\"Next\">尾页</a></li>";
    }else{
        result += "<li><a href='javascript:getPage(2,"+val+")'>下一页</a></li>\n" +
            "<li><a href='javascript:getPage("+data.pages+","+val+")' aria-label=\"Next\">尾页</a></li>";
    }

    // 写回分页条
    $("#pageCount").html(result);
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
            // 点击进行入栈
            stack.push({name: "仓库类别", htmlStr: data});
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
function getPage(startPage, pageSize, name, no) {
    // 动态的url
    var urlStr = "";
    // 动态的data
    var dataObj = {};
    if(name != undefined){
        dataObj = {
            startPage: startPage,
            pageSize: pageSize,
            name: name
        };
        urlStr = "storeHouse/findAllByCond";
    }
    if(no != undefined){
        dataObj = {
            startPage: startPage,
            pageSize: pageSize,
            no: no
        };
        urlStr = "storeHouse/findAllByCond";
    }

    if( name == undefined && no == undefined){
        dataObj = {
            startPage: startPage,
            pageSize: pageSize
        };
        urlStr = "storeHouse/findAllComp";
    }

    $.ajax({
        url: urlStr,
        data: dataObj,
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
            ajaxData(startPage, begin,end, pageSize,data, name, no);

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
function ajaxData(startPage,begin ,end, pageSize, data,name,no) {
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

    // 拼接首页上一页分页条
    if(name == undefined && no == undefined){
        // 拼接分页条
        result = "<li><a href='javascript:getPage(1,"+pageSize+");' aria-label=\"Previous\">首页</a></li>\n" +
            "<li><a href='javascript:getPage("+(startPage-1)+","+pageSize+")'>上一页</a></li>"
    }else if(name != undefined){
        // 拼接分页条
        result = "<li><a href='javascript:getPage(1,"+pageSize+","+ "\"" +""+ name +""+"\""+", undefined)' aria-label=\"Previous\">首页</a></li>\n" +
            "<li><a href='javascript:getPage("+(startPage-1)+","+pageSize+","+ "\"" +""+ name +""+"\""+", undefined)'>上一页</a></li>";
    }else{
        // 拼接分页条
        result = "<li><a href='javascript:getPage(1,"+pageSize+",undefined,"+"\""+""+ no +""+"\""+")' aria-label=\"Previous\">首页</a></li>\n" +
            "<li><a href='javascript:getPage("+(startPage-1)+","+pageSize+",undefined,"+"\""+""+ no +""+"\""+")'>上一页</a></li>";
    }

    // 拼接内部分页条
    for(var i = begin; i <= end; i++){
        if(name != undefined){
            // 分页条等于当前页数就做标记
            if(i == startPage){
                result += "<li class='active'><a href='javascript:getPage("+i+","+pageSize+","+"\""+""+ name +""+"\""+", undefined)'>"+i+"</a></li>";
            }else{
                result += "<li><a href='javascript:getPage("+i+","+pageSize+","+"\""+""+ name +""+"\""+", undefined)'>"+i+"</a></li>";
            }
        }else if(no != undefined){
            // 分页条等于当前页数就做标记
            if(i == startPage){
                result += "<li class='active'><a href='javascript:getPage("+i+","+pageSize+",undefined,"+"\""+"" + no + ""+"\""+")'>"+i+"</a></li>";
            }else{
                result += "<li><a href='javascript:getPage("+i+","+pageSize+",undefined,"+"\""+"" + no + ""+"\""+")'>"+i+"</a></li>";
            }
        }else{
            // 分页条等于当前页数就做标记
            if(i == startPage){
                result += "<li class='active'><a href='javascript:getPage("+i+","+pageSize+")'>"+i+"</a></li>";
            }else{
                result += "<li><a href='javascript:getPage("+i+","+pageSize+")'>"+i+"</a></li>";
            }
        }

    }
    // 拼接尾页以及下一页分页条
    if(name != undefined){
        result += "<li><a href='javascript:getPage("+(startPage+1)+","+pageSize+","+"\""+"" + name + ""+"\""+", undefined)'>下一页</a></li>\n" +
            "<li><a href='javascript:getPage("+data.pages+","+pageSize+","+"\""+"" + name + ""+"\""+", undefined)' aria-label=\"Next\">尾页</a></li>";
    }else if(no != undefined){
        result += "<li><a href='javascript:getPage("+(startPage+1)+","+pageSize+",undefined,"+"\""+"" + no + ""+"\""+")'>下一页</a></li>\n" +
            "<li><a href='javascript:getPage("+data.pages+","+pageSize+", undefined,"+"\""+"" + no + ""+"\""+")' aria-label=\"Next\">尾页</a></li>";
    }else{
        result += "<li><a href='javascript:getPage("+(startPage+1)+","+pageSize+")'>下一页</a></li>\n" +
            "<li><a href='javascript:getPage("+(data.pages)+","+pageSize+")' aria-label=\"Next\">尾页</a></li>";
    }

    $("#pageCount").html(result);
}

/**
 * @description: 下拉框改变
 * @author: 隋亮亮
 * @date: 2019-07-31
 */
function selectChange() {
    var val = $("#objVal").val();
    var reg = /[\u4e00-\u9fa5]/;

    // 判断搜索框内内容类型，调用不同的刷新方法
    if(val.length != 0){
        if(reg.test(val)){
            // 直接请求新界面
            getPage(1,  $("#selectVal").val(), val, undefined);
        }else{
            // 直接请求新界面
            getPage(1,  $("#selectVal").val(), undefined, val);
        }
    }else{
        // 直接请求新界面
        getPage(1,  $("#selectVal").val());
    }

}

/**
 * @description: 打印功能
 * @author: 隋亮亮
 * @date: 2019-07-31
 */
function printTable() {
    // 中文正则
    var val = $("#objVal").val();
    var reg = /[\u4e00-\u9fa5]/;
    var str = "";
    var obj = {};
    if(val.length != 0){
        // 搜索框内有内容
        if(reg.test(val)){
            // 内容为零件名称
            str = "storeHouse/findAllByCond";
            obj = {
                startPage: 1,
                pageSize: totalPages,
                name: val
            }
        }else{
            // 内容为零件编号
            str = "storeHouse/findAllByCond";
            obj = {
                startPage: 1,
                pageSize: totalPages,
                no: val
            }
        }
    }else{
        // 搜索框内无内容
        str = "storeHouse/findAllComp";
        obj = {
            startPage: 1,
            pageSize: totalPages
        }
    }
    // 请求隐藏域内的表单
    $.ajax({
        url: str,
        data: obj,
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
    });

}

/**
 * @description: 刷新函数
 * @author: 隋亮亮
 * @date: 2019-08-01
 */
function reFresh() {
    // 刷新后清除搜索框内的内容
    $("#objVal").val("");

    loadStoreHouse();
}

/**
 * @description 搜索按钮点击事件
 * @author: 隋亮亮
 * @date: 2019-08-01
 */
function search() {
    loadStoreHouseCond();
}

/**
 * @description 带有查询条件的加载事件
 * @author 隋亮亮
 * @date 2019-08-01
 */
function loadStoreHouseCond() {
    // 中文正则
    var val = $("#objVal").val();
    var reg = /[\u4e00-\u9fa5]/;
    var obj = {};

    if(val.length != 0){
        // 搜索框内有内容
        if(reg.test(val)){
            // 内容为零件名称
            obj = {name: val};
        }else{
            // 内容为零件编号
            obj = {no: val};
        }
    }else{
        // 搜索框内无内容
        obj = undefined;
    }

    $.ajax({
        url: "storeHouse/findAllByCond",
        data: obj,
        success: function (data) {
            // 搜索框内无内容
            if(obj == undefined){
                ajaxContent(data);
            }

            // 搜索框内内容为零件名称
            if(obj.name != undefined){
                ajaxContent(data, obj.name, undefined, val);
            }
            // 搜索框内文件内容为零件编号
            if(obj.no != undefined){
                ajaxContent(data, undefined, obj.no, val);
            }
        },
        dataType: "json"
    })

}

