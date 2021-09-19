package com.project.conrtoleEstoque.dto.request;

import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StockDtoRequest {

	private Long id;
	
	@NotEmpty
	private Double price;

	@NotEmpty
	private Integer quantity;
}
