import { PedidoService } from './../../services/domain/pedido.service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderconfirmationPage } from './orderconfirmation';

@NgModule({
  declarations: [
    OrderconfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderconfirmationPage),
  ],
  providers: [
    PedidoService
  ]
})
export class OrderconfirmationPageModule {}
