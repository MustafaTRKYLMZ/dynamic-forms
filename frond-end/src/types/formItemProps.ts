export type FormItemProps = {
  label: string;
  type: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
  disabled?: boolean;
  handleLocation?: (name: string, value: string) => void;
  handlePhone?: (label: string, phoneNumber: string) => void;
};
