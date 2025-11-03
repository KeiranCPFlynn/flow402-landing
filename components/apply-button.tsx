"use client";

import { useCallback, type ReactNode } from "react";

const WAITLIST_URL = "https://tally.so/r/mDrr7X";

type ApplyButtonProps = {
  children?: ReactNode;
  className?: string;
};

export function ApplyButton({ children, className }: ApplyButtonProps) {
  const handleClick = useCallback(() => {
    const target = document.getElementById("apply");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <a
      href={WAITLIST_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children ?? "Get Early Access"}
    </a>
  );
}
