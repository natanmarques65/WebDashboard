import { ReactNode } from "react";
import { Card } from "../../Card/Card";
import { CardBody } from "../../Card/CardBody";
import { CardHeader } from "../../Card/CardHeader";
import { IconButton } from "../../IconButton/IconButton";
import Tooltip from "../../Tooltip/Tooltip";

export type CardGenericProps = {
  showIcon: boolean;
  headerIcon?: ReactNode;
  tooltipInfo: string;
  cardHeader: string;
  children: ReactNode;
};

function CardGeneric({
  showIcon,
  headerIcon,
  tooltipInfo = "",
  cardHeader,
  children,
  ...props
}: CardGenericProps) {
  return (
    <Card size="md" className="bg-terceira absolute">
      <CardHeader>
        <span className="flex flex-row justify-between text-lg">
          <span className="flex flex-row gap-2">
            {showIcon && headerIcon}
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
      <CardBody className="flex flex-col justify-center  text-lg p-4">
        {children}
      </CardBody>
    </Card>
  );
}

export default CardGeneric;
