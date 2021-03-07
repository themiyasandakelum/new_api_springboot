package com.Loanapplication.loanapplication;


import javassist.NotFoundException;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
  private  UserRepository userRepository;

    @GetMapping("/users")
    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/adduser")
    public Users createUser(@RequestBody Users user){
        return userRepository.save(user);
    }


    @DeleteMapping("delete/{id}")
    private void deleteUser(@PathVariable("id") long id)
    {
        UserServices.delete(id);
    }

    @PutMapping("/update")
    private String saveUser(@RequestBody Users users)
    {
        UserServices.saveOrUpdate(users);
        return users.getName();
    }




}


