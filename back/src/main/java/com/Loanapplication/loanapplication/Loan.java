package com.Loanapplication.loanapplication;

import javax.persistence.*;

@Entity
@Table (name ="loan")
public class Loan {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)

    private Long id;


    @Column(name="nameofloan")
    private String Username;

    @Column(name="dec")
    private String dec;


    public Loan() {
    }

    public Loan(String username, String dec) {
        Username = username;
        this.dec = dec;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getDec() {
        return dec;
    }

    public void setDec(String dec) {
        this.dec = dec;
    }
}
