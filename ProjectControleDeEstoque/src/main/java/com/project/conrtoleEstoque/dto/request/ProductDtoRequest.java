package com.project.conrtoleEstoque.dto.request;

import java.math.BigInteger;

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
	
	@NotEmpty
	@Size(max = 50)
	private String name;
	
	@NotEmpty
	@Size(min = 12, max = 12)
	private BigInteger barCode;
	
	@NotEmpty
	@Size(max = 6)
	private Double price;
	
	@NotEmpty
	@Size(max = 5)
	private Integer quantity;
	
	@NotEmpty
	private CategoryDtoRequest category;
}
