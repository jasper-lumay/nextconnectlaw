import type { ReactNode } from "react";

export function Card({ children, interactive }: { children: ReactNode; interactive?: boolean }) {
  return <div className={`card${interactive ? " card--interactive" : ""}`}>{children}</div>;
}
