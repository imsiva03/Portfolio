const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="footer-bottom">
      <p>©{currentYear}</p>
    </div>
  );
}
