package com.project.conrtoleEstoque.service;

public class UserNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public UserNotFoundException(Long number) {
		super("User with id: " + number + " not found");
	}
}
