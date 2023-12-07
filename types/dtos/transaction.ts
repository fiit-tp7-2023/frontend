import type { AddressNode, TransactionNode } from '../nodes';
import type { NFTDTO, PaginationRequestDTO, PaginationResponseDTO } from '.';

export interface TransactionDTO extends TransactionNode {
  sender: AddressNode;
  receiver: AddressNode;
  nft: NFTDTO;
}

export interface TransactionSearchRequestDTO extends PaginationRequestDTO {
  senderAddress?: string;
  receiverAddress?: string;
  nftAddress?: string;
  tagNames?: string[];
}

export interface TransactionSearchResponseDTO extends PaginationResponseDTO {
  transactions: TransactionDTO[];
}
