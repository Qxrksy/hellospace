// HS-ADD: app/page.tsx
import Link from "next/link";

export const metadata = {
  title: "HelloSpace - A Space to Be You | Retro Social Network",
  description: "Join HelloSpace, a privacy-friendly retro social network with bulletins, blogs, forums, and fully customizable profiles. No algorithms, no tracking - just a safe space for you and your friends.",
  keywords: "social network, retro social media, privacy friendly, customizable profiles, MySpace alternative, online community",
};

export default function Page() {
  return (
    <>
      <h1 style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        HelloSpace - Retro Social Network
      </h1>
      <div className="row home">
        {/* LEFT COLUMN */}
        <div className="col w-60 left">
          {/* Cool New People */}
          <div className="new-people">
            <div className="top">
              <h4>Cool New People</h4>
            </div>
            <div className="inner cool">
              <div className="person">
                <img src="https://placekitten.com/80/80" alt="Profile picture of Wcid - New HelloSpace member" />
                <p>Wcid</p>
              </div>
              <div className="person">
                <img src="https://placekitten.com/81/80" alt="Profile picture of GreenAce - New HelloSpace member" />
                <p>GreenAce</p>
              </div>
              <div className="person">
                <img src="https://placekitten.com/82/80" alt="Profile picture of Amelie - New HelloSpace member" />
                <p>Amelie</p>
              </div>
              <div className="person">
                <img src="https://placekitten.com/83/80" alt="Profile picture of Mine - New HelloSpace member" />
                <p>Mine</p>
              </div>
              <div className="view-more">
                <Link href="/browse">[ view all ]</Link>
              </div>
            </div>
          </div>

          {/* HelloSpace Music */}
          <div className="music">
            <div className="heading">
              <h4>HelloSpace Music</h4>
              <Link className="more" href="#">[more music]</Link>
            </div>
            <div className="inner">
              <div className="cover">
                <img src="https://placehold.co/110x110" alt="Featured track album cover - Trending music on HelloSpace" />
              </div>
              <div className="details">
                <h4>Featured Track</h4>
                <h5>Discover trending music on HelloSpace</h5>
                <p>Check out the latest tracks shared by our community.</p>
                <p><Link href="#">» Listen Now</Link></p>
              </div>
            </div>
          </div>

          {/* HelloSpace Announcements */}
          <div className="specials">
            <div className="heading">
              <h4>HelloSpace Announcements</h4>
            </div>
            <div className="inner">
              <div style={{ display: "flex", gap: "12px", alignItems: "start" }}>
                <img src="https://placehold.co/110x110" alt="HelloSpace merchandise - T-shirts, hoodies, and accessories" style={{ width: 110, height: 110 }} />
                <div>
                  <h4>HelloSpace Merchandise</h4>
                  <p>Now available! Support HelloSpace by buying a high-quality Shirt, Hoodie, Sweater or Cup! Check out the full Collection on our shop!</p>
                  <p><Link href="#">» Shop Now!</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col w-40 right">
          {/* Logo Box */}
          <div className="welcome">
            <img src="/logo-hellospace.svg" alt="HelloSpace" style={{ height: 35 }} />
            <p style={{ margin: "5px 0 0 0", fontSize: "13px" }}>a space to be you</p>
          </div>

          {/* Login/Signup Box */}
          <div className="box">
            <h4>Member Login/Signup</h4>
            <form action="/api/auth/signin" method="post">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td className="label" style={{ width: "30%" }}>E-Mail:</td>
                    <td><input type="email" name="email" style={{ width: "100%" }} /></td>
                  </tr>
                  <tr>
                    <td className="label">Password:</td>
                    <td><input type="password" name="password" style={{ width: "100%" }} /></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <label><input type="checkbox" name="remember" /> Remember my E-mail</label>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <Link href="/login" className="login_btn" style={{ display: "inline-block", padding: "4px 12px", marginRight: "8px" }}>LOGIN</Link>
                      <Link href="/signup" className="signup_btn" style={{ display: "inline-block", padding: "4px 12px", background: "#f33", color: "white" }}>SIGN UP!</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <p style={{ marginTop: "8px", fontSize: "12px" }}>
              <Link href="#">Forgot your password?</Link>
            </p>
          </div>

          {/* Info Box */}
          <div className="box">
            <p style={{ fontSize: "11px", textAlign: "center" }}>
              <span style={{ fontSize: "16px" }}>🌿</span> Servers powered by renewable energies<br />
              <span style={{ fontSize: "16px" }}>🚫</span> No tracking &nbsp; <span style={{ fontSize: "16px" }}>🚫</span> No algorithms
            </p>
          </div>

          {/* Donation Box */}
          <div className="box" style={{ textAlign: "center" }}>
            <p><strong>HelloSpace is a small, independent social network, funded by your donations.</strong></p>
            <p><Link href="#">[more details]</Link></p>
            <p><a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" alt="Donate to HelloSpace via PayPal - Support our independent social network" /></a></p>
          </div>
        </div>
      </div>

      {/* FEATURE BOXES AT BOTTOM */}
      <div className="row info-area">
        <div className="col w-25">
          <div className="indie-box">
            <h3>Retro Social</h3>
            <p>All the things you missed most about Social Networks are back: Bulletins, Blogs, Forums, and so much more!</p>
            <p><Link href="/signup">» Join Today</Link></p>
          </div>
        </div>
        <div className="col w-25">
          <div className="indie-box">
            <h3>Privacy Friendly</h3>
            <p>No algorithms, no tracking, no personalized Ads - Just a safe space for you and your friends to hang out online.</p>
            <p><Link href="/browse">» Browse Profiles</Link></p>
          </div>
        </div>
        <div className="col w-25">
          <div className="indie-box">
            <h3>Fully Customizable</h3>
            <p>Featuring custom HTML and CSS to give you all the freedom you'll need to make your Profile truly <em>your</em> Space on the web!</p>
            <p><Link href="/layouts">» Discover Layouts</Link></p>
          </div>
        </div>
        <div className="col w-25">
          <div className="indie-box">
            <h3>Big community</h3>
            <p>Join over 1 million others already on HelloSpace, have fun, and meet new like-minded people!</p>
            <p><Link href="/signup">» SignUp Now</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

