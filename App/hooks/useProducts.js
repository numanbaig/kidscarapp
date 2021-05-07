import { useQuery } from "react-query";
import axios from "axios";

export default function usePaymentPlans() {
  const data = useQuery("products", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
  );
  return data;
}
