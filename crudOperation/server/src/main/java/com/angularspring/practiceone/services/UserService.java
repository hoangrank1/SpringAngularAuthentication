package com.angularspring.practiceone.services;

import com.angularspring.practiceone.entity.User;
import com.angularspring.practiceone.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUser(User user1) {
        return userRepository.save(user1);
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
