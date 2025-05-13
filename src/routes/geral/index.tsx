import { createFileRoute } from "@tanstack/react-router";
import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/Card/CardHeader";
import { CardBody } from "../../components/Card/CardBody";
import { IconButton } from "../../components/IconButton/IconButton";
import Tooltip from "../../components/Tooltip/Tooltip";
import CardRanking from "../../components/organisms/CardRanking/CardRanking";
import useSellerRanking from "../../hooks/useSellerRanking";
import { useEffect, useState } from "react";
import CardGeneric from "../../components/organisms/CardGeneric/CardGeneric";
import { SaleService } from "../../Services/Sales";
import GaugeChart from "../../components/Gauge/Gauge";

export const Route = createFileRoute("/geral/")({
  component: RouteComponent,
});

const rankingIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-6"
  >
    <path
      d="M16.0739 9.38174L19.2415 11.3082L18.4011 7.67509L21.2456 5.2444L17.509 4.92117L16.0739 1.50787L14.6129 4.92117L10.9022 5.2444L13.7208 7.67509L12.8416 11.3082L16.0739 9.38174ZM19.9526 29.952H12.1951V13.1441H19.9526V29.952ZM1.85181 22.1945V29.952H9.60931V22.1945H1.85181ZM7.02347 27.3662H4.43764V24.7804H7.02347V27.3662ZM22.5385 17.0229V29.952H30.296V17.0229H22.5385ZM27.7101 27.3662H25.1243V19.6087H27.7101V27.3662Z"
      fill="#F1F5F9"
    />
  </svg>
);

