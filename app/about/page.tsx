// HS-ADD: app/about/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <div className="about container full-width" style={{ maxWidth: 980, margin: "0 auto" }}>
      {/* HS-ADD: Top banner */}
      <div className="about-banner">
        <div className="logo">
          <img src="/logo-hellospace.svg" alt="HelloSpace" />
        </div>
      </div>

      <h1>About HelloSpace & FAQ</h1>
      <p><strong>HelloSpace — a space to be you.</strong></p>

      <h2>What is HelloSpace?</h2>
      <p>
        HelloSpace is a retro social network focused on privacy and customizability. It's a friendly place
        to have fun, meet friends, and be creative.
      </p>

      <h3>Retro Social</h3>
      <p>
        HelloSpace brings back all the things you missed most about Social Networks: Bulletins, Blogs,
        Forums, Instant Messages, and so much more!
      </p>

      <h3>Fully Customizable</h3>
      <p>
        HelloSpace allows you to add custom HTML and CSS Code to your Profile to give you all the
        freedom you need to make your Profile truly <em>your</em> Space on the web!
      </p>

      <h3>Privacy Friendly</h3>
      <p>
        HelloSpace has no algorithms, no tracking, and no personalized Ads — Feeds on HelloSpace are
        chronological and there is no suggested content begging for your attention. You decide what you
        want to share and what content you'd like to view.
      </p>

      <h3>Big Community</h3>
      <p>
        HelloSpace is a safe space for you and your friends to hang out online — Join and meet new
        like‑minded people!
      </p>

      <p><em>Don't have an Account yet?</em> » <Link href="/signup">Join for free</Link></p>

      <h2>Team</h2>
      <div className="spa">
        <div className="heading"><h4>HelloSpace Team</h4></div>
        <div className="inner">
          <div className="profile friends">
            <div className="person" style={{ display: 'inline-block', padding: '0 10px 15px 0' }}>
              <img src="https://placekitten.com/95/95" alt="Qxrksy" />
              <p>Qxrksy</p>
              <p style={{ fontSize: '90%' }}>Founder & Creator of HelloSpace</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Who made HelloSpace?</h2>
      <p>
        HelloSpace was created by <strong>Qxrksy</strong>, a 21‑year‑old developer from Chicago.
      </p>

      <h2>Need Help?</h2>
      <p>
        If you need Help with HelloSpace, please check out our <Link href="/help">Help Center</Link>.
        If you need further help, please send us an email at <a href="mailto:support@hellospace.app">support@hellospace.app</a>.
      </p>

      <h2>How to support us</h2>
      <p>
        HelloSpace is a small, independent social network, funded by your donations. Learn more about
        how you can support us by buying Merchandise or donating.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any suggestions or ideas, please feel free to send us an email.</p>

      <h2>Press</h2>
      <p>To download our Logo, please visit our Brand Resources.</p>
    </div>
  );
}

