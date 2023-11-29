import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {
   
   formdata:any[]=[];
  
  
  myform=this.builder.group({
    taskinput:[null],
    taskdate:["", [Validators.required]],
    taskdata:new FormControl(),
  });
  
  inputdata:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<PopupComponent>,private builder:FormBuilder,private http:HttpClient){
  
  }
  onSave(){
    this.ref.close(this.myform.value);
    
  }
  showdata():void{
      // this.inputdata=this.data;
      // console.log(this.inputdata)
  }
  oncancel():void{
     this.ref.close();
  }

}
