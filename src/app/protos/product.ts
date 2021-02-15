export interface Product {
    name: string;
    sku: string;
    thumbnail_image_urls: string[];
    hd_image_urls: string[];
    categories: number[];
    price: number;
    currency: string;
}