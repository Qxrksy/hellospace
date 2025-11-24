// HS-ADD: app/search/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <div className="simple-container">
      <h1>Search</h1>
      <label htmlFor="search">
        <p>Search for People on SpaceHey by their <b>Name</b> :</p>
      </label>
      <form method="get">
        <input 
          type="text" 
          name="q" 
          id="search" 
          value="" 
          autoComplete="off" 
          autoFocus 
          required 
        />
        <button type="submit">Search</button>
      </form>
      <br />
      <p>or try the <Link href="/advancedsearch">>> Advanced Search</Link></p>
    </div>
  );
}

