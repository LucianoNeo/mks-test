export interface IProduct {
    id: string;
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