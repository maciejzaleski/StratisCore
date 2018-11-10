import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SmartContractsServiceBase, SmartContractsService, FakeSmartContractsService } from './smart-contracts.service';
import { SmartContractsComponent } from './components/smart-contracts.component';
import { TransactionComponent } from './components/modals/transaction/transaction.component';
import { AddNewAddressComponent } from '../address-book/modals/add-new-address/add-new-address.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule, NgbModalModule, ClipboardModule, FormsModule, ReactiveFormsModule, SharedModule
    ],

    providers: [{ provide: SmartContractsServiceBase, useClass: SmartContractsService }],

    declarations: [
        SmartContractsComponent,
        TransactionComponent
    ],

    entryComponents: [
        TransactionComponent, AddNewAddressComponent
    ]
})
export class SmartContractsModule { }
