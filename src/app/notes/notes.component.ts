import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { environment } from '../../environments/environment';
import { NotesResponse } from '../response/notesresponse';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  model: any = {};
  notes: NotesResponse[];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getService('getnotes', this.notes)
      .subscribe(response => {
        this.notes=response;
        console.log("Notes fetched successfully..", response)
      });
  
    console.log(environment);
  }

  createNote(): void {
    this.userservice.putService('createnotes', this.model)
      .subscribe(response => {
        console.log("Note Created successfully..", response);
      });
  };

  getNotes(notes) {

  
  }
}
