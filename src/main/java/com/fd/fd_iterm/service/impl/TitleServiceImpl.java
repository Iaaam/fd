package com.fd.fd_iterm.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fd.fd_iterm.domain.FirstTitle;
import com.fd.fd_iterm.mapper.ITitleMapper;
import com.fd.fd_iterm.service.ITitleService;
import com.fd.fd_iterm.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ：隋亮亮
 * @date ：Created in 2019/7/30 18:00
 * @description：获得标题service接口实现类
 */
@Service
public class TitleServiceImpl implements ITitleService {

    @Autowired
    private RedisUtil redis;

    @Autowired
    private ITitleMapper mapper;

    /**
     * 返回全部标题json字符串
     * @return 全部json标题字符串
     */
    @Override
    public String getAllTitleJson() {
        // 在redis中查询是否存在标题json
        boolean isExists = redis.exists("all_title");

        if(isExists == true){
            // 如果在redis中存在
            return redis.get("all_title");
        }else{
            // 如果在redis中不存在，先从数据库中查
            List<FirstTitle> titles = mapper.findAllTitle();
            // 使用jackson
            ObjectMapper objectMapper = new ObjectMapper();
            String json = null;
            try {
                json = objectMapper.writeValueAsString(titles);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
            // 存入redis中
            redis.set("all_title", json);
            return json;

        }
    }
}
