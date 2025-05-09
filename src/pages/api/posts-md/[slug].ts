import type { NextApiRequest, NextApiResponse } from 'next';
import { getPostBySlug } from '@/lib/content';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (typeof slug !== 'string') {
    res.status(400).json({ error: 'Slug must be a string' });
    return;
  }

  const post = getPostBySlug(slug);

  if (post && post.rawContent) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    res.status(200).send(post.rawContent);
  } else {
    res.status(404).json({ error: 'Post not found or raw content unavailable' });
  }
} 