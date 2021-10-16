package com.project.conrtoleEstoque.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.conrtoleEstoque.dto.request.CategoryDtoRequest;
import com.project.conrtoleEstoque.dto.request.ProductDtoRequest;
import com.project.conrtoleEstoque.mapper.CategoryMapper;
import com.project.conrtoleEstoque.model.Category;
import com.project.conrtoleEstoque.model.Product;
import com.project.conrtoleEstoque.repository.CategoryRepository;
import com.project.conrtoleEstoque.service.exception.ProductNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor =  @__(@Autowired))
public class CategoryService {

	private CategoryRepository categoryRepository;
	private CategoryMapper categoryMapper;
	
	public ResponseEntity<String> productSave(CategoryDtoRequest obj) {
		Category category = categoryMapper.toModel(obj);
		categoryRepository.save(category);
		
		return new ResponseEntity<String>("Product saved whith id: " + category.getId(), HttpStatus.CREATED);
	}
	
	public Category verifyExists(Long id) {
		return categoryRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
	}
	
	public ResponseEntity<CategoryDtoRequest> findById(Long id) {
		Category category = verifyExists(id);
		CategoryDtoRequest productId = categoryMapper.toDto(category);
		return new ResponseEntity<CategoryDtoRequest>(productId, HttpStatus.OK);
	}
	
	public ResponseEntity<String> deleteById(Long id) {
		verifyExists(id);
		categoryRepository.deleteById(id);
		return new ResponseEntity<String>("Deleted product whith id: " + id, HttpStatus.OK);
	}
	
	public ResponseEntity<String> updateProduct(CategoryDtoRequest obj, Long id) {
		verifyExists(id);
		Category category = categoryMapper.toModel(obj);
		categoryRepository.save(category);
		return new ResponseEntity<String>("Update project whith id: " + category.getId(), HttpStatus.OK);
	}
	
	public ResponseEntity<List<CategoryDtoRequest>> findAll() {
		List<Category> category = categoryRepository.findAll();
		List<CategoryDtoRequest> categoryDto = category.stream().map(categoryMapper::toDto).collect(Collectors.toList());
		return new ResponseEntity<List<CategoryDtoRequest>>(categoryDto, HttpStatus.OK);
	}
}
