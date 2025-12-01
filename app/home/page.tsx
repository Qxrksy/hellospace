// HS-ADD: app/home/page.tsx
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth/config";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function Page() {
  const session = await getServerSession(authConfig);
  if (!session?.user) {
    redirect("/login");
  }
  return (
    <>
      {/* HS-ADD: main authenticated home layout */}
      <div className="row home">
        {/* LEFT COLUMN */}
        <div className="col w-60 left">
          {/* HS-ADD: Cool New People */}
          <div className="new-people">
            <div className="top">
              <h4>Cool New People</h4>
            </div>
            <div className="inner cool">
              <div className="person">
                <img src="https://placekitten.com/80/80" alt="Ana" />
                <p>Ana ★</p>
              </div>
              <div className="person">
                <img src="https://placekitten.com/81/80" alt="carr" />
                <p>carrrrrrrrrrr</p>
              </div>
              <div className="person">
                <img src="https://placekitten.com/82/80" alt="TheSunAlex" />
                <p>TheSunAlex</p>
              </div>
              <div className="person">
                <img src="https://placekitten.com/83/80" alt="M1L4NQ" />
                <p>M1L4NQ</p>
              </div>
              <div className="view-more">
                <Link href="/browse">[ more people ]</Link>
              </div>
            </div>
          </div>

          {/* HS-ADD: HelloSpace Music */}
          <div className="music">
            <div className="heading">
              <h4>HelloSpace Music</h4>
              <Link className="more" href="#">[more music]</Link>
            </div>
            <div className="inner">
              <div className="cover">
                <img src="https://placehold.co/110x110" alt="Album" />
              </div>
              <div className="details">
                <h4>Golden</h4>
                <h5>Check out a trending track on HelloSpace</h5>
                <p>Discover new tracks and artists from the community.</p>
                <p><Link href="#">» Listen Now</Link></p>
              </div>
            </div>
          </div>

          {/* HS-ADD: Announcements */}
          <div className="specials">
            <div className="heading">
              <h4>HelloSpace Announcements</h4>
            </div>
            <div className="inner">
              <p>New features are coming soon. Stay tuned!</p>
              <p><Link href="#">» Shop Now!</Link></p>
            </div>
          </div>

          {/* HS-ADD: Bottom feature boxes */}
          <div className="row info-area">
            <div className="col w-25">
              <div className="info-box">
                <h3>Retro Social</h3>
                <p>BBS-era vibes: Bulletins, Blogs, Forums, and more!</p>
              </div>
            </div>
            <div className="col w-25">
              <div className="info-box">
                <h3>Privacy Friendly</h3>
                <p>No tracking, no algorithms — just your space with friends.</p>
              </div>
            </div>
            <div className="col w-25">
              <div className="info-box">
                <h3>Fully Customizable</h3>
                <p>Use CSS to make your profile truly yours.</p>
              </div>
            </div>
            <div className="col w-25">
              <div className="info-box">
                <h3>Big community</h3>
                <p>Join and meet new like‑minded people!</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col w-40 right">
          {/* HS-ADD: Login/Signup box */}
          <div className="box standalone" style={{ width: 300 }}>
            <h4>Member Login/Signup</h4>
            <form>
              <table>
                <tbody>
                  <tr className="email">
                    <td className="label"><label htmlFor="email">E‑Mail:</label></td>
                    <td><input id="email" name="email" type="email" placeholder="you@example.com" /></td>
                  </tr>
                  <tr className="password">
                    <td className="label"><label htmlFor="password">Password:</label></td>
                    <td><input id="password" name="password" type="password" /></td>
                  </tr>
                  <tr className="remember">
                    <td></td>
                    <td><label><input type="checkbox" /> Remember my E‑mail</label></td>
                  </tr>
                  <tr className="buttons">
                    <td></td>
                    <td>
                      <button className="login_btn" type="button">LOGIN</button>
                      <span style={{ display: 'inline-block', width: 6 }} />
                      <button className="signup_btn" type="button">SIGN UP!</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <p className="forgot"><Link href="#">Forgot your password?</Link></p>
          </div>

          {/* HS-ADD: Donation / info card */}
          <div className="indie-box">
            <p>HelloSpace is an independent social network, funded by your donations.</p>
            <a className="donate-link" href="#">
              <img className="donate-btn" src="https://placehold.co/147x47?text=Donate" alt="Donate" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

