import { AxiosInstance } from "axios";
import { getApi } from "./Api/ApiService";
import { sellersRanking } from "../Model/SellerRanking";

export class SellerService {
  private api: AxiosInstance;

  constructor() {
    this.api = getApi("apiDashboard");
  }

  public async getSellersRanking(
    maxSellers: number
  ): Promise<Array<sellersRanking>> {
    var request = await this.api({
      method: "GET",
      url: "seller/ranking/",
      params: {
        maxSeller: maxSellers,
      },
    });

    return request.data;
  }
}
