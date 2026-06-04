"use client";

import { useMemo, useState } from "react";
import { RevealWrapper } from "next-reveal";
import PricingRecommendationModal from "./PricingRecommendationModal";
import {
  PRICING_SETUP_INTRO,
  PRICING_SETUP_QUESTIONS,
  PRICING_RECOMMENDATIONS,
  getRecommendedPlan,
} from "../pricingSetupData";
import { submitForm } from "@/src/utils/submitForm";

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M18.636 15.6699L20.352 10.5199C21.852 6.02194 22.602 3.77294 21.414 2.58594C20.227 1.39894 17.978 2.14794 13.479 3.64794L8.32997 5.36394C4.69997 6.57394 2.88497 7.17994 2.36997 8.06694C2.12908 8.48152 2.0022 8.95246 2.0022 9.43194C2.0022 9.91142 2.12908 10.3824 2.36997 10.7969C2.88497 11.6849 4.69997 12.2899 8.32997 13.5009C8.77997 13.6509 9.28697 13.5429 9.62397 13.2099L15.13 7.75494C15.2023 7.67634 15.2899 7.61324 15.3874 7.56945C15.4848 7.52566 15.5901 7.5021 15.697 7.50019C15.8038 7.49827 15.9099 7.51805 16.0089 7.55831C16.1078 7.59858 16.1976 7.6585 16.2727 7.73446C16.3479 7.81041 16.4068 7.90082 16.446 8.00021C16.4852 8.0996 16.5039 8.20591 16.5008 8.31271C16.4977 8.41951 16.473 8.52457 16.4282 8.62156C16.3834 8.71854 16.3193 8.80542 16.24 8.87694L10.824 14.2429C10.6433 14.4276 10.5174 14.6587 10.4602 14.9106C10.403 15.1625 10.4168 15.4254 10.5 15.6699C11.71 19.2999 12.316 21.1159 13.203 21.6319C13.6178 21.8727 14.0889 21.9995 14.5685 21.9995C15.0481 21.9995 15.5192 21.8727 15.934 21.6319C16.821 21.1159 17.425 19.3009 18.636 15.6699Z"
      fill="#0F0F0F"
    />
  </svg>
);

const INITIAL_ANSWERS = Object.fromEntries(
  PRICING_SETUP_QUESTIONS.map((q) => [q.id, null])
);

function PricingSetupFinder() {
  const [answers, setAnswers] = useState(INITIAL_ANSWERS);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [recommendedKey, setRecommendedKey] = useState(null);

  const recommendedPlan = useMemo(
    () => (recommendedKey ? PRICING_RECOMMENDATIONS[recommendedKey] : null),
    [recommendedKey]
  );

  const selectOption = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const complete = PRICING_SETUP_QUESTIONS.every((q) => answers[q.id]);
    if (!complete) {
      setError("Please answer all questions to see your recommendation.");
      return;
    }
    const key = getRecommendedPlan(answers);
    const plan = PRICING_RECOMMENDATIONS[key];

    try {
      await submitForm("/api/pricing-setup", {
        answers,
        recommendedPlan: plan?.title || key,
      });
    } catch (submitError) {
      console.error(submitError);
      setError("Could not save your answers. Please try again.");
      return;
    }

    setError("");
    setRecommendedKey(key);
    setModalOpen(true);
  };

  return (
    <>
      <section className="pricing-setup">
        <div className="_container">
          <div className="pricing-setup__coins" aria-hidden="true">
            <img
              className="pricing-setup__coin pricing-setup__coin--triangle"
              src="/images/home/calculator-cta/coin-triangle.png"
              alt=""
            />
            <img
              className="pricing-setup__coin pricing-setup__coin--btc"
              src="/images/home/calculator-cta/coin-btc.png"
              alt=""
            />
            <img
              className="pricing-setup__coin pricing-setup__coin--eth"
              src="/images/home/calculator-cta/coin-eth.png"
              alt=""
            />
            <img
              className="pricing-setup__coin pricing-setup__coin--alt"
              src="/images/home/calculator-cta/coin-alt.png"
              alt=""
            />
          </div>

          <RevealWrapper origin="bottom">
            <p className="pricing-setup__intro">{PRICING_SETUP_INTRO}</p>
          </RevealWrapper>

          <RevealWrapper origin="bottom" delay={100}>
            <form className="pricing-setup__card" onSubmit={handleSubmit}>
              <h2>Find the right setup</h2>

              <div className="pricing-setup__grid">
                {PRICING_SETUP_QUESTIONS.map((question) => (
                  <fieldset key={question.id} className="pricing-setup__group">
                    <legend>{question.label}</legend>
                    <ul>
                      {question.options.map((option) => {
                        const selected = answers[question.id] === option.id;
                        return (
                          <li key={option.id}>
                            <button
                              type="button"
                              className={`pricing-setup__box${
                                selected ? " is-selected" : ""
                              }`}
                              aria-pressed={selected}
                              onClick={() =>
                                selectOption(question.id, option.id)
                              }
                            />
                            <span>{option.label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </fieldset>
                ))}
              </div>

              {error && (
                <p className="pricing-setup__error" role="alert">
                  {error}
                </p>
              )}

              <button type="submit" className="main-button pricing-setup__submit">
                <span>
                  See recommendation
                  <SendIcon />
                </span>
              </button>
            </form>
          </RevealWrapper>
        </div>
      </section>

      <PricingRecommendationModal
        open={modalOpen}
        plan={recommendedPlan}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default PricingSetupFinder;
