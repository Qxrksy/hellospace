// HS-ADD: app/groups/[slug]/page.tsx
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="welcome standalone">
        <img src="https://static.spacehey.net/img/logo_small.png" alt="HelloSpace" />
      </div>

      <div className="row groups-container">
        <div className="col w-60 left group-left">
          <div className="spa">
            <div className="heading">
              <h4>Group: {params.slug}</h4>
            </div>
            <div className="inner">
              <p>This is a HelloSpace-style placeholder. HelloSpace taglines go here.</p>
            </div>
          </div>
        </div>

        <div className="col w-40 right group-right">
          <div className="box">
            <h4>Sidebar</h4>
            <p><Link href="/browse">Browse</Link> • <Link href="/groups">Groups</Link> • <Link href="/forum">Forums</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

