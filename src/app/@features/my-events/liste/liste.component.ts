import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventsPlanificationService } from 'src/app/@services/storage/events-planification.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  @Input() userID;
  listEvents;
  constructor(
    private _myEventDB: EventsPlanificationService
  ) { }

  ngOnInit(): void {
    console.log(this.userID);

    this._myEventDB.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.listEvents = data
    });
  }

}