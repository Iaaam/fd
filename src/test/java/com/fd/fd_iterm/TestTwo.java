package com.fd.fd_iterm;

import com.fd.fd_iterm.utils.RedisUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestTwo {

    @Autowired
    RedisUtil redisUtil;

    @Test
    public void TestDemo(){
        System.out.println("中文数据");
        redisUtil.set("demo3", "你好啊");
        System.out.println("-----------------------");

        String demo1 = redisUtil.get("demo3");
        System.out.println(demo1);
    }
}
