/**
 * @description: 点击进入加载事件
 * @author：隋亮亮
 * @date: 2019-09-03
 */
function supplierResult() {
    $.ajax({
        url: "pages/archives-supplier-manage.html",
        success: function (data) {
            stack.push({name: "供应商管理", htmlStr: data});

            // 加载静态界面
            $("#contain").html(data);

            // 服务器请求，动态加载数据
            loadData(1, 8);

            // 刷新按钮功能
            $("#refreshSupplier").click(reFreshSupplier);

            // 完善界面上的功能
            winTool();
        }
    });

    // 清除标记
    markActive("archives-supplier-manage");
}

/**
 * @description: 服务器请求，动态加载事件
 * @author: 隋亮亮
 * @date: 2019-09-03
 */
function loadData(curPage, pageSize) {
    $.ajax({
        url: "supplier/findAllSupplier",
        data: {curPage: curPage, pageSize: pageSize},
        type: "get",
        success: function (data) {
            // 传入数据，填写数据
            addList(data,curPage,pageSize);
        },
        dataType: "json"
    })
}

/**
 * @description: 填写数据，操作字符串
 * @author: 隋亮亮
 * @date: 2019-09-03
 * @param data 服务器请求到的数据
 * @param curPage 当前页
 * @param pageSize 每页显示的数量
 */
function addList(data, curPage, pageSize) {
    // 累加字符串
    var str = "";
    for(var i = 0; i < data.list.length; i++){
        str += "<tr>\n" +
            "<td class=\"text-center\"><input class='icheckbox_square-blue' name=\"ids\" type=\"checkbox\"></td>\n" +
            "<td class=\"text-center\">"+ (i + 1)+"</td>\n" +
            "<td class=\"text-center\">"+ data.list[i].no+"</td>\n" +
            "<td class=\"text-center\">"+data.list[i].name+"</td>\n" +
            "<td class=\"text-center\">"+ data.list[i].person+"</td>\n" +
            "<td class=\"text-center\">"+ data.list[i].phone+"</td>\n";
        
        // 状态的开启与禁用判断
        if(data.list[i].status === 0){
            str += "<td class=\"text-center\">禁用</td>\n"
        }else{
            str += "<td class=\"text-center\">启用</td>\n"
        }

        // 备注有无的判断
        if(data.list[i].note.length === 0){
            str += "<td class=\"text-center\">无</td>\n"
        }else{
            str += "<td class=\"text-center\">"+data.list[i].note+"</td>\n"
        }

        str += "<td class=\"text-center\">\n" +
            "<button type=\"button\" class=\"btn bg-olive btn-xs\" data-toggle=\"modal\" data-target=\"#detail\">详情</button>\n" +
            "<button type=\"button\" class=\"btn bg-olive btn-xs target\"><a href=\"archives-supplier-info-edit.html\" style=\"color: white;\">\n" +
            "编辑</a></button>\n" +
            "</td>";

        // 调用分页条拼接与处理函数
        PagingSet(data, "pages", "loadData", curPage, pageSize);
        
        // 信息列表的拼接
        $("#list-data").html(str);
        
        // 总页数的拼接
        $("#allPage").html(data.pages);
        
        // 数据总条数的拼接
        $("#allData").html(data.total);

    }
}

/**
 * @description: 分页条的拼接与处理
 * @author: 隋亮亮
 * @date: 2019-09-03
 * @param data 服务器请求到的数据
 * @param curPage 当前页
 * @param pageSize 每页显示的数量
 */


/**
 * @description: 刷新按钮功能
 * @author: 隋亮亮
 * @date: 2017-08-01
 */
function reFreshSupplier() {
    supplierResult();
}

function winTool() {
    // 列表按钮
    $("#dataList td input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        increaseArea: '20%'
    });
    // 全选操作
    $("#selall").click(function() {
        var clicks = $(this).is(':checked');
        if (!clicks) {
            $("#dataList td input[type='checkbox']").iCheck("uncheck");
        } else {
            $("#dataList td input[type='checkbox']").iCheck("check");
        }
        $(this).data("clicks", !clicks);
    });
}