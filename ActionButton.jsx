import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type ActionButtonProps = ComponentProps<typeof Button> & {
  pendingLabel?: string;
};

export function ActionButton({
  children,
  pendingLabel,
  ...props
}: ActionButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button {...props} disabled={pending || props.disabled}>
      {pending ? pendingLabel ?? "Working..." : children}
    </Button>
  );
}
