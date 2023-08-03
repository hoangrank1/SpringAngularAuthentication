import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder  
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [
        Validators.required
      ]],
      email: [null, [
        Validators.required,
        Validators.email,
      ]]
    });
  }

  postUser() {
    this.userService.postUser(this.validateForm.value).subscribe(val => {
      console.log(val);
    });
  }
}
