import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts, Post } from '@/lib/content';

// 定义API返回的文章元数据结构
interface PostIndexEntry {
  title: string;
  slug: string;
  publishDate: string;
  excerpt?: string;
  tags?: string[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostIndexEntry[] | { error: string }>
) {
  try {
    const allPosts: Post[] = getAllPosts();
    
    const postsIndex: PostIndexEntry[] = allPosts.map(post => ({
      title: post.title,
      slug: post.slug,
      publishDate: post.publishDate,
      excerpt: post.excerpt,
      tags: post.tags,
    }));

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json(postsIndex);
  } catch (error) {
    console.error('Error fetching posts index:', error);
    res.status(500).json({ error: 'Failed to fetch posts index' });
  }
} 