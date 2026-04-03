import figma from "figma";
import { ActionButton } from "./ActionButton";

figma.connect(
  ActionButton,
  "https://www.figma.com/design/22Dte3wF5lPJdN4tKRZzt0/Button?node-id=2-5&t=qFxTzNbqimISq8kH-4",
  {
    props: {
      disabled: figma.boolean("Disabled"),
    },
    example: ({ disabled }) => {
      return <ActionButton disabled={disabled}>Submit</ActionButton>;
    },
  }
);
