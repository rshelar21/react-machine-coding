import { useEffect, useRef, useState, type Ref } from "react";
import "../style.css";

const MAX_STEPS = 2;
const MAX_OTP_LENGTH = 4;

export const OtpPage = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState<null | string>("");

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef<any[]>([]);

  useEffect(() => {
    if (inputRefs?.current && inputRefs?.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, otps?: string) => {
    e.preventDefault();
    setErrorMsg(null);
    if (currentStep === 1) {
      const regex = /[0-9]/g;

      if (regex.test(phoneNumber)) {
        setCurrentStep(MAX_STEPS);
      } else {
        setErrorMsg("Please check number");
      }
    } else {
      if (otps?.length === MAX_OTP_LENGTH) {
        console.log(`Login success:`, otps);
      }
    }
  };

  const handleOptChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (isNaN(Number(value))) return;
    const newOtps = [...otp];
    newOtps[index] = value.slice(value.length - 1);
    setOtp(newOtps);

    const combinedOtp = newOtps.join("");

    if (combinedOtp.length === MAX_OTP_LENGTH) handleSubmit(e, combinedOtp);

    if (index < MAX_OTP_LENGTH - 1 && inputRefs?.current[index + 1] && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="login__page">
      <div className="login__card">
        <form className="login__form" onSubmit={handleSubmit}>
          <h1 className="form__header">Login With Phone</h1>

          {/* step 1 */}
          {currentStep === 1 ? (
            <div className="input__container">
              <input
                className="form__input"
                type="text"
                placeholder="Enter phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phoneNumber"
              />
            </div>
          ) : (
            <div className="otp__container">
              {otp.map((item, index) => (
                <input
                  value={item}
                  key={index}
                  type="text"
                  ref={(input) => (inputRefs.current[index] = input)}
                  className="otp__input"
                  onChange={(e) => handleOptChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
          )}

          {errorMsg && <p className="form__message">{errorMsg}</p>}
          <button type="submit" className="submit__button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
