package com.project.conrtoleEstoque.dto.request;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDtoRequest {

	private Long id;
	
	@Size(min = 3, max = 50)
	@NotEmpty
	private String name;
	
	@NotEmpty
	private Integer barCode;
	
	@NotEmpty
	private Double price;
	
	@NotEmpty
	private Integer quantity;
	
	//@NotEmpty
	//private CategoryDtoRequest CategoryDtoRequest;*/
}
