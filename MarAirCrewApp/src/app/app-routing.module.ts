import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'inbox', loadChildren: './pages/inbox/inbox.module#InboxModule' },
  { path: 'logbook', loadChildren: './pages/logbook/logbook.module#LogbookModule' },
  { path: 'roster', loadChildren: './pages/roster/roster.module#RosterModule' },
  { path: 'track', loadChildren: './pages/track/track.module#TrackModule' },
  { path: 'concierge', loadChildren: './pages/concierge/concierge.module#ConciergeModule' },
  { path: 'personal-docs', loadChildren: './pages/personal-docs/personal-docs.module#PersonalDocsModule' },
  { path: 'briefing', loadChildren: './pages/briefing/briefing.module#BriefingModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