function RouteComponent() {
  const { ranking, getRanking } = useSellerRanking(2);
  const [anualAmount, setAnualAmount] = useState(0);
  const [lastYearAmount, setLastYearAmount] = useState(0);

  useEffect(() => {
    const fetchSellerRanking = async () => {
      await getRanking();
    };

    fetchSellerRanking();
  }, []);

  useEffect(() => {
    const getAnualSalesAmount = async () => {
      var salesService = new SaleService();

      setLastYearAmount(
        await salesService.getAnualSalesAmount(new Date().getFullYear() - 1)
      );

      setAnualAmount(
        await salesService.getAnualSalesAmount(new Date().getFullYear())
      );
    };

    getAnualSalesAmount();
  }, []);

  return (
    <div className="w-full h-full space-y-2 text-slate100 p-3">
      Geral
      <span className="flex flex-row justify-center space-x-2">
        <Card size="lg">
          <CardHeader>
            <span className="flex flex-row justify-between text-lg">
              Vendas - Mensais
              <Tooltip info="Vendas mensais. O icone representa a comparação com o mesmo período do mês anterior">
                <IconButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </IconButton>
              </Tooltip>
            </span>
          </CardHeader>
          <CardBody className="flex flex-row p-4  gap-4 justify-center  text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
            R$ 1.200.123,23
          </CardBody>
        </Card>
        <CardGeneric
          showIcon={false}
          cardHeader="Vendas - Anuais"
          tooltipInfo={"Melhores vendedores de Agosto"}
        >
          <CardBody>
            <div className="flex gap-4">
              {lastYearAmount > anualAmount ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              )}
              R$ {anualAmount}
            </div>
          </CardBody>
        </CardGeneric>
      </span>
      <span className="flex flex-col w-full h-full justify-center items-center">
        <Card size="xlg">
          <CardHeader className="text-lg">
            Meta total | Ranking produtos
          </CardHeader>
          <CardBody>
            <span className="flex flex-row justify-around w-full">
              <GaugeChart value={75} label="Meta Mensal" />
              <CardGeneric
                showIcon={true}
                headerIcon={rankingIcon}
                cardHeader="Top 3 vendedores"
                tooltipInfo="Melhores venderoes do mês de Agosto"
              >
                {ranking?.map((seller) => (
                  <span className="flex flex-row justify-center items-center gap-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                    >
                      <path
                        d="M10.2787 13.7502C10.9558 13.0475 11.7676 12.4887 12.6657 12.1071C13.5637 11.7256 14.5296 11.5291 15.5053 11.5296C17.4059 11.5296 19.2968 12.2666 20.7319 13.7502C23.6119 16.7077 23.6119 21.5174 20.7319 24.4749C20.0556 25.1785 19.2439 25.7379 18.3457 26.1195C17.4474 26.5012 16.4813 26.6971 15.5053 26.6955C13.5369 26.6955 11.6751 25.9101 10.2787 24.4749C8.88247 23.0403 8.10587 21.1145 8.11631 19.1126C8.11631 17.0859 8.88237 15.1853 10.2787 13.7502ZM14.619 14.5851C14.3685 14.5854 14.1278 14.6828 13.9474 14.8567C13.767 15.0305 13.6609 15.2675 13.6514 15.5179C13.6419 15.7683 13.7296 16.0126 13.8963 16.1997C14.0629 16.3868 14.2955 16.5022 14.5453 16.5216V22.3028C14.5453 22.56 14.6475 22.8067 14.8294 22.9885C15.0112 23.1704 15.2579 23.2725 15.515 23.2725C15.7722 23.2725 16.0189 23.1704 16.2007 22.9885C16.3826 22.8067 16.4847 22.56 16.4847 22.3028V15.5548C16.4847 15.2976 16.3826 15.051 16.2007 14.8691C16.0189 14.6873 15.7722 14.5851 15.515 14.5851H14.619Z"
                        fill="#FFD700"
                      />
                      <path
                        d="M13.1373 2.8412L15.5131 6.74613L17.8888 2.8412C18.2185 2.27878 18.81 1.93939 19.4597 1.93939H25.8499C27.256 1.93939 28.1384 3.4521 27.4596 4.67391C26.1831 6.94015 24.3764 8.86329 22.1942 10.2787C21.8465 10.5462 21.4595 10.7585 21.0471 10.908C23.5818 12.7097 25.241 15.7119 25.241 19.1126C25.241 24.6233 20.8822 29.0906 15.5053 29.0906C10.1284 29.0906 5.76964 24.6233 5.76964 19.1126C5.76964 15.709 7.43266 12.7029 9.97033 10.9032C9.56397 10.7548 9.18318 10.5442 8.84161 10.2787C6.6619 8.86033 4.85585 6.93786 3.57621 4.67391C2.88773 3.4521 3.77015 1.93939 5.17619 1.93939H11.5664C12.2161 1.93939 12.8076 2.27878 13.1373 2.8412ZM15.1921 9.13932C15.2955 9.13609 15.3999 9.13447 15.5053 9.13447C17.017 9.13283 18.5073 9.49185 19.8524 10.1817C20.4894 10.1319 21.0981 9.89813 21.6046 9.50877L21.6337 9.4855L21.6667 9.46611C23.7165 8.13622 25.4137 6.32957 26.6131 4.2007C26.6857 4.06798 26.7226 3.91866 26.7201 3.7674C26.7176 3.61613 26.6758 3.46811 26.5988 3.33786C26.5219 3.2076 26.4124 3.09959 26.2811 3.02442C26.1498 2.94925 26.0012 2.90951 25.8499 2.90908H19.4597C19.3108 2.9084 19.1643 2.94716 19.0352 3.02141C18.9061 3.09567 18.799 3.20278 18.7247 3.33186L18.7208 3.33865L15.1921 9.13932ZM9.46415 25.3186C10.2474 26.1327 11.1872 26.7801 12.227 27.2217C13.2669 27.6633 14.3853 27.89 15.515 27.8882C17.7938 27.8882 19.9465 26.9767 21.5756 25.3186C24.9113 21.8956 24.9113 16.3296 21.5756 12.9066C20.7898 12.0945 19.8488 11.4488 18.8085 11.0079C17.7682 10.5669 16.6498 10.3397 15.5199 10.3397C14.3899 10.3397 13.2715 10.5669 12.2312 11.0079C11.1909 11.4488 10.2499 12.0945 9.46415 12.9066C7.84427 14.565 6.9421 16.7943 6.95266 19.1126C6.95266 21.4592 7.84477 23.6604 9.46415 25.3186Z"
                        fill="#FFD700"
                      />
                    </svg>
                    {seller.seller.name} - R$ {seller.totalSalesAmount}
                  </span>
                ))}
              </CardGeneric>
            </span>
          </CardBody>
        </Card>
      </span>
    </div>
  );
}
