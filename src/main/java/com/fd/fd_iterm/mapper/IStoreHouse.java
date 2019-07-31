package com.fd.fd_iterm.mapper;

import com.fd.fd_iterm.domain.FdMess;
import com.fd.fd_iterm.domain.StoreHouse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/31 10:02
 * @description：仓库详情查询
 */
@Mapper
public interface IStoreHouse {

    /**
     * 查询管理员仓库内的零件
     * @param fdMess
     * @return
     */
    public List<StoreHouse> findAllComp(FdMess fdMess);
}
