// components/messages/ChatBox.tsx
"use client";
import styles from "../../styles/messages/im.module.css";

/* HS-IM:START */
type Msg = { id: number; from: "me" | "them"; text: string; time: string };

export default function ChatBox({ messages }: { messages: Msg[] }) {
  return (
    <div className={styles["chat-view"]}>
      <div className={styles["chat-box"]}>
        <div className={styles["messages"]}>
          <div className={styles["nochat-info"]}>
            <p><strong>No chat selected</strong></p>
            <p>Please select a chat or <a href="#">start a new one</a>!</p>
          </div>

          {messages.map((m) => (
            <div key={m.id} className={`${styles["message-container"]} ${m.from === "me" ? styles["self"] : ""}`}>
              <div className={styles["message-container-inner"]}>
                <div className={`${styles["message"]} ${styles["slim"]}`}>
                  <p>{m.text}</p>
                </div>
                <div className={styles["message-footer"]}>{m.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles["new-message"]}>
          <div className={styles["left"]} />
          <div className={styles["center"]}>
            <textarea placeholder="Type a message…" rows={2} />
          </div>
          <div className={styles["right"]}>
            <button aria-label="Send">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
/* HS-IM:END */
