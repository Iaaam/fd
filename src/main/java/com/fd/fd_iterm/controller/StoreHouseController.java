package com.fd.fd_iterm.controller;

import com.fd.fd_iterm.domain.Component;
import com.fd.fd_iterm.domain.FdMess;
import com.fd.fd_iterm.domain.StoreHouse;
import com.fd.fd_iterm.service.IStoreHouseService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/31 11:22
 * @description：仓库类别controller
 */
@RestController
@RequestMapping("/storeHouse")
public class StoreHouseController {
    @Autowired
    private IStoreHouseService service;

    /**
     * 得到所有零件的列表
     * @return 所有零件
     */
    @RequestMapping("/findAllComp")
    public PageInfo<StoreHouse> findAllComp(Integer startPage, Integer pageSize){
        if(startPage < 1 || startPage == null){
            startPage = 1;
        }
        if(pageSize < 1 || pageSize == null){
            pageSize = 8;
        }

        FdMess fdMess = new FdMess();
        fdMess.setId("RsCsv32109296593968");
        // 设置页数
        PageHelper.startPage(startPage,pageSize);
        // 进行查询
        List<StoreHouse> list = service.findAllComp(fdMess);
        // 返回page信息
        PageInfo<StoreHouse> info = new PageInfo<StoreHouse>(list);
        return info;
    }

    /**
     * 根据条件查询零件
     * @param startPage
     * @param pageSize
     * @param component
     * @return
     */
    @RequestMapping("/findAllByCond")
    public PageInfo<StoreHouse> findAllByCond(Integer startPage, Integer pageSize, Component component){
        if(startPage == null || startPage < 1){
            startPage = 1;
        }
        if(pageSize == null || pageSize < 1){
            pageSize = 8;
        }
        FdMess fdMess = new FdMess();
        fdMess.setId("RsCsv32109296593968");
        StoreHouse storeHouse = new StoreHouse();
        storeHouse.setComponent(component);
        storeHouse.setFdMess(fdMess);


        // 开始分页
        PageHelper.startPage(startPage, pageSize);

        if(component.getNo() == null && component.getName() == null){
            List<StoreHouse> allComp = service.findAllComp(fdMess);
            PageInfo<StoreHouse> pageInfo = new PageInfo<StoreHouse>(allComp);

            return pageInfo;
        }else{
            List<StoreHouse> allByCond = service.findAllByCond(storeHouse);
            PageInfo<StoreHouse> pageInfo = new PageInfo<StoreHouse>(allByCond);
            return  pageInfo;
        }
    }
}
