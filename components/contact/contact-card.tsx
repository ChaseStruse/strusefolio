import styles from "./contact.module.css";

export default function ContactCard() {
  return (
    <div className={styles.card}>
      <h1>Contact</h1>
      <form>
        <div className={styles.cardInput}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </label>
        </div>
        <div className={styles.cardButton}>
        <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
