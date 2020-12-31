import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private firestore: AngularFirestore) {}

  public getFeed(): Observable<any> {
    return this.firestore.collection('feed').snapshotChanges();
  }

  public addText(data: object): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('feed')
        .add(data)
        .then(
          res => {},
          err => reject(err)
        );
    });
  }
}
