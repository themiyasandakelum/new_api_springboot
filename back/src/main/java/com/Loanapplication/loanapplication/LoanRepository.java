package com.Loanapplication.loanapplication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



    @Repository
    public interface LoanRepository extends JpaRepository<Loan,Long> {


        static void deleteById(int id) {
        }

    }


