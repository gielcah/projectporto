export interface ArtworkType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
}

export interface CommissionPricing {
  type: string;
  amount: number;
}

export interface CommissionType {
  id: string;
  name: string;
  description: string;
  includes: string[];
  pricing: CommissionPricing[];
  turnaround: string;
  sampleImage: string;
}