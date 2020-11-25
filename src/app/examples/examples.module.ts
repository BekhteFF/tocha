import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupCompComponent } from './signup-comp/signup-comp.component';
import { LandingcompComponent } from './landingcomp/landingcomp.component';
import { ProfileCompComponent } from './profile-comp/profile-comp.component'
import { SigninCompComponent } from './signin-comp/signin-comp.component'
import { FilterPipe } from './filter.pipe'
import { HighlightDirective } from './highlight.pipe';
import { SettingsCompComponent } from './settings-comp/settings-comp.component'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule    
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        SigninComponent,
        ShoppingCartComponent,
        FeedbackComponent,
        NgbdModalComponent,
        NgbdModalContent,
        SettingsComponent,
        ForgotComponent,
        SignupCompComponent,
        SigninCompComponent,
        LandingcompComponent,
        ProfileCompComponent,
        HighlightDirective,
        FilterPipe,
        SettingsCompComponent
    ],
    entryComponents: [NgbdModalContent],
})
export class ExamplesModule { }
