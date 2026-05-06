import { NextResponse } from 'next/server'
import { fetchProducts } from '@/lib/sanity'

export async function GET() {
  try {
    const products = await fetchProducts()
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json([])
  }
}
