function supplierResult() {
    $.ajax({
        url: "pages/archives-supplier-manage.html",
        success: function (data) {
            stack.push({name: "供应商管理", htmlStr: "data"})
            $("#contain").html(data);

            $("#refreshSupplier").click(reFreshSupplier);
        }
    });
    markActive("archives-supplier-manage");
}

/**
 * @description: 刷新
 * @author: 隋亮亮
 * @date: 2017-08-01
 */
function reFreshSupplier() {
    supplierResult();
}