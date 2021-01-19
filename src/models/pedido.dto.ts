import { ItemPedidoDTO } from './item-pedido.dto';
import { PagamentoDTO } from './Pagamento.dto';
import { RefDTO } from './ref.dto';
export interface PedidoDTO {
    cliente: RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO[];
}