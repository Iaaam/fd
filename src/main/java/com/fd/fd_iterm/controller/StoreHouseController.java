package com.fd.fd_iterm.controller;

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
}
