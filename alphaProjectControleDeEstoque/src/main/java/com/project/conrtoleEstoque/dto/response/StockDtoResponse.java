package com.project.conrtoleEstoque.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StockDtoResponse {

	private Long id;
	private Double price;
	private Integer quantity;
}
