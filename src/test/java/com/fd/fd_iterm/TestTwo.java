package com.fd.fd_iterm;

import com.fd.fd_iterm.utils.RedisUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestTwo {

    @Autowired
    RedisUtil redisUtil;


    @Cacheable(value="demo4", key = "id")
    public String TestDemo(){
        return "helloworld";
    }

    @Test
    public void getTest(){
        String s = TestDemo();
        System.out.println(s);
    }
}
