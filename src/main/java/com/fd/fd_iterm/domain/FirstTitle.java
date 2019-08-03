package com.fd.fd_iterm.domain;

import java.util.List;

/**
 * @author: 隋亮亮
 * @Date: 2019-07-30
 * @Description: 前台一级标题实体类
 */
public class FirstTitle {
    /**
     * id
     *
     *
     *
     * 
     */
    private Integer id;

    /**
     * 一级标题名称
     */
    private String fName;

    /**
     * 一级标题图标
     */
    private String iconAddr;

    /**
     * 一级标题下的二级标题
     */
    private List<SecondTitle> list;

    public Integer getid() {
        return id;
    }

    public void setid(Integer id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public List<SecondTitle> getList() {
        return list;
    }

    public void setList(List<SecondTitle> list) {
        this.list = list;
    }

    public String getIconAddr() {
        return iconAddr;
    }

    public void setIconAddr(String iconAddr) {
        this.iconAddr = iconAddr;
    }
}
