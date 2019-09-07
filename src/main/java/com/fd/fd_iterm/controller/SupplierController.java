package com.fd.fd_iterm.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fd.fd_iterm.domain.SipplierRet;
import com.fd.fd_iterm.domain.Supplier;
import com.fd.fd_iterm.service.ISupplierService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/8/1 11:44
 * @description：供应商controller
 */
@RestController
@RequestMapping("/supplier")
public class SupplierController {
    @Autowired
    private ISupplierService service;

    @RequestMapping("findAllSupplier")
    public PageInfo<Supplier> findAllSupplier(@RequestParam(value = "curPage")Integer startPage, @RequestParam(value = "pageSize") Integer pageSize){
        PageHelper.startPage(startPage, pageSize);
        // 数据库中查询
        List<Supplier> list =  service.findAllSupplier();
        PageInfo<Supplier> pageInfo = new PageInfo<Supplier>(list);
        // 返回分页
        return pageInfo;
    }

    @RequestMapping("deleteSupplier")
    public String deleteSupplier(SipplierRet supplierRet){

        // 得到所有需要删除的id
        for (int i = 0; i < supplierRet.getDeleteData().length; i++) {
            // 对id字符串进行处理
            String temp = supplierRet.getDeleteData()[i].replaceAll("\"", "");
            temp = temp.replaceAll("\\[", "").replaceAll("\\]", "");
            // 分次调用service接口
            service.deleteById(temp);
        }
        // 设置状态码并且返回
        supplierRet.setStatus("success");
        ObjectMapper mapper = new ObjectMapper();
        String ret = null;
        try {
            ret = mapper.writeValueAsString(supplierRet);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return ret;
    }
}
