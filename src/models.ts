export interface IFundsCurrentItems {
  title: string;
  text: string;
  city: string;
  district: string;
  img: string;
  id: string;
}

export type TPaginatedItems = IFundsCurrentItems[];

export interface IPaginated {
  itemsPerPage: number;
  items: IFundsCurrentItems[];
  children: (value: any[] | null) => JSX.Element;
}
