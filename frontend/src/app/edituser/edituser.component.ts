import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { Router,ParamMap, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  private firstname:String;

  constructor(private service:MyserviceService,private router:Router,private activatedRoute: ActivatedRoute) { }
  editform={
    firstname:String,
    lastname:String,
    address:String,
    city:String,
    state:String
  };
  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.firstname= (params.get('firstname'));
      console.log(this.firstname);
    });
  this.service.getbyname(this.firstname).subscribe(data=>{
    this.editform=data;
  })
}
  edit(){
  this.service.edituser(this.editform)
.subscribe(data=>{
  console.log(data);
}
);
alert("record updated");
}
delete(){
  this.service.deleteuser(this.firstname)
  .subscribe(data=>{
    console.log(data);
  });
  alert("are u sure to delete");
}
}


 
 