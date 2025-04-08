import { getBlogs } from '@/lib/db-blog'
import Blogs_24 from '@/components/demo/blogs_24/Blogs_24';

export default async function P3Page_24() {
    const blogs = await getBlogs();
    console.log('blogs', JSON.stringify(blogs))
    return <Blogs_24 blogs={blogs} />
}