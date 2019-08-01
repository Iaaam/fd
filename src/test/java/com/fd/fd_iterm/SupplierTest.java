package com.fd.fd_iterm;

import com.fd.fd_iterm.domain.Supplier;
import com.fd.fd_iterm.mapper.ISupplierMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/8/1 11:38
 * @description：供应商mapper测试
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class SupplierTest {
    @Autowired
    private ISupplierMapper supplierMapper;

    @Test
    public void FindAllSupplierTest(){
        List<Supplier> allSupplier = supplierMapper.findAllSupplier();

        for (Supplier supplier : allSupplier) {
            System.out.println(supplier);
        }
    }
}
