export interface ProductResponseAPI {
    message: string;
    data:    Product[];
}

export interface Product {
    id:    number;
    img:   string;
    name:  string;
    price: number;
}