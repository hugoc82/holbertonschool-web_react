import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    // État initial demandé
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  // Regex email simple et robuste pour l’exercice
  isValidEmail(email) {
    // autorise lettres/chiffres, +.-_ dans la partie locale, et un domaine simple
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  recomputeEnableSubmit(next = {}) {
    const email = next.email ?? this.state.email;
    const password = next.password ?? this.state.password;
    const ok =
      email.length > 0 &&
      password.length >= 8 &&
      this.isValidEmail(email);
    this.setState({ enableSubmit: ok });
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState({ email }, () => this.recomputeEnableSubmit({ email }));
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState({ password }, () => this.recomputeEnableSubmit({ password }));
  }

  handleLoginSubmit(e) {
    e.preventDefault(); // éviter tout rechargement
    // on ne change isLoggedIn que si le formulaire est valide
    if (this.state.enableSubmit) {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <section
        className="login-section mx-auto w-full max-w-3xl rounded-md bg-white p-4 shadow border-t-4 border-solid"
        style={{ borderTopColor: 'var(--main-color)' }}
      >
        <p className="mb-4">Login to access the full dashboard</p>

        {/* Form obligatoire, submit input à la place du bouton */}
        <form
          onSubmit={this.handleLoginSubmit}
          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
          noValidate
        >
          <label htmlFor="email" className="sm:mr-1">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleChangeEmail}
            className="input-email w-full sm:w-auto rounded border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <label htmlFor="password" className="sm:ml-2 sm:mr-1">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChangePassword}
            className="input-password w-full sm:w-auto rounded border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          {/* Remplace le <button> par un input type="submit" */}
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className="btn-ok sm:ml-2 rounded px-4 py-2 text-white disabled:opacity-50"
            style={{ backgroundColor: 'var(--main-color)' }}
            aria-disabled={!enableSubmit}
          />
        </form>
      </section>
    );
  }
}

export default Login;
