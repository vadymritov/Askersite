import styles from "./Answer.module.scss";
// import AllAnswerIcon from "../UI/icons/AllAnswerIcon";
import React, {useEffect, useRef, useState} from "react";
import Loader from "./Loader/Loader";
import AllAnswerIcon from "../../components/UI/icons/AllAnswerIcon";
import {useLocation, useNavigate} from "react-router-dom";
import Logo from "../../components/UI/icons/Logo";
import ButtonAnswer from "./ButtonAnswer";
import { useReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";
import {http} from "../../http/http";



const Answer = (props) => {
  const location = useLocation();
  let { foundAskerId } = location.state;
  const [loaderActive, setLoaderActive] = useState(false);
  const [finishAnswer, setFinishAnswer] = useState(false);
  const [timer, setTimer] = useState(30)
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [UserProfile, setUserProfile] = useState([]);

  let navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(async () => {
    if (cardRef?.current?.classList.contains("start-rotate")) {
      cardRef?.current?.classList.remove("start-rotate")
    }

    const timer = setTimeout(() => {
      cardRef?.current?.classList.add("start-rotate")
    }, 1);

    return () => clearTimeout(timer);
  }, [loaderActive]);

  const bodyFormData = new FormData();
  const userID = JSON.parse(localStorage.getItem("UserID"));
  bodyFormData.append('user_id',userID)
  bodyFormData.append('asker_id',foundAskerId)
  useEffect(() => {
    if (userID) {
      setUserProfile(userID);
      http.post('nextQuestionList',bodyFormData).then(res=>console.log(res.data));
    }
  }, []);

  const videoConstraints = {
    facingMode: "user",
  };
  const startRecording = () => {
    console.log('start recording')
    const timer = setTimeout(() => {
      handleStartCaptureClick();
    }, 2000);
    return () => clearTimeout(timer);
  };

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
    const timer = setTimeout(() => {
      handleStopCaptureClick();
    }, 31000);
    return () => clearTimeout(timer);
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    async ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));

        const myFile = new File([data], "example.mp4", {
          type: "video/mp4",
        });
        const asker_id = foundAskerId;
        // const question_id = props.data.data.question_id;
        const fdata = new FormData();
        // fdata.append("file", blob);
        fdata.append("answer", myFile);
        fdata.append("asker_id", asker_id);
        fdata.append("question_id", 158);
        fdata.append("user_id",userID)

        // console.log("fdata" , fdata);


        http.post('submitAnswer',fdata).then(res=>console.log(res))
      }
    },
    [setRecordedChunks]
  );

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      // const url = URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // document.body.appendChild(a);
      // a.style = "display: none";
      // a.href = url;
      // a.download = "react-webcam-stream-capture.webm";
      // a.click();
      // window.URL.revokeObjectURL(url);
      // setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
    }
  }, [mediaRecorderRef, webcamRef, setCapturing]);
  // useEffect(() => {
  //   if (finishAnswer) {
  //     const count = setInterval(() => {setTimer(prevState => {
  //         console.log('prevst', prevState);
  //         if (prevState > 0) {
  //           return prevState - 1;
  //         } else {
  //           clearInterval(count)
  //           return 0
  //         }
  //       }
  //     )}, 1000)
  //   }
  // }, [finishAnswer])
  //   console.log('setInterva', finishAnswer, loaderActive);

  const beginAnswer = () => {
    setLoaderActive(true);
    setTimeout(() => {
      setFinishAnswer(true)
    }, 3000);

   // clearTimeout(t);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoBlock}>
        <AllAnswerIcon className={styles.infoIcon}/>
        <div className={styles.infoText}>Brighton Art Gallery<br/> Cleaner Job in Brighton</div>
      </div>
      <div className={`${styles.contentContainer}`}>
        <div ref={cardRef} className={`default-flip flip-card-inner  ${styles.cardWrap}`}>
          <Logo className={styles.logo}/>
          <Webcam audio={true} ref={webcamRef}  className={styles.videoPreview}  videoConstraints={videoConstraints}/>
          {loaderActive ? <Loader className={styles.loader} setIsActive={setLoaderActive}/> : null}
          <div className={styles.cardInfo}>
            <span>Tell me what you’d like to know about this role?</span>
            {!finishAnswer ?
              <button className={`${styles.beginBtn} `} onClick={() => {
                startRecording()
                beginAnswer()
              }}>
                begin answer
                <div/>
              </button>
              :
              <ButtonAnswer time={timer} onClick={handleStopCaptureClick}/>
              // <button type='button' className={styles.content}>
              //   <span>finish answer</span>
              //
              //   <div className={styles.redCircleWrap}>
              //     <div className={styles.timer}>
              //       {timer}
              //     </div>
              //   </div>
              //   <div className={styles.line}/>
              // </button>
            }
          </div>
          <div className={styles.cardContainer}>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Answer;
