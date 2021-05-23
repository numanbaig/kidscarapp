import { useQuery } from "react-query";
import axios from "axios";

export default function useFetchCategories() {
  const data = useQuery("categories", () =>
    axios
      .get("https://keck.com.au/app/api/categories/categories.php")
      .then((res) => res.data)
  );
  return data;
}
