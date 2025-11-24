// components/messages/ChatList.tsx
"use client";
import styles from "../../styles/messages/im.module.css";

/* HS-IM:START */
type Chat = { id: number; name: string; status: string; unread: number };

export default function ChatList({ chats }: { chats: Chat[] }) {
  return (
    <div>
      <div className={styles["chat-header"]}>
        <div className={styles["chat-header-pfp-wrapper"]}>
          <img className={styles["profile-pic"]} src="/static/img/default/profilepic.png" alt="" />
        </div>
        <div className={styles["center"]}>
          <p className={`${styles["chat-header-name"]}`}>You</p>
          <p className={`${styles["chat-header-status"]}`}>Online</p>
        </div>
      </div>

      {chats.map((c, i) => (
        <div key={c.id} className={styles["chat-item"]}>
          <div className={styles["left"]}>
            <img className={styles["profile-pic"]} src="/static/img/default/profilepic.png" alt="" />
          </div>
          <div className={styles["center"]}>
            <p className={styles["chat-name"]}>{c.name}</p>
            <p className={styles["chat-status"]}>{c.status}</p>
          </div>
          <div className={styles["right"]}>
            {c.unread > 0 && <span className={styles["chat-unread-counter"]}>{c.unread}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
/* HS-IM:END */
