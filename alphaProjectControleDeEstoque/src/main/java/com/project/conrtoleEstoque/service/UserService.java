package com.project.conrtoleEstoque.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.conrtoleEstoque.dto.request.UserDtoRequest;
import com.project.conrtoleEstoque.dto.response.UserDtoResponse;
import com.project.conrtoleEstoque.mapper.UserMapper;
import com.project.conrtoleEstoque.model.User;
import com.project.conrtoleEstoque.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserService {

	private UserRepository userRepository;
	
	private UserMapper userMapper;
	
	public ResponseEntity<String> userSave(UserDtoRequest objUser) {
		User user = userMapper.toModel(objUser);
		//obj.getPhones().forEach(x -> x.setUser(user));
		User userSave = userRepository.save(user);
		return new ResponseEntity<String>("Registered user with id: " + userSave.getId(), HttpStatus.CREATED);
	}
	
	public ResponseEntity<List<UserDtoResponse>> findAll() {
		List<User> userAll = userRepository.findAll();
		List<UserDtoResponse> userDto = userAll.stream().map(userMapper::toDto).collect(Collectors.toList());
		return new ResponseEntity<List<UserDtoResponse>>(userDto, HttpStatus.OK);
	}
	
	/*public UserDto findById(Long id) {
		return userMapper.toDto(verifyExists(id));
	}*/
	
	public User verifyExists(Long id) {
		return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
	}
	
	public ResponseEntity<List<UserDtoResponse>> findByName(String name) {
		List<User> users = userRepository.findByName(name);
		List<UserDtoResponse> userDto = users.stream().map(userMapper::toDto).collect(Collectors.toList());
		return new ResponseEntity<List<UserDtoResponse>>(userDto, HttpStatus.OK);
	}
	
	public ResponseEntity<String> deleteById(Long id) {
		verifyExists(id);
		userRepository.deleteById(id);
		return new ResponseEntity<String>("Deleted user with id: " + id, HttpStatus.OK);
	}
	
	public ResponseEntity<String> updateUser(UserDtoRequest obj, Long id) {
		verifyExists(id);
		User user = userMapper.toModel(obj);
		userRepository.save(user);
		return new ResponseEntity<String>("Update user with id: " + id , HttpStatus.OK);
	}
}
