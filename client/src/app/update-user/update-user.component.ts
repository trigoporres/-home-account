import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import { environment } from "../../environments/environment"

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:any;
  total:any;
  feedback: string;
  id;

  uploader: FileUploader= new FileUploader({
    url: ""
  });

  updateInfo = {
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    salary: "",
    money: "",
    location: "",
  }
  error:string;

  constructor(
    private auth: AuthService,
    private router: Router,
    public route: ActivatedRoute) {}

  ngOnInit() {
    this.successCb(this.auth.user);
  }

  update() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('first_name', this.updateInfo.first_name);
      form.append('last_name', this.updateInfo.last_name);
      form.append('email', this.updateInfo.email);
      form.append('username', this.updateInfo.username);
      form.append('password',this.updateInfo.password);
      form.append('phone', this.updateInfo.phone);
      form.append('salary', this.updateInfo.salary);
      form.append('money', this.updateInfo.money);
      form.append('location', this.updateInfo.location);
  };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem=  () => console.log("hecho")
    this.router.navigate(['user/'+this.updateInfo._id])
  }

  errorCb(err) {
   this.error = err;
   this.user = null;
 }

 successCb(user) {
   this.updateInfo = user;
   this.uploader.options.url = `${environment.BASEURL}/auth/user/${this.updateInfo._id}`
   this.error = null;
 }

}
