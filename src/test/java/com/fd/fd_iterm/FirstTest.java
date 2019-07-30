package com.fd.fd_iterm;

import com.fd.fd_iterm.mapper.ITitleMapper;
import com.fd.fd_iterm.domain.FirstTitle;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = FdItermApplication.class)
public class FirstTest {
    @Autowired
    private ITitleMapper dao;
    @Test
    public void findAllTitle(){
        List<FirstTitle> allTitle = dao.findAllTitle();
        for (FirstTitle firstTitle : allTitle) {
            System.out.println(firstTitle);
        }
    }
}
