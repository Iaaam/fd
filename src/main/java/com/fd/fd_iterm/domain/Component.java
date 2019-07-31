package com.fd.fd_iterm.domain;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/31 9:24
 * @description：零件总表
 */
public class Component {
    /**
     * 随机无意义编号
     */
    private String id;

    /**
     * 零件编号
     */
    private String no;

    /**
     * 零件名称
     */
    private String name;

    /**
     * 规格型号
     */
    private String type;

    /**
     * 零件种类
     */
    private Integer kind;

    /**
     * 零件单位
     */
    private String unit;

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getKind() {
        return kind;
    }

    public void setKind(Integer kind) {
        this.kind = kind;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}
