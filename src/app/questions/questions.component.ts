import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  constructor() {}

  discussion = new FormGroup({
    bookTitle: new FormControl(''),
    question: new FormControl('')
  });

  onSubmit() {
    console.log(this.discussion.value);
  }

  ngOnInit() {}
}
