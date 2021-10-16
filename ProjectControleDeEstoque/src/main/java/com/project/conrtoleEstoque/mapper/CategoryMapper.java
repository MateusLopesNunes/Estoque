package com.project.conrtoleEstoque.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.project.conrtoleEstoque.dto.request.CategoryDtoRequest;
import com.project.conrtoleEstoque.model.Category;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

	ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

	CategoryDtoRequest toDto(Category obj);
	Category toModel(CategoryDtoRequest obj);
}
