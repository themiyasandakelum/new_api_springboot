package com.Loanapplication.loanapplication;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public static void loans(Loan loan) {
    }

    public static void delete(long id) {
    }

    public static void saveOrUpdate(Loan loan) {
    }



    private List<Loan> listAllLoan() {
        return loanRepository.findAll();
    }
    public void delete(int id)
    {
        LoanRepository.deleteById(id);
    }
}

