package com.project.conrtoleEstoque.service;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.conrtoleEstoque.dto.request.ProductDtoRequest;
import com.project.conrtoleEstoque.mapper.ProductMapper;
import com.project.conrtoleEstoque.model.Product;
import com.project.conrtoleEstoque.repository.ProductRepository;
import com.project.conrtoleEstoque.service.exception.ProductNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ProductService {

	private ProductMapper productMapper;
	private ProductRepository productRepository;
	
	public ResponseEntity<String> productSave(ProductDtoRequest obj) {
		Product product = productMapper.toModel(obj);
		productRepository.save(product);
		return new ResponseEntity<String>("Product saved whith id: " + product.getId(), HttpStatus.CREATED);
	}
	
	
	public Page<ProductDtoRequest> findAll(Pageable pageable) {
		Page<Product> productFindAll = productRepository.findAll(pageable);
		return productFindAll.map(x -> productMapper.toDto(x));
	}
	
	public Product verifyExists(Long id) {
		return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
	}
	
	public ResponseEntity<ProductDtoRequest> findById(Long id) {
		Product product = verifyExists(id);
		ProductDtoRequest productId = productMapper.toDto(product);
		return new ResponseEntity<ProductDtoRequest>(productId, HttpStatus.OK);
	}
	
	public ResponseEntity<List<ProductDtoRequest>> findByName(String name) {
		List<Product> obj = productRepository.findByName(name);
		List<ProductDtoRequest> names = obj.stream().map(productMapper::toDto).collect(Collectors.toList());
		return new ResponseEntity<List<ProductDtoRequest>>(names, HttpStatus.OK);
	}
	
	public ResponseEntity<String> deleteById(Long id) {
		verifyExists(id);
		productRepository.deleteById(id);
		return new ResponseEntity<String>("Deleted product whith id: " + id, HttpStatus.OK);
	}
	
	public ResponseEntity<String> updateProduct(ProductDtoRequest obj, Long id) {
		verifyExists(id);
		Product product = productMapper.toModel(obj);
		productRepository.save(product);
		return new ResponseEntity<String>("Update project whith id: " + product.getId(), HttpStatus.OK);
	}
}
