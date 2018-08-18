import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HeaderComponent },
    { path: 'About', component: IntroComponent },
    { path: 'Gallery', component: GalleryComponent },
    { path: 'Services', component: ContentComponent },
    { path: 'Feedback', component: TestimonialsComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
    { path: 'Store', component: StoreComponent },
    { path: 'Admin', component: AdminComponent }

];

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}