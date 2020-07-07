import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from './aws-camera/camera.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  printToConsole(arg){
    console.log(arg)
  }

  getCameras(){
    this.printToConsole("arg yaha aata hai")
    return this.http.get("https://ddq0qeglgc.execute-api.us-east-1.amazonaws.com/prod/cameras").toPromise().then(res => <Camera[]>res).then(data => { return data; });
  }

  getGitUserDetails(gitUser: String){
    return this.http.get("https://api.github.com/users/"+gitUser)
  }
}
