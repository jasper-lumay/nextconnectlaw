import type { ReactNode } from "react";

export function Badge({ children, notice }: { children: ReactNode; notice?: boolean }) {
  return <span className={`badge${notice ? " badge--notice" : ""}`}>{children}</span>;
}
