import { getPayload, type Payload } from 'payload'
import config from '../payload.config.js'
import { demoUser, articles } from './data.js'

async function clear(payload: Payload): Promise<void> {
  payload.logger.info('Clearing database...')

  await payload.delete({ collection: 'articles', where: { id: { exists: true } } })
  await payload.delete({ collection: 'media', where: { id: { exists: true } } })
  await payload.delete({ collection: 'users', where: { id: { exists: true } } })

  payload.logger.info('Database cleared.')
}

async function seed(payload: Payload): Promise<void> {
  payload.logger.info('Seeding database...')

  // Create demo user
  await payload.create({ collection: 'users', data: demoUser })
  payload.logger.info(`Created user: ${demoUser.email}`)

  // Create articles as drafts (featuredImage is required but we skip media upload
  // since R2 storage isn't available during local seeding on Cloudflare Workers)
  for (const article of articles) {
    const doc = await payload.create({
      collection: 'articles',
      locale: 'en',
      draft: true,
      data: {
        title: article.title.en,
        slug: article.slug,
        excerpt: article.excerpt.en,
        content: article.content.en,
        category: article.category,
        readTime: article.readTime,
        featured: article.featured,
        publishedDate: article.publishedDate,
      },
    })

    await payload.update({
      collection: 'articles',
      id: doc.id,
      locale: 'ar',
      draft: true,
      data: {
        title: article.title.ar,
        excerpt: article.excerpt.ar,
        content: article.content.ar,
      },
    })

    payload.logger.info(`Created article draft: ${article.slug}`)
  }

  payload.logger.info('Seeding complete. Upload images via the admin panel to publish articles.')
}

try {
  const payload = await getPayload({ config })
  await clear(payload)
  await seed(payload)
} catch (error) {
  console.error('Seed failed:', error)
  process.exit(1)
}
process.exit(0)
