import { createContext, useContext, useState, ReactNode } from "react";

type TooltipData = {
  info: string;
  x: number;
  y: number;
  visible: boolean;
};

type TooltipContextType = {
  show: (text: string, x: number, y: number) => void;
  hide: () => void;
  tooltip: TooltipData;
};

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

export const TooltipProvider = ({ children }: { children: ReactNode }) => {
  const [tooltip, setTooltip] = useState<TooltipData>({
    info: "",
    x: 0,
    y: 0,
    visible: false,
  });

  const show = (info: string, x: number, y: number) => {
    setTooltip({ info, x, y, visible: true });
  };

  const hide = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <TooltipContext.Provider value={{ tooltip, show, hide }}>
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltip = () => {
  const ctx = useContext(TooltipContext);
  if (!ctx) {
    throw new Error("useTooltip must be used inside TooltipProvider");
  }

  return ctx;
};
