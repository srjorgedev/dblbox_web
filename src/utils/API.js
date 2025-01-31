export const BASE_API_URL = "https://complicated-dori-api-dev-4420594a.koyeb.app/api/v1/"
export const API_URL_V2 = "https://complicated-dori-api-dev-4420594a.koyeb.app/api/v2/"
export const ICO_API_URL = "https://raw.githubusercontent.com/srjorgedev/dblbox_resources/refs/heads/main/bchaico/"
export const COLOR_API_URL = "https://raw.githubusercontent.com/srjorgedev/dblbox_resources/refs/heads/main/color/"
export const CUT_API_URL = "https://raw.githubusercontent.com/srjorgedev/dblbox_resources/refs/heads/main/bchacut/"
export const ELE_API_URL = "https://raw.githubusercontent.com/srjorgedev/dblbox_resources/refs/heads/main/element/"
export const RAR_API_URL = "https://raw.githubusercontent.com/srjorgedev/dblbox_resources/refs/heads/main/rarity/"

export const BASE_API_ENDPOINTS = {
    all: `characters/get/summary/all`,
    id: (id) => `characters/get/${id}`
}