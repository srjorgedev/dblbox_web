export interface SummaryCharacter {
    _id: string
    num: number
    name: string | Name
    color: Color[]
    type: Type
    chapter: Chapter
    rarity: Rarity
    tags: Tag[]
    lf: boolean
    transformable: boolean
    switch: boolean
    zenkai: boolean
    fusion: boolean
    states: number
}

export interface Name {
    name1: string
    name2: string
    name3?: string
    title?: string
}

export interface Color {
    _id: number
    tag: string
}

export interface Type {
    _id: number
    tag: string
}

export interface Chapter {
    _id: number
    tag: string
}

export interface Rarity {
    _id: number
    tag: string
}

export interface Tag {
    _id: number
    tag: string
}
