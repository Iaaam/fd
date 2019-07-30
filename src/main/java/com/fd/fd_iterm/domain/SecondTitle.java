package com.fd.fd_iterm.domain;

/**
 * @author: 隋亮亮
 * @Date: 2019-07-30
 * @Description: 前台二级标题实体类
 */
public class SecondTitle {
    /**
     * s_id
     */
    private Integer id;
    /**
     * second name
     */
    private String sName;

    /**
     * 对应的界面
     */
    private String sPage;

    /**
     * 显示界面的id
     */
    private String lId;

    public String getsPage() {
        return sPage;
    }

    public void setsPage(String sPage) {
        this.sPage = sPage;
    }

    public String getlId() {
        return lId;
    }

    public void setlId(String lId) {
        this.lId = lId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }
}
