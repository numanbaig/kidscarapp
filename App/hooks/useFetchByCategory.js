import { useQuery } from "react-query";
import axios from "axios";

export default function useFetchByCategory() {
  const data = useQuery("productsByCategory", () =>
    axios
      .get("https://keck.com.au/app/api/products/get_all_products.php")
      .then((res) => res.data)
  );
  return data;
}
