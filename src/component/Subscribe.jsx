import React, { useState } from 'react';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email 😅' });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address 🙃' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    setTimeout(() => {
      setLoading(false);
      setStatus({ type: 'success', message: `Subscribed successfully: ${email} 🎉` });
      setEmail('');
    }, 1500);
  };

  React.useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="section__container subscribe__container" id="contact">
      <div className="subscribe__content">
        <h2 className="section__header">Subscribe For Discounts</h2>
        <p className="section__description">
          Don't miss out on sweet deals! Subscribe to receive exclusive discounts.
        </p>
        <form onSubmit={onSubmit} noValidate>
          <input
            type="email"
            placeholder="Type Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            required
            disabled={loading}
          />
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {status.message && (
          <p
            role="alert"
            style={{
              marginTop: '1rem',
              color: status.type === 'error' ? '#ff0015ff' : '#002fffff',
              fontWeight: '600',
            }}
          >
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
}

export { Subscribe };
export default Subscribe;
