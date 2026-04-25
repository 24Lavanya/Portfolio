export default function Button({ children, className = "", href, ...props }) {
  if (href) {
    return (
      <a className={className} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
