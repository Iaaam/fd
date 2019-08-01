package com.fd.fd_iterm.service.impl;

import com.fd.fd_iterm.domain.FdMess;
import com.fd.fd_iterm.domain.StoreHouse;
import com.fd.fd_iterm.mapper.IStoreHouse;
import com.fd.fd_iterm.service.IStoreHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/31 11:28
 * @description：service查询所有零件实现类
 */
@Service
public class StoreHouseServiceImpl implements IStoreHouseService {
    @Autowired
    private IStoreHouse storeHouse;
    /**
     * 查询仓库内所有零件
     * @param fdMess
     * @return 所有零件
     */
    @Override
    public List<StoreHouse> findAllComp(FdMess fdMess) {
        List<StoreHouse> list = storeHouse.findAllComp(fdMess);
        return list;
    }

    /**
     * 查询满足条件的零件
     * @param house
     * @return
     */
    @Override
    public List<StoreHouse> findAllByCond(StoreHouse house) {
        List<StoreHouse> allByCond = storeHouse.findAllByCond(house);
        return allByCond;
    }
}
