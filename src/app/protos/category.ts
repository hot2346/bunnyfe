export interface PrimaryCategory {
    name: string;
    id: number;
    secondary_categories?: SecondaryCategory[];
}

export interface SecondaryCategory {
    name: string;
    id: number;
}