package com.project.conrtoleEstoque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.conrtoleEstoque.dto.request.CategoryDtoRequest;
import com.project.conrtoleEstoque.service.CategoryService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("v2/api/category")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class CategoryController {
	
	private CategoryService categoryService;
	
	@PostMapping
	public ResponseEntity<String> productSave(@RequestBody CategoryDtoRequest obj) {
		return categoryService.productSave(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<CategoryDtoRequest>> findAll() {
		return categoryService.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CategoryDtoRequest> findById(@PathVariable Long id) {
		return categoryService.findById(id);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable Long id) {
		return categoryService.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateProduct(@RequestBody CategoryDtoRequest obj, @PathVariable Long id) {
		return categoryService.updateProduct(obj, id);
	}
}
