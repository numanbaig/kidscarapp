import { useQuery } from "react-query";
import axios from "axios";

export default function useFetchProducts() {
  const data = useQuery("products", () =>
    axios
      .get("https://keck.com.au/app/api/products/get_all_products.php")
      .then((res) => res.data)
  );
  return data;
}
