package com.fd.fd_iterm.controller;

import com.fd.fd_iterm.service.ITitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/30 17:56
 * @description：获得一二级标题
 */
@RestController
@RequestMapping("/get")
public class GetTitle {

    @Autowired
    private ITitleService service;
    /**
     * 获得全部一二级标题
     * @return 返回全部标题json
     */
    @RequestMapping("/gettitle")
    public String retTitle(){
        // 调用service返回标题json字符串
        String json = service.getAllTitleJson();
        return json;
    }
}
