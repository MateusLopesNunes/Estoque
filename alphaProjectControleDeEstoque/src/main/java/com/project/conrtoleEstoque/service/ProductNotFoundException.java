package com.project.conrtoleEstoque.service;

public class ProductNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public ProductNotFoundException(Long number) {
		super("Product with id: " + number + " not found");
	}
}
