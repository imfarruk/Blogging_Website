import React,{useState} from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button,styled} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactUs } from "../../service/api";

const URL = "http://localhost:4000";

const styles = makeStyles({
  cardBox: {
    display: "flex",
    // height: "90vh",
    paddingBottom: 11,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  formStyle: {
    display: "flex",
    flexDirection: "column",
  },
  inputStyle: {
    "&:hover,&:focus": {
      background: "#FAF4F2",
    },
  },
  formMsg: {
    fontSize: 25,
    fontWeight: 800,
    background: "linear-gradient(0deg, green,orange)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  formInput: {
    textDecoration: "underline solid  30%",
    fontSize: 25,
    marginBottom: 2,
    background: "linear-gradient(10deg,grey,yellow)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
});

const Error = styled(Typography)`
  font-size: 100px;
  color: #ff6161;
  line-height: 0;
  margin-top: 100px;
`;

const Contact = () => {
  const theme = useTheme();
  const classes = styles();
  const [error, setError] = useState(false);
  const [sendMsg, setSendMsg] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputs = (e) => {
    setError(false);
    const name = e.target.name;
    const value = e.target.value;
    setSendMsg({ ...sendMsg, [name]: value });

  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = sendMsg;

    try {
      const res = await contactUs(sendMsg);
      if (res.status === 422) {
        // toast.error("Fill all column perfectly", {
        //   position: "top-center",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        setError(true);
        toast.error("Message not send 🤝...", { delay: 1000 });
      } else {
        setTimeout(() => {
          setSendMsg({ name: "", email: "", phone: "", message: "" });
        }, 3000);

        toast.success("Message send successfully 🤝...", { delay: 1000 });
      }
    } catch (err) {
      console.log(err);
    }

    // setForm({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          paddingBottom: 2,
        }}
        id="contact"
      >
       
        <Grid container spacing={2} className={classes.cardBox}>
          <Grid item xs={10} sm={5} md={6} lg={6}>
            
              <Typography
                className={classes.formMsg}
                sx={
                  {
                    fontWeight:700,
                    transform: "scaleY(1.5)",
                    marginTop:5,
                  }
                }
              >
                HELLO! SEND ME
                <br />YOUR QUERIES<br />
                
              </Typography>
              <Typography className={classes.formInput}>
                ========================
              </Typography>
              <Typography>
                Your feedback / message is very important for me..
              </Typography>
              <form
              method="POST"
              className={classes.formStyle}
            >
            {error && <Error>Please enter valid data</Error>}
              <TextField
                label="Name"
                placeholder="Your Name"
                type="text"
                name="name"
                value={sendMsg.name}
                onChange={handleInputs}
                style={{margin:5}}
                className={classes.inputStyle}
              />
              <TextField
                label="Email"
                type="email"
                placeholder="abcd@mail.com"
                name="email"
                value={sendMsg.email}
                style={{margin:5}}
                onChange={handleInputs}
                className={classes.inputStyle}
              />
              <TextField
                label="Phone"
                placeholder="1234567890"
                type="number"
                name="phone"
                value={sendMsg.phone}
                style={{margin:5}}
                onChange={handleInputs}
                className={classes.inputStyle}
              />
              <TextField
                id="outlined-textarea"
                label="Message"
                placeholder="Write your message"
                multiline
                minRows={3}
                name="message"
                value={sendMsg.message}
                style={{margin:5}}
                onChange={handleInputs}
                className={classes.inputStyle}
              />
              <Button
                variant="contained"
                type="submit"
                style={{margin:'2px 5px'}}
                onClick={formSubmit}
              >
                Submit
              </Button>
            </form>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
            />
          </Grid>
          <Grid item xs={10} sm={5} md={4} lg={4} order={{ xs: 3, sm: 2 }}>
            <CardMedia
              component="img"
              height="300"
              image="/images/email.png"
              alt="Emails_png"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;

