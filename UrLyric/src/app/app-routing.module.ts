import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { LyricComponent } from './components/lyric/lyric.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'search', component: SearchComponent,// canActivate: [AuthGuardGuard]
},
  {path: 'about', component: AboutComponent, // canActivate: [AuthGuardGuard]
},
  {path: 'artist/:id', component: ArtistComponent,  // canActivate: [AuthGuardGuard]
},
  {path: 'album/:id', component: AlbumComponent,  // canActivate: [AuthGuardGuard]
},
  {path: 'lyric/:id', component: LyricComponent, // canActivate: [AuthGuardGuard]
},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
