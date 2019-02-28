export interface Result {
    id: string,
    name: string,
    image_url: string,
    rating: number,
    display_phone: string,
    location: {
        address1:string,
        address2:string,
        address3:string,
        city:string,
        state:string,
        zip_code:string
    },
    transaction: any[]
}