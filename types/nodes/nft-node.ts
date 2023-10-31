import type { Attribute } from './attribute';

export interface NFTNode {
  id: string;
  name?: string;
  uri?: string;
  description?: string;
  attributes: Attribute[];
}
