package com.fd.fd_iterm.mapper;

import com.fd.fd_iterm.domain.Supplier;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/8/1 11:29
 * @description：供货商mapper
 */
@Mapper
public interface ISupplierMapper {
    /**
     * 查询全部供货商
     * @return 全部供货商
     */
    public List<Supplier> findAllSupplier();
}
