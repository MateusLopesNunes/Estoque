package com.project.conrtoleEstoque.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.project.conrtoleEstoque.dto.request.UserDtoRequest;
import com.project.conrtoleEstoque.dto.response.UserDtoResponse;
import com.project.conrtoleEstoque.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("v2/api/user")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

	private UserService userService;

	@PostMapping
	public ResponseEntity<String> userSave(@Valid @RequestBody UserDtoRequest objUser) {
		return userService.userSave(objUser);
	}

	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<UserDtoResponse>> findAll() {
		return userService.findAll();
	}

	/*@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public UserDto findById(@PathVariable Long id) {
		return userService.findById(id);
	}*/
	
	@GetMapping("/{name}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<UserDtoResponse>> findByName(@PathVariable String name) {
		return userService.findByName(name);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable Long id) {
		return userService.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateUser(@RequestBody @Valid UserDtoRequest obj, @PathVariable Long id) {
		return userService.updateUser(obj, id);
	}
}
