import { Component} from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
       task:any[]=[];
       filteredItems: any[]=[];

       searchText:any='';
      
   constructor(public dialog:MatDialog){ }

   opendialog():void{
      const dialogRef=this.dialog.open(PopupComponent,{
       
         data:{
          addtask:'taqi magsi',
          date:'26-11-2023',
         },
         width:'45%',
        //  height:'425px',
      });
      dialogRef.afterClosed().subscribe(result=>{
        console.log('the dialog was closed');
        this.task.push(result);
        console.log(this.task)
      });
     
   }
   filterItems() {
    this.filteredItems = this.task.filter(task => task.taskinput.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
