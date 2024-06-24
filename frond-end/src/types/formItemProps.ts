export type FormItemProps = {
  label: string;
  type: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  disabled?: boolean;
};
