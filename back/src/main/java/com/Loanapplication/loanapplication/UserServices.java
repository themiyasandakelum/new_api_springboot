package com.Loanapplication.loanapplication;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    public static void adduser(Users users) {
    }

    public static void delete(long id) {
    }

    public static void saveOrUpdate(Users users) {
    }



    private List<Users> listAllUsers() {
        return userRepository.findAll();
    }
    public void delete(int id)
    {
        UserRepository.deleteById(id);
    }
}
