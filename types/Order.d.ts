declare interface Order {
  _id: string,
  sales_agent: string,
  distributor: string,
  shop: string,
  products:  {
      name: string,
      amount: string,
      price: string,
      discount: string,
    }[],
  total_amount: number,
  total_amount_discount: number,
  status: {
    colour: string;
    status: string;
    _id: { $oid: string };
  },
  photos: string[];
}
