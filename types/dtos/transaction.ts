import { AddressNode, NFTNode, TransactionNode } from '../nodes';
import { PaginationDTO } from '.';

export interface TransactionDTO extends TransactionNode {
  sender: AddressNode;
  receiver: AddressNode;
  nft: NFTNode;
}

export interface TransactionSearchRequestDTO extends PaginationDTO {
  senderId: string;
  receiverId: string;
  nftId: string;
}
