package com.security.authentication.dtos;

import lombok.Data;

@Data
public class AuthenticationRequest {
    private String email;

    private String password;
}
