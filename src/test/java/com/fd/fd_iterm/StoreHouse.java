package com.fd.fd_iterm;

import com.fd.fd_iterm.domain.Component;
import com.fd.fd_iterm.domain.FdMess;
import com.fd.fd_iterm.mapper.IStoreHouse;
import com.fd.fd_iterm.service.IStoreHouseService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
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

    @Test
    public void findAllByCondTest(){
        Component component = new Component();
//        component.setName("过孔式导电滑环");
        component.setNo("jtUkVIkb3b9FpdI");

        FdMess fdMess = new FdMess();
        fdMess.setId("RsCsv32109296593968");
        com.fd.fd_iterm.domain.StoreHouse house = new com.fd.fd_iterm.domain.StoreHouse();
        house.setComponent(component);
        house.setFdMess(fdMess);

        List<com.fd.fd_iterm.domain.StoreHouse> allByCond = storeHouse.findAllByCond(house);
        for (com.fd.fd_iterm.domain.StoreHouse house1 : allByCond) {
            System.out.println(house1);
        }
    }

    @Test
    public void findAllByCond2(){
        PageHelper.startPage(2, 8);
        Component component = new Component();
        component.setName("用力矩扳手");
        FdMess fdMess = new FdMess();
        fdMess.setId("RsCsv32109296593968");
        com.fd.fd_iterm.domain.StoreHouse storeHouse = new com.fd.fd_iterm.domain.StoreHouse();
        storeHouse.setComponent(component);
        storeHouse.setFdMess(fdMess);

        List<com.fd.fd_iterm.domain.StoreHouse> allByCond = service.findAllByCond(storeHouse);

        PageInfo<com.fd.fd_iterm.domain.StoreHouse> pageInfo = new PageInfo<com.fd.fd_iterm.domain.StoreHouse>(allByCond);

        for (com.fd.fd_iterm.domain.StoreHouse house : allByCond) {
            System.out.println(house);
        }
    }
}
