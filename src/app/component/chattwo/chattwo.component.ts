import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatServiceService } from '../../service/chat-service.service';

@Component({
  selector: 'app-chattwo',
  standalone: true,
  imports: [],
  templateUrl: './chattwo.component.html',
  styleUrl: './chattwo.component.css'
})
export class ChattwoComponent {

  messages: any[] = [];
  newMessage: string = '';
  private subscription: Subscription | undefined;

  constructor(private chatService: ChatServiceService) {}

  ngOnInit() {

  }


}
