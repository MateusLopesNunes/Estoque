package com.project.conrtoleEstoque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.conrtoleEstoque.dto.request.ProductDtoRequest;
import com.project.conrtoleEstoque.dto.response.ProductDtoResponse;
import com.project.conrtoleEstoque.service.ProductService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor(onConstructor = @__(@Autowired))
@RequestMapping("v2/api/product")
public class ProjectController {
	
	private ProductService productService;

	@PostMapping
	public ResponseEntity<String> productSave(@RequestBody ProductDtoRequest obj) {
		return productService.productSave(obj);
	}
	
	@GetMapping
	public ResponseEntity<Page<ProductDtoResponse>> findAll(Pageable pageable) {
		Page<ProductDtoResponse> pages = productService.findAll(pageable);
		return ResponseEntity.ok(pages);
	}
	
	@GetMapping("/{name}")
	public ResponseEntity<List<ProductDtoResponse>> findByName(@PathVariable String name) {
		return productService.findByName(name);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable Long id) {
		return productService.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateProduct(@RequestBody ProductDtoRequest obj, @PathVariable Long id) {
		return productService.updateProduct(obj, id);
	}
}
