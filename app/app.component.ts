import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  template: `
        <ul>
            <li *ngFor="let item of items | async">
                <pre>{{ item | json }}</pre>
            </li>
        </ul>
    `
})
export class AppComponent {
  title = 'cloud-firestore-test';
  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/items').valueChanges();
  }
}
