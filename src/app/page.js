"use client";
import styles from "./page.module.css";

export default function Home() {
  const handleButtonClick = () => {
    alert("Start Recording!");
  };
  return (
    <main>
      <div className={styles["header"]}>
        <img
          className={styles["header-logo"]}
          src="https://phenikaa-x.com/assets/logo/logoDark.svg"
        ></img>
      </div>
      <div className={styles["vr-container"]}>
        <div className={styles["allow-mic-message"]}>
          <span>Click the button to start recording…</span>
          <div
            className={styles["recording-button"]}
            onClick={handleButtonClick}
          >
            <i className={styles["icon-record"]}>
              <i className={styles["icon-record-inner"]}></i>
            </i>
          </div>
        </div>
      </div>
      <div className={styles["free-content"]}>
        <div>
          <img
            className={styles["pibot-img"]}
            src="https://phenikaa-x.com/assets/image/ssr/img1.png"
          ></img>
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["text-group"]}>
            <div className={styles["text-block"]}>
              <h3>Online Voice Recorder</h3>
              <div className={styles["line"]}></div>
              <p>
                Our Voice Recorder is a convenient and simple online tool that
                can be used right in your browser. It allows you to record your
                voice using a microphone and save it as an mp3 file.
              </p>
            </div>
            <div className={styles["text-block"]}>
              <h3>Free to use</h3>
              <div className={styles["line"]}></div>
              <p>
                Voice Recorder is completely free. No hidden payments,
                activation fees, or charges for extra features.
              </p>
            </div>
            <div className={styles["text-block"]}>
              <h3>Microphone settings</h3>
              <div className={styles["line"]}></div>
              <p>
                You can adjust your microphone settings using standard Adobe
                Flash Player tools (decreasing echo and adjusting the volume).
              </p>
            </div>
            <div className={styles["text-block"]}>
              <h3>Privacy guaranteed</h3>
              <div className={styles["line"]}></div>
              <p>
                We guarantee that our app is secure. Everything you record is
                accessible to you alone: nothing is uploaded to our servers for
                storage.
              </p>
            </div>
            <div className={styles["text-block"]}>
              <h3>Cut your recording</h3>
              <div className={styles["line"]}></div>
              <p>
                After the recording is complete, you can crop it to the section
                you actually need.
              </p>
            </div>
            <div className={styles["text-block"]}>
              <h3>Auto silence trimming</h3>
              <div className={styles["line"]}></div>
              <p>
                Voice Recorder automatically detects silent fragments at the
                beginning and the end of your recording and deletes them for
                your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
