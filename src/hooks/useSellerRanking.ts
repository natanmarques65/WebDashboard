import { useState } from "react";
import { SellerService } from "../Services/Sellers";
import { sellersRanking } from "../Model/SellerRanking";

function useSellerRanking(maxSellers: number) {
  const [ranking, setRanking] = useState<Array<sellersRanking>>();

  const getRanking = async () => {
    var sellerService = new SellerService();
    var ranking = await sellerService.getSellersRanking(maxSellers);
    setRanking(ranking);
  };

  return { ranking, getRanking };
}

export default useSellerRanking;
