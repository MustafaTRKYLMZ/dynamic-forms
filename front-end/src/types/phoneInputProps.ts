export type PhoneInputProps = {
  label: string;
  handlePhone: (label: string, fullPhoneNumber: string) => void;
  isSubmitted: boolean;
};
