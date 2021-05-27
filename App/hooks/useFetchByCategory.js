import { useQuery } from "react-query";
import axios from "axios";

export default function useFetchByCategory(id) {
  console.log("idddddddd", id);
  const data = useQuery("productsByCategory", () =>
    axios
      .get(
        `https://keck.com.au/app/api/products/product_by_category.php?id=${id}`
      )
      .then((res) => res.data)
  );
  return data;
}
