export interface PopulationData {
  data: PopulationItem[];
}

export interface PopulationItem {
  "ID Nation": string;
  Nation: string;
  "ID Year": number;
  Year: string;
  Population: number;
  "Slug Nation": string;
}
