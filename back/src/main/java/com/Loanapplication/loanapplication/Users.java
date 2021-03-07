package com.Loanapplication.loanapplication;

import javax.persistence.*;

@Entity
@Table (name ="employee")
public class Users {

    public Users( String Username, String nic, String email, String accno, String password) {


        this.Username = Username;
        this.nic = nic;
        this.email = email;
        this.accno = accno;
        this.password = password;
    }
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)

    private Long id;


    @Column(name="full_name")
    private String Username;

    @Column(name="nic")
    private String nic;

    @Column(name="email")
    private String email;

    @Column(name="accno")
    private String accno;

    @Column(name="password")
    private String password;

    public Users() {
    }



    public String getName() {
        return Username;
    }

    public void setName(String name) {
        this.Username = name;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAccno() {
        return accno;
    }

    public void setAccno(String accno) {
        this.accno = accno;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;

    }
}

