package com.fd.fd_iterm.mapper;

import com.fd.fd_iterm.domain.FirstTitle;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author: 隋亮亮
 * @Date: 2019-07-30
 * @Description: 查询标题的dao
 */
@Mapper
public interface ITitleMapper {

    /**
     * 查询所有标题
     * @return 返回的标题名
     */
    public List<FirstTitle> findAllTitle();
}
