import React from "react";
import { InputOTP, InputOTPSlot } from "../ui/input-otp";

type Props = {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
};

const OTPInput = ({ otp, setOtp }: Props) => {
  const handleChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  return (
    <InputOTP maxLength={6} value={otp} onChange={handleChange}>
      <div className="flex gap-3">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <InputOTPSlot index={index} />
          </div>
        ))}
      </div>
    </InputOTP>
  );
};

export default OTPInput;
