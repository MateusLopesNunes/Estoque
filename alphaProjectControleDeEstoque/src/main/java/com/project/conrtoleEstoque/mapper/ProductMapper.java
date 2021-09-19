package com.project.conrtoleEstoque.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.project.conrtoleEstoque.dto.request.ProductDtoRequest;
import com.project.conrtoleEstoque.dto.response.ProductDtoResponse;
import com.project.conrtoleEstoque.model.Product;

@Mapper(componentModel = "spring")
public interface ProductMapper {

	ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

	ProductDtoResponse toDto(Product obj);

	Product toModel(ProductDtoRequest obj);

}
