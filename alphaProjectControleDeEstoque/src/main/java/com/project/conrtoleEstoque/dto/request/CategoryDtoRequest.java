package com.project.conrtoleEstoque.dto.request;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDtoRequest {

	private Long id;
	
	@Size(min = 3, max = 50)
	@NotEmpty
	private String name;
}
