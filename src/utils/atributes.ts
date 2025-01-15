export type Color = 'RED' | 'YEL' | 'PUR' | 'GRN' | 'BLU';
export type Rarity = 'HE' | 'EX' | 'SP' | 'UL';
export type RarityBig = "HERO" | "EXTREME" | "SPARKING" | "ULTRA"

export const COLORS: Record<number, Color> = {
    1: 'RED',
    2: 'YEL',
    3: 'PUR',
    4: 'GRN',
    5: 'BLU',
};

export const RARITY: Record<number, Rarity> = {
    1: 'HE',
    2: 'EX',
    3: 'SP',
    4: 'UL',
};

export const RARITY_BIG: Record<number, RarityBig> = {
    1: 'HERO',
    2: 'EXTREME',
    3: 'SPARKING',
    4: 'ULTRA',
};
