package com.project.conrtoleEstoque.service;

import java.net.http.HttpRequest;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.conrtoleEstoque.dto.request.ProductDtoRequest;
import com.project.conrtoleEstoque.dto.response.ProductDtoResponse;
import com.project.conrtoleEstoque.mapper.ProductMapper;
import com.project.conrtoleEstoque.model.Product;
import com.project.conrtoleEstoque.repository.ProductRepository;

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
	
	
	public Page<ProductDtoResponse> findAll(Pageable pageable) {
		Page<Product> productFindAll = productRepository.findAll(pageable);
		return productFindAll.map(x -> productMapper.toDto(x));
	}
	
	public Product verifyExists(Long id) {
		return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
	}
	
	public ResponseEntity<List<ProductDtoResponse>> findByName(String name) {
		List<Product> obj = productRepository.findByName(name);
		List<ProductDtoResponse> names = obj.stream().map(productMapper::toDto).collect(Collectors.toList());
		return new ResponseEntity<List<ProductDtoResponse>>(names, HttpStatus.OK);
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
