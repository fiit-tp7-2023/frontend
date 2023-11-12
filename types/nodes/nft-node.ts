export interface Attribute {
  traitType: string;
  value: string;
}

export interface NFTNode {
  id: string;
  name?: string;
  uri?: string;
  description?: string;
  attributes: Attribute[];
}
