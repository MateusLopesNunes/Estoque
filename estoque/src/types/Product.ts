export type Product = {
    id?: number;
	name: string;
	barCode: number;
	price: number;
	quantity: number;
    category?: Category;	
}

export type ProductPage = {
    content?: Product[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type Category = {
    id?: number;
	name: string;
}