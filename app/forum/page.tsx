// HS-ADD: app/forum/page.tsx
import Link from "next/link";

type Forum = { title: string; count: number; slug: string };

const FORUMS: Forum[] = [
  { title: "Art and Photography", count: 4361, slug: "art-and-photography" },
  { title: "Automotive", count: 3447, slug: "automotive" },
  { title: "Books and Stories", count: 2857, slug: "books-and-stories" },
  { title: "Dreams and the Supernatural", count: 2520, slug: "dreams-and-the-supernatural" },
  { title: "Fashion, Style, Shopping", count: 3243, slug: "fashion-style-shopping" },
  { title: "Food and Restaurants", count: 1738, slug: "food-and-restaurants" },
  { title: "Friends", count: 4730, slug: "friends" },
  { title: "Games", count: 5618, slug: "games" },
  { title: "General", count: 22387, slug: "general" },
  { title: "Goals, Plans, Hopes", count: 979, slug: "goals-plans-hopes" },
  { title: "Helping each other", count: 1378, slug: "helping-each-other" },
  { title: "Jobs, Work, Careers", count: 987, slug: "jobs-work-careers" },
  { title: "Life", count: 1845, slug: "life" },
  { title: "Movies, TV, Celebrities", count: 1965, slug: "movies-tv-celebrities" },
  { title: "Music", count: 5178, slug: "music" },
  { title: "News and Politics", count: 993, slug: "news-and-politics" },
  { title: "Parties and Nightlife", count: 397, slug: "parties-and-nightlife" },
  { title: "Pets and Animals", count: 561, slug: "pets-and-animals" },
  { title: "Podcast", count: 428, slug: "podcast" },
  { title: "Quiz/Survey", count: 403, slug: "quiz-survey" },
  { title: "Religion and Philosophy", count: 637, slug: "religion-and-philosophy" },
  { title: "Romance and Relationships", count: 1057, slug: "romance-and-relationships" },
  { title: "School, College, University", count: 688, slug: "school-college-university" },
  { title: "HelloSpace", count: 6011, slug: "spacehey" },
  { title: "Sports", count: 452, slug: "sports" },
  { title: "Travel and Places", count: 2700, slug: "travel-and-places" },
  { title: "Web, HTML, Tech", count: 2860, slug: "web-html-tech" },
  { title: "Writing and Poetry", count: 1058, slug: "writing-and-poetry" },
];

export default function Page() {
  return (
    <div className="row blog-category">
      <div className="col w-20 left">
        <div className="edit-info">
          <p>
            The HelloSpace Forums are a place where you can post topics to discuss with
            others!
          </p>
        </div>
      </div>

      <div className="col right">
        <h1>HelloSpace Forums</h1>
        <div className="blog-preview">
          <p>
            <a href="/edit" style={{ marginRight: 10 }}>
              <button>
                <img src="https://static.spacehey.net/icons/add.png" className="icon" aria-hidden="true" loading="lazy" alt="" />
                {" "}New Forum Topic
              </button>
            </a>
            <a href="/user?id=4233231">
              <img src="https://static.spacehey.net/icons/user.png" className="icon" aria-hidden="true" loading="lazy" alt="" />
              {" "}My Topics
            </a>
          </p>
          <h2>Choose a Forum:</h2>
          {FORUMS.map((f) => {
            const formatted = String(f.count).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            return (
              <h3 key={f.slug} style={{ display: "block", margin: "10px 0" }}>
                <Link href={`/forum/${encodeURIComponent(f.slug)}`}>
                  <img src="https://static.spacehey.net/icons/folder.png" className="icon" aria-hidden="true" loading="lazy" alt="" />
                  {" "}{f.title}
                </Link>{" "}
                ({formatted})
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
}

