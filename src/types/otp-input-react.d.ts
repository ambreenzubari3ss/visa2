declare module 'otp-input-react' {
  interface OTPInputProps {
    value: string;
    onChange: (otp: string) => void;
    numInputs?: number;
    renderSeparator?: React.ReactNode;
    renderInput?: (props: any) => React.ReactNode;
    inputStyle?: React.CSSProperties;
    inputClassName?: string;
    shouldAutoFocus?: boolean;
    placeholder?: string;
    OTPLength?: number;
    disabled?: boolean;
    autoFocus?: boolean;
    secure?: boolean;
    otpType?: "number" | "alpha" | "alphanumeric";
  }

  const OTPInput: React.FC<OTPInputProps>;
  export default OTPInput;
} 