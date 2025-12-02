// HS-ADD: app/home/page.tsx
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* HS-ADD: main home layout */}
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
                <img src="/img/placeholder.svg" alt="Ana" />
                <p>Ana ★</p>
              </div>
              <div className="person">
                <img src="/img/placeholder.svg" alt="carr" />
                <p>carrrrrrrrrrr</p>
              </div>
              <div className="person">
                <img src="/img/placeholder.svg" alt="TheSunAlex" />
                <p>TheSunAlex</p>
              </div>
              <div className="person">
                <img src="/img/placeholder.svg" alt="M1L4NQ" />
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
          {session ? (
            <>
              {/* HS-ADD: User updates/bulletins (authenticated) */}
              <div className="spa orange">
                <div className="heading">
                  <h4>Latest Updates</h4>
                </div>
                <div className="inner">
                  <p>Welcome back, {session.user?.name || "Friend"}!</p>
                  <p>Check out the latest bulletins and updates from your friends.</p>
                  <p><Link href="/bulletins">» View Bulletins</Link></p>
                </div>
              </div>

              {/* HS-ADD: Friend Activity */}
              <div className="spa">
                <div className="heading">
                  <h4>Friend Activity</h4>
                </div>
                <div className="inner">
                  <p>Your friends have been busy!</p>
                  <ul className="updates">
                    <li>New blog posts and photos uploaded</li>
                    <li>Profile updates and comments</li>
                    <li>Forum discussions</li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* HS-ADD: Login/Signup box (unauthenticated) */}
              <div className="box standalone" style={{ width: 300 }}>
                <h4>Member Login</h4>
                <form action="/api/auth/signin" method="POST">
                  <input type="hidden" name="callbackUrl" value="/home" />
                  <table>
                    <tbody>
                      <tr className="email">
                        <td className="label"><label htmlFor="email">E‑Mail:</label></td>
                        <td><input id="email" name="email" type="email" placeholder="you@example.com" required /></td>
                      </tr>
                      <tr className="password">
                        <td className="label"><label htmlFor="password">Password:</label></td>
                        <td><input id="password" name="password" type="password" required /></td>
                      </tr>
                      <tr className="remember">
                        <td></td>
                        <td><label><input type="checkbox" name="remember" /> Remember my E‑mail</label></td>
                      </tr>
                      <tr className="buttons">
                        <td></td>
                        <td>
                          <Link href="/login">
                            <button className="login_btn" type="button">LOGIN</button>
                          </Link>
                          <span style={{ display: 'inline-block', width: 6 }} />
                          <Link href="/signup">
                            <button className="signup_btn" type="button">SIGN UP!</button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
                <p className="forgot"><Link href="/forgot-password">Forgot your password?</Link></p>
              </div>
            </>
          )}

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

