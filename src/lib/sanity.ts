import { client } from '@/sanity/lib/client'
import { Product, Event } from '@/types'
import { urlFor } from '@/sanity/lib/image'
import { products as fallbackProducts } from './products'
import { events as fallbackEvents } from './events'

const sanityEnabled =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== '' &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

export async function fetchProducts(): Promise<Product[]> {
  if (!sanityEnabled) return fallbackProducts

  try {
    const query = `*[_type == "product"] | order(name asc) {
      _id,
      "slug": slug.current,
      name,
      description,
      price,
      "image": image.asset->url,
      category,
      featured
    }`
    const data = await client.fetch(query)
    if (!data || data.length === 0) return fallbackProducts
    return data.map((p: any) => ({
      ...p,
      image: p.image ? urlFor(p.image).width(600).height(600).url() : p.image,
    }))
  } catch {
    return fallbackProducts
  }
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  if (!sanityEnabled) return fallbackProducts.filter((p) => p.featured)

  try {
    const query = `*[_type == "product" && featured == true] | order(name asc) {
      _id,
      "slug": slug.current,
      name,
      description,
      price,
      "image": image.asset->url,
      category,
      featured
    }`
    const data = await client.fetch(query)
    if (!data || data.length === 0) return fallbackProducts.filter((p) => p.featured)
    return data.map((p: any) => ({
      ...p,
      image: p.image ? urlFor(p.image).width(600).height(600).url() : p.image,
    }))
  } catch {
    return fallbackProducts.filter((p) => p.featured)
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | undefined> {
  if (!sanityEnabled) return fallbackProducts.find((p) => p.slug === slug)

  try {
    const query = `*[_type == "product" && slug.current == $slug][0] {
      _id,
      "slug": slug.current,
      name,
      description,
      price,
      "image": image.asset->url,
      category,
      featured
    }`
    const data = await client.fetch(query, { slug })
    if (!data) return fallbackProducts.find((p) => p.slug === slug)
    return {
      ...data,
      image: data.image ? urlFor(data.image).width(600).height(600).url() : data.image,
    }
  } catch {
    return fallbackProducts.find((p) => p.slug === slug)
  }
}

export async function fetchEvents(): Promise<Event[]> {
  if (!sanityEnabled) return fallbackEvents

  try {
    const query = `*[_type == "event"] | order(date asc) {
      _id,
      "slug": slug.current,
      title,
      description,
      date,
      time,
      location,
      "image": image.asset->url
    }`
    const data = await client.fetch(query)
    if (!data || data.length === 0) return fallbackEvents
    return data.map((e: any) => ({
      ...e,
      image: e.image ? urlFor(e.image).width(800).height(500).url() : e.image,
    }))
  } catch {
    return fallbackEvents
  }
}

export async function fetchEventBySlug(slug: string): Promise<Event | undefined> {
  if (!sanityEnabled) return fallbackEvents.find((e) => e.slug === slug)

  try {
    const query = `*[_type == "event" && slug.current == $slug][0] {
      _id,
      "slug": slug.current,
      title,
      description,
      date,
      time,
      location,
      "image": image.asset->url
    }`
    const data = await client.fetch(query, { slug })
    if (!data) return fallbackEvents.find((e) => e.slug === slug)
    return {
      ...data,
      image: data.image ? urlFor(data.image).width(800).height(500).url() : data.image,
    }
  } catch {
    return fallbackEvents.find((e) => e.slug === slug)
  }
}
