package com.security.authentication.services.auth;

import com.security.authentication.dtos.SignupDTO;
import com.security.authentication.dtos.UserDTO;

public interface AuthService {
    UserDTO createUser(SignupDTO signupDTO);
}
