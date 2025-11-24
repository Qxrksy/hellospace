import Image from "next/image";
import styles from "../../styles/messages/im.module.css";
import ChatList from "../../components/messages/ChatList";
import ChatBox from "../../components/messages/ChatBox";

/* HS-IM:START */
const MOCK_CHATS = [
  { id: 1, name: "Alex", status: "Online • Hey! Are you around?", unread: 2 },
  { id: 2, name: "Bailey", status: "Last seen 2h ago", unread: 0 },
  { id: 3, name: "Charlie", status: "Typing…", unread: 0 },
];

const MOCK_MESSAGES = [
  { id: 101, from: "them" as const, text: "hey :)", time: "2:11 PM" },
  { id: 102, from: "me" as const, text: "yo! what's up?", time: "2:12 PM" },
  { id: 103, from: "them" as const, text: "need help with the layout", time: "2:13 PM" },
];

export default function MessagesPage() {
  return (
    <div className={styles["hs-im-fullpage"]}>
      {/* Slim "Back to HelloSpace" bar (static) */}
      <nav className={styles["im-nav"]}>
        <div className="left">
          <a href="/home" className={styles["im-nav-link"]}>
            <span className={styles["item"]}>« Back to HelloSpace</span>
          </a>
        </div>
        <div className="center" />
        <div className="right">
          {/* Empty right section */}
        </div>
      </nav>

      <div className={styles["im-container"]}>
        <div className={styles["im-main"]}>
          {/* LEFT COLUMN */}
          <aside className={styles["left"]}>
            <div className={styles["im-logo-container"]}>
              <div className={styles["im-logo"]}>
                <img src="/static/img/default/profilepic.png" alt="" />
                <p>Instant Messenger</p>
              </div>
            </div>

            <div className={styles["chat-list"]}>
              {/* XP-like tabpanel */}
              <div className={styles["tabpanel"]}>
                <menu className={styles["tabmenu"]}>
                  <button className={`${styles["tabbtn"]} ${styles["active"]}`}>All Chats</button>
                  <button className={styles["tabbtn"]}>Favs</button>
                </menu>

                <div className={styles["content"]}>
                  <ChatList chats={MOCK_CHATS} />
                </div>
              </div>
            </div>

            {/* Connection status (bottom strip) */}
            <div className={styles["connection-status-container"]}>
              <div className={styles["connection-status"]}>
                <p>
                  <img src="/static/icons/status_online.png" width="14" height="14" alt="" /> Connected
                </p>
                <p className={styles["right"]}>
                  <img src="/static/icons2/information.png" width="14" height="14" alt="" /> Loading…
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <section className={styles["right"]}>
            <ChatBox messages={MOCK_MESSAGES} />
          </section>
        </div>
      </div>
    </div>
  );
}
/* HS-IM:END */

