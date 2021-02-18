export interface PrimaryCategory {
    name: string;
    id: number;
    matched_product_number: number;
    secondary_categories?: SecondaryCategory[];
}

export interface SecondaryCategory {
    name: string;
    id: number;
    matched_product_number: number;
}