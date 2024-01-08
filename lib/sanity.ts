import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const SanityClient = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'etb4wk61',
    useCdn: false,
})

const builder = imageUrlBuilder(SanityClient);

export function urlFor(source : any) {
    return builder.image(source)
}