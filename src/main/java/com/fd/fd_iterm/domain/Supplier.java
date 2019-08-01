package com.fd.fd_iterm.domain;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/8/1 11:18
 * @description：供货商实体
 */
public class Supplier {
    /**
     * 无意义供货商id
     */
    private String id;

    /**
     * 有意义供货商编号
     */
    private String no;

    /**
     * 供货商名称
     */
    private String name;

    /**
     * 供货商类型
     */
    private Integer type;

    /**
     * 供货商联系人
     */
    private String person;

    /**
     * 联系人电话号
     */
    private String phone;

    /**
     * 供货商地址
     */
    private String addr;

    /**
     * 联系人email
     */
    private String email;

    /**
     * 供货商状态
     */
    private Integer status;

    /**
     * 备注
     */
    private String note;

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

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getPerson() {
        return person;
    }

    public void setPerson(String person) {
        this.person = person;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
