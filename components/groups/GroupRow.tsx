import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/groups/groups.module.css";

/* HS-GROUPS:START */
type Group = {
  id: number | string;
  name: string;
  slug?: string;
  description: string;
  category?: string;
  avatarUrl?: string;
  membersCount: number;
};

export default function GroupRow({ group }: { group: Group }) {
  const href = group.slug ? `/groups/${group.slug}` : "#";
  return (
    <div className={styles["hs-groups-row"]} role="row">
      <div className={styles["hs-groups-cell-left"]} role="cell">
        <div className={styles["hs-groups-thumbwrap"]}>
          <Image
            src={group.avatarUrl || "/static/img/default-group.png"}
            alt=""
            width={78}
            height={78}
            className={styles["hs-groups-thumb"]}
          />
        </div>
      </div>
      <div className={styles["hs-groups-cell-mid"]} role="cell">
        <Link href={href} className={styles["hs-groups-grouplink"]}>
          {group.name}
        </Link>
        <p className={styles["hs-groups-desc"]}>{group.description}</p>
        <div className={styles["hs-groups-categoryline"]}>
          <span className={styles["hs-groups-categorylabel"]}>Category:</span>{" "}
          {group.category || "General"}
        </div>
      </div>
      <div className={styles["hs-groups-cell-right"]} role="cell">
        {group.membersCount.toLocaleString()}
      </div>
    </div>
  );
}
/* HS-GROUPS:END */
