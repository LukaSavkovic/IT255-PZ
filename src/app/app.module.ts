import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { StoreComponent } from './store/store.component';




@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    IntroComponent,
    NavigationComponent,
    SocialComponent,
    TestimonialsComponent,
    LogoComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    StoreComponent,
   
    

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
