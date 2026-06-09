"use client";

import { useState } from "react";
import {
  COST_METHODS,
  calculateMarketingBudget,
} from "@/src/lib/marketingBudgetCalculator";

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

const EMPTY_RESULTS = {
  budget: "",
  leads: "",
  clicks: "",
  revenue: "",
  roi: "",
};

function formatCurrency(value) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value) {
  return `${new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 2,
  }).format(value)}%`;
}

function HomeCalculator() {
  const [costMethod, setCostMethod] = useState(COST_METHODS.LEAD);
  const [customers, setCustomers] = useState("");
  const [conversion, setConversion] = useState("");
  const [deal, setDeal] = useState("");
  const [averageCPL, setAverageCPL] = useState("");
  const [clickConversion, setClickConversion] = useState("");
  const [averageCPC, setAverageCPC] = useState("");
  const [results, setResults] = useState(EMPTY_RESULTS);
  const isCostPerClick = costMethod === COST_METHODS.CLICK;

  const resetResults = () => {
    setResults(EMPTY_RESULTS);
  };

  const handleMethodChange = (value) => {
    setCostMethod(value);
    resetResults();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const calculated = calculateMarketingBudget({
      costMethod,
      targetCustomers: customers,
      leadConversionRate: conversion,
      averageDealSize: deal,
      averageCPL,
      clickConversionRate: clickConversion,
      averageCPC,
    });

    if (!calculated) {
      setResults(EMPTY_RESULTS);
      return;
    }

    setResults({
      budget: formatCurrency(calculated.monthlyBudget),
      leads: formatNumber(calculated.requiredLeads),
      clicks: calculated.requiredClicks
        ? formatNumber(calculated.requiredClicks)
        : "",
      revenue: formatCurrency(calculated.expectedRevenue),
      roi: formatPercent(calculated.roi),
    });
  };

  return (
    <section className="home-calculator">
      <div className="_container">
        <div className="home-calculator__card">
          <div className="home-calculator__header">
            <h2>See what Enlight makes different!</h2>
            <p>Calculate your marketing budget</p>
          </div>

          <form className="home-calculator__form" onSubmit={handleSubmit}>
            <label className="home-calculator__field home-calculator__field--full">
              <span>Choose how you calculate costs:</span>
              <select
                value={costMethod}
                onChange={(e) => handleMethodChange(e.target.value)}
              >
                <option value={COST_METHODS.LEAD}>Cost per Lead</option>
                <option value={COST_METHODS.CLICK}>Cost per Click</option>
              </select>
            </label>

            <div className="home-calculator__grid">
              <label className="home-calculator__field">
                <span>Set monthly new customers target:</span>
                <input
                  type="number"
                  min="0"
                  value={customers}
                  onChange={(e) => {
                    setCustomers(e.target.value);
                    resetResults();
                  }}
                />
              </label>

              <label className="home-calculator__field">
                <span>Average deal:</span>
                <span className="home-calculator__input-wrap home-calculator__input-wrap--prefix">
                  <span className="home-calculator__affix home-calculator__affix--prefix">
                    €
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={deal}
                    onChange={(e) => {
                      setDeal(e.target.value);
                      resetResults();
                    }}
                  />
                </span>
              </label>

              <label className="home-calculator__field">
                <span>Average lead to customer conversion:</span>
                <span className="home-calculator__input-wrap home-calculator__input-wrap--suffix">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={conversion}
                    onChange={(e) => {
                      setConversion(e.target.value);
                      resetResults();
                    }}
                  />
                  <span className="home-calculator__affix home-calculator__affix--suffix">
                    %
                  </span>
                </span>
              </label>

              {isCostPerClick ? (
                <>
                  <label className="home-calculator__field">
                    <span>Click to lead rate:</span>
                    <span className="home-calculator__input-wrap home-calculator__input-wrap--suffix">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={clickConversion}
                        onChange={(e) => {
                          setClickConversion(e.target.value);
                          resetResults();
                        }}
                      />
                      <span className="home-calculator__affix home-calculator__affix--suffix">
                        %
                      </span>
                    </span>
                  </label>

                  <label className="home-calculator__field">
                    <span>Average cost per click:</span>
                    <span className="home-calculator__input-wrap home-calculator__input-wrap--prefix">
                      <span className="home-calculator__affix home-calculator__affix--prefix">
                        €
                      </span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={averageCPC}
                        onChange={(e) => {
                          setAverageCPC(e.target.value);
                          resetResults();
                        }}
                      />
                    </span>
                  </label>
                </>
              ) : (
                <label className="home-calculator__field">
                  <span>Average cost per lead:</span>
                  <span className="home-calculator__input-wrap home-calculator__input-wrap--prefix">
                    <span className="home-calculator__affix home-calculator__affix--prefix">
                      €
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={averageCPL}
                      onChange={(e) => {
                        setAverageCPL(e.target.value);
                        resetResults();
                      }}
                    />
                  </span>
                </label>
              )}
            </div>

            <button type="submit" className="home-calculator__submit">
              <span>
                Calculate Budget
                <SendIcon />
              </span>
            </button>
          </form>

          <div className="home-calculator__results">
            <h3>Your Marketing Budget Plan</h3>
            <div className="home-calculator__grid">
              <label className="home-calculator__field">
                <span>Required Monthly Budget:</span>
                <output className="home-calculator__output">
                  {results.budget}
                </output>
              </label>

              <label className="home-calculator__field">
                <span>Expected Revenue</span>
                <output className="home-calculator__output">
                  {results.revenue || "€"}
                </output>
              </label>

              <label className="home-calculator__field">
                <span>Required Leads</span>
                <output className="home-calculator__output">
                  {results.leads}
                </output>
              </label>

              {isCostPerClick ? (
                <label className="home-calculator__field">
                  <span>Required Clicks</span>
                  <output className="home-calculator__output">
                    {results.clicks}
                  </output>
                </label>
              ) : (
                <label className="home-calculator__field">
                  <span>Expected ROI</span>
                  <output className="home-calculator__output">
                    {results.roi || "%"}
                  </output>
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCalculator;
