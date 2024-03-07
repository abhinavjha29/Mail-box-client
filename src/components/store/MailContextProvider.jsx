import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MailContext = createContext();

const MailProvider = (props) => {
  const [mailData, setMailData] = useState([]);
  const [singleMail, setSingleMail] = useState({});
  const [sentMailData, setSentMailData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getMail();
  }, []);
  const sendMail = async (mail) => {
    try {
      const resp = await axios.post(
        `http://localhost:5000/email/sendMail/${token}`,
        mail
      );
      if (!resp) {
        alert("something went wrong");
        throw new Error();
      } else {
        return resp.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getMail = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:5000/email/getMail/${token}`
      );
      if (resp) {
        console.log(resp.data.mailData);
        setMailData(resp.data.mailData);
      }
    } catch (error) {
      console.logf(err);
    }
  };

  const getSingleMail = async (id) => {
    try {
      const resp = await axios.post(
        "http://localhost:5000/email/getSingleMail",
        {
          id,
        }
      );
      if (resp) {
        const data = resp.data.resp;
        setSingleMail(data);
        return;
      }
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMail = async (id) => {
    try {
      const resp = await axios.post(`http://localhost:5000/email/deleteMail`, {
        id,
      });

      if (resp) {
        // Update mailData after deletion
        setMailData(mailData.filter((mail) => mail._id !== id));
        console.log("Mail deleted successfully");
      } else throw new Error();
    } catch (err) {
      console.error(err);
    }
  };
  const getSentMail = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:5000/email/getSentMail/${token}`
      );
      if (resp) {
        console.log(resp.data.sentMailData);
        setSentMailData(resp.data.sentMailData);
        return;
      } else throw new Error();
    } catch (err) {
      console.error(err);
    }
  };
  const usercontext = {
    sendMail,
    getMail,
    mailData,
    getSingleMail,
    singleMail,
    deleteMail,
    getSentMail,
    sentMailData,
  };

  return (
    <MailContext.Provider value={usercontext}>
      {props.children}
    </MailContext.Provider>
  );
};
export default MailProvider;
