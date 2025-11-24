import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/groups/groups.module.css";
import GroupRow from "@/components/groups/GroupRow";

/* HS-GROUPS:START */
// Mock-only data source (no Prisma required)
async function getGroups() {
  return [
    {
      id: 1,
      name: "The Rawring 20s! (2000s Emo/Scene)",
      slug: "rawring-20s",
      description:
        "TO THE RAWRING 20S! The Rawring 20s is the HelloSpace version of a well known 2000's alternative nostalgia Facebook group! Here you can join to talk about memories of your emo/scene/goth teen years and …",
      category: "Music",
      avatarUrl: "/default-group.png",
      membersCount: 27683,
    },
    {
      id: 2,
      name: "Anime Fans",
      slug: "anime-fans",
      description:
        "A group for all things anime! Not limited to just 2000s/old school anime! Games, manga, movies, shows, all are welcome!",
      category: "Movies, TV, Celebrities",
      avatarUrl: "/default-group.png",
      membersCount: 23555,
    },
    {
      id: 3,
      name: "2000s fashion trends and nostalgia",
      slug: "2000s-fashion",
      description:
        "just a group talking abt 2000s fashion trends, styles, music, and 2000s nostalgia overall. if u r a fan of 2000s nostalgia, come join. we will discuss everything popular during the 2000s in fashion, w…",
      category: "Fashion, Style, Shopping",
      avatarUrl: "/default-group.png",
      membersCount: 22364,
    },
  ];
}

const categories: { label: string; href: string }[] = [
  { label: "Activities", href: "#" },
  { label: "Art and Photography", href: "#" },
  { label: "Automotive", href: "#" },
  { label: "Books and Stories", href: "#" },
  { label: "Dreams and the Supernatural", href: "#" },
  { label: "Fashion, Style, Shopping", href: "#" },
  { label: "Food and Restaurants", href: "#" },
  { label: "Friends", href: "#" },
  { label: "Games", href: "#" },
  { label: "Goals, Plans, Hopes", href: "#" },
  { label: "Jobs, Work, Careers", href: "#" },
  { label: "Life", href: "#" },
  { label: "Movies, TV, Celebrities", href: "#" },
  { label: "Music", href: "#" },
  { label: "News and Politics", href: "#" },
  { label: "Parties and Nightlife", href: "#" },
  { label: "Pets and Animals", href: "#" },
  { label: "Podcast", href: "#" },
  { label: "Religion and Philosophy", href: "#" },
  { label: "Romance and Relationships", href: "#" },
  { label: "School, College, University", href: "#" },
  { label: "HelloSpace", href: "#" },
  { label: "Sports", href: "#" },
  { label: "Travel and Places", href: "#" },
  { label: "Web, HTML, Tech", href: "#" },
  { label: "Writing and Poetry", href: "#" },
];

export default async function GroupsPage() {
  const groups = await getGroups();
  return (
    <main className={styles["hs-groups-container"]}>
      <h1 className={styles["hs-groups-title"]}>Groups</h1>
      <p className={styles["hs-groups-intro"]}>
        Here you can discover and join HelloSpace Groups. HelloSpace Groups are a place to meet like-minded people,
        share content and talk about the topics you care about.
      </p>

      <div className={styles["hs-groups-actions"]}>
        <Link href="/groups/new" className={styles["hs-groups-newbtn"]}>
          <Image
            src="/static/icons/add.png"
            alt=""
            width={16}
            height={16}
            className={styles["hs-groups-newicon"]}
          />
          <span>Start a new Group</span>
        </Link>
      </div>

      <h3 className={styles["hs-groups-subhead"]}>Discover Groups</h3>

      <div className={styles["hs-groups-categorylist"]}>
        {categories.map((c) => (
          <Link key={c.label} href={c.href} className={styles["hs-groups-category"]}>
            {c.label}
          </Link>
        ))}
      </div>

      <h3 className={styles["hs-groups-subhead"]}>
        Popular Groups
        <span className={styles["hs-groups-rss"]} aria-label="RSS Feed" title="RSS Feed">RSS</span>
      </h3>

      <div className={styles["hs-groups-table"]} role="table">
        <div className={styles["hs-groups-thead"]} role="row">
          <div className={styles["hs-groups-th-left"]} role="columnheader"></div>
          <div className={styles["hs-groups-th-mid"]} role="columnheader">Group Name</div>
          <div className={styles["hs-groups-th-right"]} role="columnheader">Members</div>
        </div>
        <div role="rowgroup">
          {groups.map((g) => (
            <GroupRow key={g.id} group={g} />
          ))}
        </div>
      </div>
    </main>
  );
}
/* HS-GROUPS:END */

