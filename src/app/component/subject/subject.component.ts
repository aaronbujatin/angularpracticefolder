import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../service/subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  isLoggedIn: boolean = false
  private subscription!: Subscription;

  ngOnInit(): void {
    this.initSubjectObvervables()

  }

  initSubjectObvervables() {
    this.subjectService.isLoggedIn.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



  loginBtn() {
    this.subjectService.login();
  }

  logoutBtn() {
    this.subjectService.logout();
  }

}
