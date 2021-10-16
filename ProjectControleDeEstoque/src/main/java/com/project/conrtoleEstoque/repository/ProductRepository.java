package com.project.conrtoleEstoque.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.conrtoleEstoque.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	
	@Query(value = "select p from Product p where p.name like %:name%")
	List<Product> findByName(String name);
}
