package com.Loanapplication.loanapplication;


import org.apache.catalina.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {


    static void deleteById(int id) {
    }

}
