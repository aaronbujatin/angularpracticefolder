import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  private socket$: WebSocketSubject<any>;
  private apiUrl = 'http://localhost:8080/api/messages'; // Adjust this URL as needed

  constructor(private http: HttpClient) {
    this.socket$ = webSocket('ws://localhost:8080/chat');
  }

  public getAllMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
