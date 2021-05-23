import { useQuery } from "react-query";
import axios from "axios";

export default function useFetchBlogs() {
  const data = useQuery("blogs", () =>
    axios
      .get("https://keck.com.au/app/api/blogs/all_blogs.php")
      .then((res) => res.data)
  );
  return data;
}
