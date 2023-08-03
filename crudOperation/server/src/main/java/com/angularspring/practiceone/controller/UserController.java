package com.angularspring.practiceone.controller;

import com.angularspring.practiceone.entity.User;
import com.angularspring.practiceone.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable Long id){
        User user1 = userService.getUserById(id);
        if (user == null){
            return ResponseEntity.notFound().build();
        }
        user1.setEmail(user.getEmail());
        user1.setName(user.getName());
        User updatedUser = userService.updateUser(user1);
        return ResponseEntity.ok(updatedUser);
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUser();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Long id){
        User user = userService.getUserById(id);
        if (user == null)
            return ResponseEntity.notFound().build();
        userService.deleteUser(user);
        return ResponseEntity.ok().build();
    }
}
