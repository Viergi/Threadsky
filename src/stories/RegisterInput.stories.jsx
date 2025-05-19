import React from "react";
import RegisterInput from "../components/RegisterInput";

export default {
  title: "RegisterInput",
  component: RegisterInput,
  tags: ["autodocs"],
};

export const Default = {
  decorators: [(story) => <article className="mx-80">{story()}</article>],
};
