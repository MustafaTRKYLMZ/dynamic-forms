import React, { ChangeEvent } from "react";

export type FormItemProps = {
  label: string;
  type: string;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;

  value?: string;
  disabled?: boolean;
  handleLocation?: (name: string, value: string) => void;
  handlePhone?: (label: string, phoneNumber: string) => void;
  options?: string[];
  handleOptions?: (e: ChangeEvent<HTMLSelectElement>) => void;
};
