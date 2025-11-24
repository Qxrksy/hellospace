// HS-ADD: app/bulletins/new/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="welcome standalone">
        <img src="https://static.spacehey.net/img/logo_small.png" alt="HelloSpace" />
      </div>

      <div className="row">
        <div className="col w-60 left">
          <div className="spa">
            <div className="heading">
              <h4>New Bulletin</h4>
            </div>
            <div className="inner">
              <div className="box">
                <h4>Compose</h4>
                <form>
                  <table>
                    <tbody>
                      <tr className="email">
                        <td className="label"><label htmlFor="title">Title</label></td>
                        <td><input id="title" name="title" placeholder="Bulletin title" /></td>
                      </tr>
                      <tr>
                        <td className="label"><label htmlFor="body">Body</label></td>
                        <td><textarea id="body" name="body" className="big_textarea" placeholder="Write something..." /></td>
                      </tr>
                      <tr className="buttons">
                        <td></td>
                        <td><button className="signup_btn" type="button" disabled>Post</button></td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col w-40 right">
          <div className="box">
            <h4>Sidebar</h4>
            <p><Link href="/browse">Browse</Link> • <Link href="/groups">Groups</Link> • <Link href="/forum">Forums</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

