import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoveltiesPageRoutingModule } from './novelties-routing.module';

import { NoveltiesPage } from './novelties.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoveltiesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NoveltiesPage]
})
export class NoveltiesPageModule {}
