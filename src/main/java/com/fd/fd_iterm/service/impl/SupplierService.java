package com.fd.fd_iterm.service.impl;

import com.fd.fd_iterm.domain.Supplier;
import com.fd.fd_iterm.mapper.ISupplierMapper;
import com.fd.fd_iterm.service.ISupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/8/1 11:42
 * @description：供应商service实现类
 */
@Service
public class SupplierService implements ISupplierService {

    @Autowired
    private ISupplierMapper mapper;

    /**
     * 查询全部供应商
     * @return 全部供应商
     */
    @Override
    public List<Supplier> findAllSupplier() {
        List<Supplier> allSupplier = mapper.findAllSupplier();
        return allSupplier;
    }

    @Override
    public void deleteById(String id) {
        mapper.deleteById(id);
    }
}
