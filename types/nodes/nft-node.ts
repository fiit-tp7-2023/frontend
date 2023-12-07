export interface Attribute {
  traitType: string;
  value: string;
}

export interface NFTNode {
  address: string;
  name?: string;
  uri?: string;
  description?: string;
  attributes: Attribute[];
  image?: string;
  externalUrl?: string;
  animationUrl?: string;
  tokenId: string;
  createdAtBlock: number;
  raw?: string;
}
