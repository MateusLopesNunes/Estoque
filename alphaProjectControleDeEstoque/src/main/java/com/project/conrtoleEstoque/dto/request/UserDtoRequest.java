package com.project.conrtoleEstoque.dto.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.br.CPF;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDtoRequest {

	private Long id;
	
	@NotEmpty(message = "{name.not.empty}")
	@Size(min = 5, max = 100)
	private String name;
	
	@NotEmpty(message = "{login.not.empty}")
	@Size(min = 5, max = 100)
	private String login;
	
	@NotEmpty(message = "{password.not.empty}")
	@Size(min = 8, max = 50)
	private String password;
	
	@NotEmpty(message = "{email.not.empty}")
	@Email
	private String email;
	
	@NotEmpty(message = "{cpf.not.empty}")
	@CPF
	private String cpf;
}
