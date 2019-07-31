package com.fd.fd_iterm;

import com.fd.fd_iterm.domain.FdMess;
import com.fd.fd_iterm.mapper.IStoreHouse;
import com.fd.fd_iterm.service.IStoreHouseService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/31 11:13
 * @description：storehouse测试类
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class StoreHouse {
    @Autowired
    private IStoreHouse storeHouse;

    @Autowired
    private IStoreHouseService service;

    @Test
    public void findAllTest(){
        FdMess fdMess = new FdMess();
        fdMess.setId("RsCsv32109296593968");
        List<com.fd.fd_iterm.domain.StoreHouse> allComp = storeHouse.findAllComp(fdMess);

        for (com.fd.fd_iterm.domain.StoreHouse house : allComp) {
            System.out.println(house);
        }
    }

    @Test
    public void findAllTestOne(){
        FdMess fdMess = new FdMess();
        fdMess.setId("RsCsv32109296593968");
        List<com.fd.fd_iterm.domain.StoreHouse> allComp = service.findAllComp(fdMess);

        for (com.fd.fd_iterm.domain.StoreHouse house : allComp) {
            System.out.println(house);
        }
    }
}
