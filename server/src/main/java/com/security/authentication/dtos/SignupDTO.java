package com.security.authentication.dtos;

import lombok.Data;

@Data
public class SignupDTO {
    private String name;
    private String email;
    private String password;
}
