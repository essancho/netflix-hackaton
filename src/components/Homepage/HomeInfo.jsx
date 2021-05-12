import React from "react";
import TVHolder from "../../logos/tv.png";
import firstVid from "../../videos/vid-1.m4v";
import secondVid from "../../videos/vid-2.m4v";
import strangerPhone from "../../logos/mobile.jpeg";
import strangerCover from "../../logos/stranger-mobile.png";
import DownloadIcon from "../../logos/download-icon.gif";
import TVHolderSecond from "../../logos/tv-2.png";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./HomeInfo.css";
import Footer from "../Main/Footer";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "70%",
        backgroundColor: "black",
        marginTop: "50px",
    },
    root: {
        color: "white",
        backgroundColor: "rgb(39, 39, 39)",
        marginBottom: "10px",
        "& .MuiAccordionDetails-root": {
            backgroundColor: "rgb(49, 49, 49)",
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    icons: {
        color: "white",
    },
}));
const HomeInfo = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div className="info-wrapper">
                <div className="info-card">
                    <div className="info-text">
                        <p className="info-title">Enjoy on your TV.</p>
                        <p className="info-subtitle">
                            Watch on Smart TVs, Playstation, Xbox, Chromecast,
                            Apple TV, Blu-ray players, and more.
                        </p>
                    </div>
                    <div className="vid-container">
                        <img
                            width={550}
                            className="tv-holder"
                            src={TVHolder}
                            alt=""
                        />
                        <video
                            className="vid-1"
                            src={firstVid}
                            autoPlay
                            playsInline
                            muted
                            loop
                        ></video>
                    </div>
                </div>
            </div>
            <div className="info-wrapper">
                <div className="info-card-2">
                    <div className="info-text">
                        <p className="info-title">
                            Download your shows <br /> to watch offline.
                        </p>
                        <p className="info-subtitle">
                            Save your favorites easily and always have something
                            to watch.
                        </p>
                    </div>
                    <div className="stranger-container">
                        <img
                            className="phone-holder"
                            src={strangerPhone}
                            alt=""
                        />
                        <div className="stranger-info">
                            <img src={strangerCover} alt="" />
                            <div className="stranger-text">
                                <p className="stranger-text-1">
                                    Stranger Things
                                </p>
                                <p className="stranger-text-2">
                                    Downloading...
                                </p>
                            </div>
                            <img src={DownloadIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-wrapper">
                <div className="info-card">
                    <div className="info-text">
                        <p className="info-title">Watch everywhere.</p>
                        <p className="info-subtitle">
                            Stream unlimited movies and TV shows on your phone,
                            tablet, laptop, and TV without paying more.
                        </p>
                    </div>
                    <div className="vid-container">
                        <img
                            width={600}
                            className="tv-holder"
                            src={TVHolderSecond}
                            alt=""
                        />
                        <video
                            className="vid-2"
                            src={secondVid}
                            autoPlay
                            playsInline
                            muted
                            loop
                        ></video>
                    </div>
                </div>
            </div>
            <div className="info-wrapper">
                <div className="info-card-3">
                    <p className="info-title">Frequently Asked Questions</p>
                    <div className={classes.container}>
                        <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                            className={classes.root}
                        >
                            <AccordionSummary
                                color="secondary"
                                expandIcon={
                                    <ExpandMoreIcon className={classes.icons} />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    What is Netflix?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Netflix is a streaming service that offers a
                                    wide variety of award-winning TV shows,
                                    movies, anime, documentaries, and more on
                                    thousands of internet-connected devices. You
                                    can watch as much as you want, whenever you
                                    want without a single commercial – all for
                                    one low monthly price. There's always
                                    something new to discover and new TV shows
                                    and movies are added every week!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.root}
                            expanded={expanded === "panel2"}
                            onChange={handleChange("panel2")}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={classes.icons} />
                                }
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>
                                    How much does Netflix cost?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Watch Netflix on your smartphone, tablet,
                                    Smart TV, laptop, or streaming device, all
                                    for one fixed monthly fee. Plans range from
                                    EUR7.99 to EUR11.99 a month. No extra costs,
                                    no contracts.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.root}
                            expanded={expanded === "panel3"}
                            onChange={handleChange("panel3")}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={classes.icons} />
                                }
                                aria-controls="panel2a-content"
                                id="panel3a-header"
                            >
                                <Typography className={classes.heading}>
                                    Where can I watch?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Watch anywhere, anytime, on an unlimited
                                    number of devices. Sign in with your Netflix
                                    account to watch instantly on the web at
                                    netflix.com from your personal computer or
                                    on any internet-connected device that offers
                                    the Netflix app, including smart TVs,
                                    smartphones, tablets, streaming media
                                    players and game consoles. You can also
                                    download your favorite shows with the iOS,
                                    Android, or Windows 10 app. Use downloads to
                                    watch while you're on the go and without an
                                    internet connection. Take Netflix with you
                                    anywhere.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.root}
                            expanded={expanded === "panel4"}
                            onChange={handleChange("panel4")}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={classes.icons} />
                                }
                                aria-controls="panel2a-content"
                                id="panel4a-header"
                            >
                                <Typography className={classes.heading}>
                                    How do I cancel?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Netflix is flexible. There are no pesky
                                    contracts and no commitments. You can easily
                                    cancel your account online in two clicks.
                                    There are no cancellation fees – start or
                                    stop your account anytime.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.root}
                            expanded={expanded === "panel5"}
                            onChange={handleChange("panel5")}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={classes.icons} />
                                }
                                aria-controls="panel2a-content"
                                id="panel5a-header"
                            >
                                <Typography className={classes.heading}>
                                    What can I watch on Netflix?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Netflix has an extensive library of feature
                                    films, documentaries, TV shows, anime,
                                    award-winning Netflix originals, and more.
                                    Watch as much as you want, anytime you want.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.root}
                            expanded={expanded === "panel6"}
                            onChange={handleChange("panel6")}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className={classes.icons} />
                                }
                                aria-controls="panel2a-content"
                                id="panel6a-header"
                            >
                                <Typography className={classes.heading}>
                                    Why am I seeing this language?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Your browser preferences determine the
                                    language shown here.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default HomeInfo;
