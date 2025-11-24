// HS-ADD: components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear(); // HS-ADD:
  return (
    <footer>
      {/* HS-ADD: attribution & disclaimer */}
      <p style={{ margin: 0, fontWeight: "bold" }}>brought to you by Qxrksy.</p>
      <p style={{ margin: "6px 0 10px 0" }}>
        This is a fan-based project and is not affiliated with MySpace® or spacehey in any way.
      </p>

      {/* HS-ADD: link list (only About is routed; others are placeholders) */}
      <ul className="links">
        <li><a href="/about">About</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Rules</a></li>
        <li><a href="#">App</a></li>
        <li><a href="#">Brand</a></li>
        <li><a href="#">Credits</a></li>
        <li><a href="#">RSS</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Imprint</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Report Abuse</a></li>
        <li><a href="#">Status</a></li>
        <li><a href="#">HelloSpace Shop</a></li>
      </ul>

      {/* HS-ADD: copyright */}
      <p className="copyright">© {year} HelloSpace. All Rights Reserved.</p>
    </footer>
  );
}

