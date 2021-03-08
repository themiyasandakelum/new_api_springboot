package com.Loanapplication.loanapplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class LoanController {
    @Autowired
    private  LoanRepository loanRepository;

    @GetMapping("/loan")
    public List<Loan> getAllLoan(){
        return loanRepository.findAll();
    }


    @DeleteMapping("loan/{id}")
    private void deleteLoan(@PathVariable("id") long id)
    {
        LoanService.delete(id);
    }



    }





