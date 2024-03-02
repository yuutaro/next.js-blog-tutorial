import axios from "axios";

const Page = async () => {

  const blog = await axios.get(`https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blogs`, {
    headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY }
  }).then((res) => {
    return res.data;
  });

  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}

export default Page;