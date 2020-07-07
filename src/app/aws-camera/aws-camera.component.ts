import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Camera } from './camera.model'

// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   imports: [FormsModule]
// })
@Component({
  selector: 'app-aws-camera',
  templateUrl: './aws-camera.component.html',
  styleUrls: ['./aws-camera.component.css']
})
export class AwsCameraComponent implements OnInit {

  cameras: Camera[];

  gitUser: String;

  response: any;

  constructor(private service: TestService) { }

  ngOnInit(): void {
    // console.log("Yaha aara hai kya")
    this.service.getCameras().then(cameras => {
      this.cameras = cameras;
    });
  }

  search(){
    this.service.getGitUserDetails(this.gitUser).subscribe((response) => {
      this.response = response;
      console.log(response)
    })
  }
}
