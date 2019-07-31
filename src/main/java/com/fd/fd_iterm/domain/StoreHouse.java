package com.fd.fd_iterm.domain;

import java.util.Date;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/31 9:19
 * @description：仓库详情表
 */
public class StoreHouse {
    /**
     * 无意义id
     */
    private String nId;

    /**
     * 仓库编号
     */
    private String sId;

    /**
     * 零件价格
     */
    private Double price;

    /**
     * 零件数量
     */
    private Integer num;

    /**
     * 零件入库日期
     */
    private Date inDate;

    /**
     * 零件安全库存
     */
    private Integer secNum;

    /**
     *
     */
    private String mark;

    /**
     *
     */
    private Component component;

    /**
     *
     */
    private FdMess fdMess;

    public String getnId() {
        return nId;
    }

    public void setnId(String nId) {
        this.nId = nId;
    }

    public String getsId() {
        return sId;
    }

    public void setsId(String sId) {
        this.sId = sId;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Date getInDate() {
        return inDate;
    }

    public void setInDate(Date inDate) {
        this.inDate = inDate;
    }

    public Integer getSecNum() {
        return secNum;
    }

    public void setSecNum(Integer secNum) {
        this.secNum = secNum;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public Component getComponent() {
        return component;
    }

    public void setComponent(Component component) {
        this.component = component;
    }

    public FdMess getFdMess() {
        return fdMess;
    }

    public void setFdMess(FdMess fdMess) {
        this.fdMess = fdMess;
    }
}
