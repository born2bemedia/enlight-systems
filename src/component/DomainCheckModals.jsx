"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SPAM_CHECK_SOURCES } from "@/src/lib/domainCheckData";
import { useBodyScrollLock } from "@/src/hooks/useBodyScrollLock";

function ModalPortal({ children, open }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(children, document.body);
}

const ModalCheckIcon = ({ size = 51 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M36.2654 18.5783C36.3599 18.6726 36.4348 18.7847 36.4859 18.908C36.537 19.0312 36.5633 19.1634 36.5633 19.2969C36.5633 19.4303 36.537 19.5625 36.4859 19.6858C36.4348 19.8091 36.3599 19.9211 36.2654 20.0154L22.0467 34.2342C21.9524 34.3286 21.8404 34.4035 21.7171 34.4546C21.5938 34.5057 21.4616 34.532 21.3281 34.532C21.1947 34.532 21.0625 34.5057 20.9392 34.4546C20.8159 34.4035 20.7039 34.3286 20.6096 34.2342L14.5158 28.1404C14.3253 27.9499 14.2182 27.6914 14.2182 27.4219C14.2182 27.1524 14.3253 26.8939 14.5158 26.7033C14.7064 26.5127 14.9649 26.4057 15.2344 26.4057C15.5039 26.4057 15.7624 26.5127 15.9529 26.7033L21.3281 32.0785L34.8283 18.5783C34.9227 18.4839 35.0347 18.409 35.158 18.3579C35.2813 18.3068 35.4134 18.2805 35.5469 18.2805C35.6804 18.2805 35.8125 18.3068 35.9358 18.3579C36.0591 18.409 36.1711 18.4839 36.2654 18.5783ZM50.7813 25.3906C50.7813 30.4124 49.2921 35.3214 46.5022 39.4969C43.7122 43.6724 39.7467 46.9267 35.1072 48.8485C30.4677 50.7703 25.3625 51.2731 20.4372 50.2934C15.5119 49.3137 10.9877 46.8955 7.43675 43.3445C3.88581 39.7936 1.46759 35.2694 0.487885 30.3441C-0.491818 25.4188 0.011001 20.3136 1.93276 15.6741C3.85451 11.0345 7.10889 7.06905 11.2844 4.27909C15.4598 1.48913 20.3688 0 25.3906 0C32.1224 0.00739273 38.5763 2.68484 43.3364 7.44491C48.0964 12.205 50.7739 18.6589 50.7813 25.3906ZM48.75 25.3906C48.75 20.7706 47.38 16.2543 44.8132 12.4129C42.2465 8.57142 38.5983 5.57739 34.3299 3.80938C30.0615 2.04136 25.3647 1.57877 20.8334 2.48009C16.3022 3.38142 12.1399 5.60618 8.87306 8.87305C5.6062 12.1399 3.38143 16.3022 2.48011 20.8334C1.57878 25.3647 2.04137 30.0615 3.80939 34.3299C5.5774 38.5982 8.57143 42.2465 12.4129 44.8132C16.2543 47.38 20.7706 48.75 25.3906 48.75C31.5839 48.7433 37.5215 46.28 41.9008 41.9008C46.2801 37.5215 48.7433 31.5839 48.75 25.3906Z"
      fill="#97D80F"
    />
  </svg>
);

const ModalButtonIcon = () => (
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

function ModalGotItButton({ onClick }) {
  return (
    <div className="resources-modal__footer">
      <button type="button" className="main-button" onClick={onClick}>
        <span>
          Got it!
          <ModalButtonIcon />
        </span>
      </button>
    </div>
  );
}

export function DomainCheckingModal({ open, onClose, loading = false }) {
  useBodyScrollLock(open);

  if (!open) return null;

  return (
    <ModalPortal open={open}>
      <div className="popup resources-modal">
        <div className="overlay" onClick={loading ? undefined : onClose} />
        <div className="popup-inner resources-modal__inner resources-modal__inner--compact">
          <div className="resources-modal__checking">
            <div className="resources-modal__icon">
              <ModalCheckIcon />
            </div>
            <h2>Your domain is being checked.</h2>
            <p>Please wait for the results!</p>
            {loading && (
              <p className="resources-modal__checking-note">
                New domains may take up to 25 seconds.
              </p>
            )}
            {!loading && <ModalGotItButton onClick={onClose} />}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}

export function DomainSpamModal({
  open,
  domain,
  onClose,
  sources = SPAM_CHECK_SOURCES,
  status = "safe",
  statusLabel,
}) {
  useBodyScrollLock(open);

  if (!open) return null;

  const label = domain || "your-domain.com";
  const resolvedStatusLabel =
    statusLabel ||
    (status === "unsafe" ? "RISK" : status === "warning" ? "CAUTION" : "SAFE!");

  return (
    <ModalPortal open={open}>
      <div className="popup resources-modal">
        <div className="overlay" onClick={onClose} />
        <div className="popup-inner resources-modal__inner resources-modal__inner--spam">
          <div className="resources-spam-modal">
            <h2>{label} Spam and Scam Analysis</h2>

            <div
              className={`resources-spam-modal__status resources-spam-modal__status--${status}`}
            >
              <ModalCheckIcon />
              <span>{resolvedStatusLabel}</span>
            </div>

            <p className="resources-spam-modal__lead">Based on the following sources:</p>
            <div className="resources-spam-modal__scroll">
              <ul className="resources-spam-modal__list">
                {sources.map((item) => (
                  <li key={item.source}>
                    <span className="resources-spam-modal__list-icon">
                      <ModalCheckIcon size={24} />
                    </span>
                    <p>
                      <strong>{item.source}:</strong> {item.message}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <ModalGotItButton onClick={onClose} />
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
