// HS-ADD: app/bulletins/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <div className="simple-container">
      <h1>Bulletin Board</h1>
      
      <p>
        <a href="/bulletins/new" style={{marginRight: '10px'}}>
          <button>
            <img src="/static/icons/add.png" alt="" className="icon" aria-hidden="true" loading="lazy" />
            New Bulletin
          </button>
        </a>
        <Link href="/bulletins/my" className="my-bulletins-link">
          <img src="/static/icons/user.png" alt="User" className="icon" />
          My Bulletins
        </Link>
      </p>

      <p>Here you can view all Bulletins posted by your Friends. Bulletins have a limited lifespan between 1 and 10 days, after which they will be permanently gone.</p>

      <table className="bulletin-table">
        <thead>
          <tr>
            <th>From</th>
            <th>Time</th>
            <th>Subject</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>

      <p>No Bulletins available — <Link href="/bulletins/new">Post a new Bulletin</Link></p>
    </div>
  );
}

