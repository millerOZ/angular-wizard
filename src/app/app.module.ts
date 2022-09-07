
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RtlService } from '@fundamental-ngx/core/utils';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxCoreModule, FdDatetimeModule } from '@fundamental-ngx/core';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { WizardDialogExampleComponent } from './wizard-dialog-example.component';


@NgModule({
    declarations: [
        WizardDialogExampleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FundamentalNgxCoreModule, FdDatetimeModule,
        FundamentalNgxPlatformModule,
        HttpClientModule,
        CdkTableModule,
        DragDropModule,
        RouterModule.forRoot([{path: '#', component:WizardDialogExampleComponent}], { useHash: true }),
    ],
    providers: [
        RtlService,
        
    ],
    entryComponents: [
        
    ],
    bootstrap: [
        WizardDialogExampleComponent
    ]
})
export class AppModule {}
