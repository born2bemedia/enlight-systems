import React from "react";
import LoginForm from "./_components/LoginForm";
import "@/public/scss/login.scss";

function LoginPage() {
  return (
    <section className="login-wrap">
      <div className="form-login">
        <img src="/images/login/login1.png" />
        <img src="/images/login/login2.png" />
        <img src="/images/login/login3.png" />
        <div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
