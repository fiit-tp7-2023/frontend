import type { NFTNode } from '../nodes';
import type { TagRelationDTO } from '.';

export interface NFTDTO extends NFTNode {
  tags: TagRelationDTO[];
}
