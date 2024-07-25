import { Routes } from '@angular/router';
import { TableComponent } from './component/table/table.component';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { ChattwoComponent } from './component/chattwo/chattwo.component';
import { SubjectComponent } from './component/subject/subject.component';

export const routes: Routes = [
    {path : '', component : TableComponent},
    {path : 'c', component : ChatRoomComponent},
    {path : 'cc', component : ChattwoComponent},
    {path : 'subject', component : SubjectComponent},
];
