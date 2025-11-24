// HS-ADD: app/favorites/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="simple-container">
        <h2>Your Favorites</h2>
        
        <p className="info">
          Click on <b>
            <img src="/static/icons/award_star_add.png" className="icon" aria-hidden="true" loading="lazy" alt="" />
            Add to Favorites
          </b> on any profile to add a user to this list.
        </p>
        
        <div className="new-people">
          <div className="top">
            <h4>Favorite Users</h4>
            <a className="more" href="https://layouts.spacehey.com/favorites">View Favorite Layouts</a>
          </div>
          <div className="inner">
            <p>
              <i>You haven't added any Users to your Favorites yet.</i>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
