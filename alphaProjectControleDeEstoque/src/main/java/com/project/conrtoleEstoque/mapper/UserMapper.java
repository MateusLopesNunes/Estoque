package com.project.conrtoleEstoque.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.project.conrtoleEstoque.dto.request.UserDtoRequest;
import com.project.conrtoleEstoque.dto.response.UserDtoResponse;
import com.project.conrtoleEstoque.model.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

	UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
	
	UserDtoResponse toDto(User obj);
	
	User toModel(UserDtoRequest obj);
	

}
