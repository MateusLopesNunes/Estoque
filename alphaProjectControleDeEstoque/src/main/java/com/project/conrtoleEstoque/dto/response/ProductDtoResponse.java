package com.project.conrtoleEstoque.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDtoResponse {

	private Long id;
	private String name;
	private Integer barCode;
	private Double price;
	private Integer quantity;	
	//private CategoryDtoResponse CategoryDtoResponse;
}
