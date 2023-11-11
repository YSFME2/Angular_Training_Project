import { Product } from "../Models/Product";

export interface IProductServices{
  GetProducts():Array<Product>;
}

export class ProductServices implements IProductServices{

  GetProducts(): Product[] {
    return [
      {
        Id: 1,
        Name: 'I fucken Phone',
        Price: 23222,
        Description: 'I fucken phone for your fucken bitch',
        Brand: 'fucken Apple',
        IsInStock: true,
      },
      {
        Id: 2,
        Name: 'HDD 512',
        Price: 200,
        Description: 'hard disk drive for store your fucken shit',
        Brand: 'WesternDigital',
        IsInStock: true,
      },
      {
        Id: 3,
        Name: 'HP EliteDisplay',
        Price: 1200,
        Description: 'HP Display',
        Brand: 'HP',
        IsInStock: false,
      },
    ];
  }

}
