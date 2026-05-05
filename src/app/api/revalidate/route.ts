import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  if (!secret || secret !== process.env.SANITY_API_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (slug) {
    const query = `*[_type == "product" && slug.current == $slug][0]`
    const product = await client.fetch(query, { slug })
    return NextResponse.json({ revalidated: true, product })
  }

  await client.fetch('*')
  return NextResponse.json({ revalidated: true })
}
