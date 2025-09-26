import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { FluidModule } from 'primeng/fluid';
import { DatePickerModule } from 'primeng/datepicker';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { Message } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { Dialog, DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { TagModule } from 'primeng/tag';

@NgModule({
    imports: [
        ButtonModule, SelectModule, CardModule, InputTextModule, FloatLabelModule, ToastModule, FluidModule, DatePickerModule, CheckboxModule, 
        MenubarModule, Message, ConfirmDialogModule, TooltipModule, TableModule, Dialog, DialogModule, DropdownModule, TagModule
    ],
    exports: [
        ButtonModule, SelectModule, CardModule, InputTextModule, FloatLabelModule, ToastModule, FluidModule, DatePickerModule, CheckboxModule, 
        MenubarModule, Message, ConfirmDialogModule, TooltipModule, TableModule, Dialog, DialogModule, DropdownModule, TagModule
    ],
    providers:[]
})
export class ImportsModule{}