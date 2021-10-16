package com.project.conrtoleEstoque.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.conrtoleEstoque.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
