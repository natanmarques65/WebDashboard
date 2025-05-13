import { AxiosInstance } from "axios";
import { getApi } from "./Api/ApiService";
import { sellersRanking } from "../Model/SellerRanking";

export class SaleService {
  private api: AxiosInstance;

  constructor() {
    this.api = getApi("apiDashboard");
  }

  public async getAnualSalesAmount(year: number): Promise<number> {
    var request = await this.api({
      method: "GET",
      url: "sales/anual-amount/",
      params: {
        year: year,
      },
    });

    return request.data;
  }
}
