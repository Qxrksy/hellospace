"use client";
import { useState, useEffect } from "react";

interface CaptchaProps {
  onVerify: (token: string) => void;
  onCancel: () => void;
}

interface CaptchaChallenge {
  correctAnswer: number;
  options: string[];
  referenceImage: string;
}

export default function Captcha({ onVerify, onCancel }: CaptchaProps) {
  const [challenge, setChallenge] = useState<CaptchaChallenge | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");

  // Generate a random captcha challenge
  useEffect(() => {
    generateChallenge();
  }, []);

  const generateChallenge = () => {
    // Available captcha images
    const images = [
      { name: "earth", path: "/img/captcha/earth.svg" },
      { name: "moon", path: "/img/captcha/moon.svg" },
      { name: "sun", path: "/img/captcha/sun.svg" },
      { name: "saturn", path: "/img/captcha/saturn.svg" },
    ];

    // Pick a random correct answer
    const correctIndex = Math.floor(Math.random() * images.length);
    const correctImage = images[correctIndex];

    // Shuffle all images for options
    const shuffledOptions = [...images].sort(() => Math.random() - 0.5);

    setChallenge({
      correctAnswer: shuffledOptions.findIndex(img => img.name === correctImage.name),
      options: shuffledOptions.map(img => img.path),
      referenceImage: correctImage.path,
    });
  };

  const handleSubmit = () => {
    setError("");

    if (!agreeTerms) {
      setError("You must agree to the Terms of Service and confirm you are at least 13 years old");
      return;
    }

    if (selectedOption === null) {
      setError("Please select a matching graphic");
      return;
    }

    if (challenge && selectedOption === challenge.correctAnswer) {
      // Generate a simple verification token (in production, this should be more secure)
      const token = btoa(`captcha-${Date.now()}-${Math.random()}`);
      onVerify(token);
    } else {
      setError("Incorrect selection. Please try again.");
      setSelectedOption(null);
      generateChallenge();
    }
  };

  if (!challenge) return null;

  return (
    <div className="captcha-overlay">
      <div className="captcha-modal">
        <h3>Please solve this Captcha to sign up</h3>

        <div className="captcha-box">
          <div className="captcha-header">Are you a Human?</div>

          <div className="captcha-content">
            <p>Please select the graphic that matches the one on the left:</p>

            <div className="captcha-challenge">
              <div className="captcha-reference">
                <img src={challenge.referenceImage} alt="Reference" />
              </div>

              <div className="captcha-divider"></div>

              <div className="captcha-options">
                {challenge.options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`captcha-option ${selectedOption === index ? 'selected' : ''}`}
                    onClick={() => setSelectedOption(index)}
                  >
                    <img src={option} alt={`Option ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="captcha-terms">
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            I agree to the <a href="/terms" target="_blank">Terms of Service</a> &amp; <a href="/privacy" target="_blank">Privacy Policy</a> and I'm at least 13 years old or older
          </label>
        </div>

        {error && <div className="captcha-error">{error}</div>}

        <div className="captcha-buttons">
          <button type="button" onClick={handleSubmit} className="captcha-submit">
            Submit
          </button>
          <button type="button" onClick={onCancel} className="captcha-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
