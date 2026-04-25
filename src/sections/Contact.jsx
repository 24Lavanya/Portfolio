import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const statusTimerRef = useRef(null);
  const [formStatus, setFormStatus] = useState({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    return () => {
      window.clearTimeout(statusTimerRef.current);
    };
  }, []);

  const showFormStatus = (status, clearAfter = 0) => {
    window.clearTimeout(statusTimerRef.current);
    setFormStatus(status);

    if (clearAfter > 0) {
      statusTimerRef.current = window.setTimeout(() => {
        setFormStatus({
          type: "idle",
          message: "",
        });
      }, clearAfter);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    if (formData.get("botcheck")) {
      return;
    }

    formData.set("name", formData.get("name").trim());
    formData.set("email", formData.get("email").trim());
    formData.set("message", formData.get("message").trim());

    showFormStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message.");
      }

      form.reset();
      showFormStatus(
        {
          type: "success",
          message: "Message submitted successfully. I'll get back to you soon.",
        },
        4000,
      );
    } catch {
      showFormStatus(
        {
          type: "error",
          message: "Something went wrong. Please try again in a moment.",
        },
        4000,
      );
    }
  };

  return (
    <section
      id="contact"
      className="contact-section w-full min-h-screen relative z-[100] px-[3vw] py-16 flex items-center"
    >
      <div className="contact-shell">
        <div className="contact-copy">
          <span className="contact-kicker">
            Let&apos;s build something thoughtful
          </span>
          <h2>Say Hi!</h2>
          <p>
            Have feedback, a question, or a project idea? Send a note and
            I&apos;ll get back to you.
          </p>

          <div className="contact-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <form
          acceptCharset="UTF-8"
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate={false}
        >
          <input
            type="hidden"
            name="access_key"
            value="573c5c80-b4dd-4401-ad06-dc3a568aa02e"
          />
          <input
            type="checkbox"
            name="botcheck"
            className="contact-botcheck"
            tabIndex="-1"
            autoComplete="off"
          />

          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="name"
              minLength="2"
              maxLength="60"
              pattern="[A-Za-z][A-Za-z\s.'-]{1,59}"
              title="Use 2-60 letters, spaces, apostrophes, periods, or hyphens."
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              inputMode="email"
              maxLength="254"
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="7"
              minLength="10"
              maxLength="1200"
              placeholder="Your message"
              title="Use 10-1200 characters."
              required
            />
          </label>

          {formStatus.message && (
            <p className={`contact-status contact-status--${formStatus.type}`}>
              {formStatus.message}
            </p>
          )}

          <button type="submit" disabled={formStatus.type === "loading"}>
            <span>{formStatus.type === "loading" ? "Sending" : "Submit"}</span>
            <i className="ri-send-plane-fill" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
