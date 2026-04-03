import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type ActionButtonProps = ComponentProps<typeof Button>;

export function ActionButton({ children, ...props }: ActionButtonProps) {
  return (
    <Button {...props} disabled={pending || props.disabled}>
      {children ?? "Apply"}
    </Button>
  );
}
