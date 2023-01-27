export interface IProduct {
    id: number;
    photo: string
    name: string
    brand: string
    price: number
    description: string

}

export interface ICart {
    cart: IProduct[]
}

export interface ICartState {
    cart: {
        cart: IProduct[]
    }
}

export interface CardProps {
    id: number;
    photo: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    quantity: number;
}