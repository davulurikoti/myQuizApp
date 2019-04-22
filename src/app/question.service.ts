import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private db: AngularFirestore) { }
  addQuestion(question: any): void{
  	this.db.collection('questions').add(question).then(ref => {
 	console.log('Added document with ID: ', ref.id);
	});
  }
   public getQuestions(): Observable<any[]>{
    return this.db.collection('questions').valueChanges();
  }
}
