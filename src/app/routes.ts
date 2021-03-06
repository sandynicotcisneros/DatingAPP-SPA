import { AuthGuard } from './_guards/auth.guards';
import {Routes} from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { HomeComponent } from './home/home.component';

import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
    { path: 'messages', component: MessagesComponent },
    { path: 'lists', component: ListsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
