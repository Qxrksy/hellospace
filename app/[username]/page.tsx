// HS-ADD: app/[username]/page.tsx
import Link from "next/link";

export default function Page({ params }: { params: { username: string } }) {
  return (
    <>
      <div className="welcome standalone">
        <img src="https://static.spacehey.net/img/logo_small.png" alt="HelloSpace" />
      </div>

      <div className="row profile">
        <div className="col w-20 left">
          <div className="profile-info">
            <div className="inner">
              <p>Contact Box</p>
            </div>
          </div>
          <div className="table-section">
            <div className="heading"><h4>Details</h4></div>
            <div className="inner">
              <table className="details-table">
                <tbody>
                  <tr><td>Username</td><td>{params.username}</td></tr>
                  <tr><td>From</td><td>Web</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col w-60">
          <div className="general-about">
            <div className="profile-pic"><img src="https://placekitten.com/160/160" alt="pfp" /></div>
            <div className="details below"><h1>{params.username}</h1></div>
          </div>
          <div className="blurbs">
            <div className="heading"><h4>Blurbs</h4></div>
            <div className="inner">
              <div className="section"><h4>About me</h4><p>Vintage vibes, modern web.</p></div>
              <div className="section"><h4>Who I'd like to meet</h4><p>Cool devs.</p></div>
            </div>
          </div>
        </div>
        <div className="col w-20 right">
          <div className="friends">
            <div className="heading"><h4>Friends</h4></div>
            <div className="inner"><p>8 Friends</p></div>
          </div>
          <div className="comments">
            <div className="heading"><h4>Comments</h4></div>
            <div className="inner"><p>No comments yet.</p></div>
          </div>
        </div>
      </div>
    </>
  );
}

