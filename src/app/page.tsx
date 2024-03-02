import { CMSBlogs } from "@/types";
import axios from "axios";


const Page = async () => {

  const blogs: CMSBlogs | null = await axios.get(`https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blogs`, {
    headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY }
  }).then((res) => {
    return res.data;
  }).catch((error) => {
    return null;
  });

  return (
    <div>
      <h1>Page</h1>
      <ul>
        {blogs && blogs.contents.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;