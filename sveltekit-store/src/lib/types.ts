export type StaffMember = {
    ip: string;
    level: number;
    name: string;
    password: string;
}

export type ProductUpdateRequest = {
    id: number;
    author_ip: string;
    product_id: number;
    data: string;
    status: number;
}

export type Product = {
    id: number;
    name: string;
    category: string;
    materials?: string;
    description?: string;
}

export type ProductVariant = {
    id: number;
    product_id: number;
    color: string;
    stock_id: number;
    gallery_map: string;
}

export type ProductStock = {
    id: number;
    size: string;
    amount: number;
}

export type ProductRecord = {
    data: Product;
    variants: ProductVariant[];
}