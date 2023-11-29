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
       _filtertext:string='';
       ischecked:boolean=false;
       
       
      
   constructor(public dialog:MatDialog){ }

   get filtertext(){
     return this._filtertext;
   }
   set filtertext(value:string){
      this._filtertext=value;
      this.filteredItems=this.filterstudent(value);
      console.log(this.filteredItems)
     
   }
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
        this.filteredItems=this.task;
        console.log(this.filteredItems)
        
      });
     
   }

   /* filterstudent(filterterm:string):any[]{
        if(this.filteredItems.length===0 || filterterm===''){
          return this.filteredItems;
        }else{
          return this.filteredItems.filter(task=>task.taskinput.toLowerCase()===filterterm.toLowerCase())
          }
        } */
        filterstudent(filterTerm: string,): any[] {
          if (filterTerm==='' || this.filteredItems.length===0 ) {
            
            return this.task;
          }
        
          const normalizedFilterTerm = filterTerm.toLowerCase();
        
          return this.filteredItems.filter(task => {
           
            return task.taskinput.toLowerCase().includes(normalizedFilterTerm);
          });
        }
        
   
}
