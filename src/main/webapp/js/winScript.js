$(document).ready(function() {
    // 激活导航位置

    var num = 0;
    $(document).ajaxSuccess(function(evt, request, settings) {
        num++;
        if (num == 3) {
            setSidebarActive("archives-supplier-manage");
        }
    });
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
});