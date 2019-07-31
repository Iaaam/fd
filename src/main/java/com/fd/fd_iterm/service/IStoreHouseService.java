package com.fd.fd_iterm.service;

import com.fd.fd_iterm.domain.FdMess;
import com.fd.fd_iterm.domain.StoreHouse;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/31 11:26
 * @description：仓库详情接口
 */
public interface IStoreHouseService {

    /**
     * 查询仓库所有零件
     * @return
     */
    public List<StoreHouse> findAllComp(FdMess fdMess);
}
