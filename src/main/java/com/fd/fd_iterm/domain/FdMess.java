package com.fd.fd_iterm.domain;

import java.util.Date;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/31 9:28
 * @description：风电场详细信息
 */
public class FdMess {
    /**
     * 无意义id
     */
    private String id;

    /**
     * 风电场编号
     */
    private String no;

    /**
     * 风电场名称
     */
    private String name;

    /**
     * 风电场地址
     */
    private String addr;

    /**
     * 风电场建成日期
     */
    private Date cDate;

    /**
     * 风电场负责人
     */
    private String mPerson;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public Date getcDate() {
        return cDate;
    }

    public void setcDate(Date cDate) {
        this.cDate = cDate;
    }

    public String getmPerson() {
        return mPerson;
    }

    public void setmPerson(String mPerson) {
        this.mPerson = mPerson;
    }
}
