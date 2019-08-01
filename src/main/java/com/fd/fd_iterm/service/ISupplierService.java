package com.fd.fd_iterm.service;

import com.fd.fd_iterm.domain.Supplier;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/8/1 11:42
 * @description：供应商service接口
 */
public interface ISupplierService {
    /**
     * 查询全部供应商
     * @return 全部供应商
     */
    List<Supplier> findAllSupplier();
}
