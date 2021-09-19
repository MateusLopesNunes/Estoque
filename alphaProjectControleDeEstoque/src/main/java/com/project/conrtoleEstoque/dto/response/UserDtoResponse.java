package com.project.conrtoleEstoque.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDtoResponse {

	private Long id;
	private String name;
	private String login;
	private String email;
	private String cpf;
}
  