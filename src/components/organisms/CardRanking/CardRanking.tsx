import { ReactNode } from "@tanstack/react-router";
import { Card } from "../../Card/Card";
import { CardBody } from "../../Card/CardBody";
import { CardHeader } from "../../Card/CardHeader";
import { IconButton } from "../../IconButton/IconButton";
import Tooltip from "../../Tooltip/Tooltip";
import useSellerRanking from "../../../hooks/useSellerRanking";
import { useEffect } from "react";

export type CardRankingProps = {
  showIcon: boolean;
  tooltipInfo: string;
  cardHeader: string;
  children: ReactNode;
};

function CardRanking({
  showIcon,
  tooltipInfo = "",
  cardHeader,
  children,
  ...props
}: CardRankingProps) {
  return (
    <Card size="md" className="bg-terceira absolute">
      <CardHeader>
        <span className="flex flex-row justify-between text-lg">
          <span className="flex flex-row gap-2">
            {showIcon && (
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
            )}
            {cardHeader}
          </span>

          {tooltipInfo != "" && (
            <Tooltip info={tooltipInfo}>
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
          )}
        </span>
      </CardHeader>
      <CardBody className="flex flex-col justify-center  text-lg">
        {children}
      </CardBody>
    </Card>
  );
}

export default CardRanking;
