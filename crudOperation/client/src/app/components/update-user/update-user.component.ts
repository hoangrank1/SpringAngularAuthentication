import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  validateForm!: FormGroup;
  id: any = this.activatedRoute.snapshot.params['id'];

  constructor(private userService: UserService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]]
    })
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.id).subscribe((res) => {
      console.log(res);
      this.validateForm.patchValue(res);
    })
  }

  updateUser() {
    this.userService.updateUser(this.id, this.validateForm.value).subscribe(res => {
      console.log(res)
    })
  }
}
