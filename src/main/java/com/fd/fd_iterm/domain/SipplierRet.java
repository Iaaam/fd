package com.fd.fd_iterm.domain;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/9/7 16:12
 * @description：供应商管理接收和返回的信息
 */
public class SipplierRet {
    private String[] deleteData;
    private String status;

    public String[] getDeleteData() {
        return deleteData;
    }

    public void setDeleteData(String[] deleteData) {
        this.deleteData = deleteData;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
