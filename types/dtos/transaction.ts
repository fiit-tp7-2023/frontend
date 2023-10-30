import { AddressNode, NFTNode, TransactionNode } from '../nodes';
import { PaginationRequestDTO, PaginationResponseDTO } from '.';

export interface TransactionDTO extends TransactionNode {
  sender: AddressNode;
  receiver: AddressNode;
  nft: NFTNode;
}

export interface TransactionSearchRequestDTO extends PaginationRequestDTO {
  senderId?: string;
  receiverId?: string;
  nftId?: string;
}

export interface TransactionSearchResponseDTO extends PaginationResponseDTO {
  transactions: TransactionDTO[];
}
