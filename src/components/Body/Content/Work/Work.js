import React, { Component } from "react";
import "./Work.css";
import Modal from "./Modal/Modal";
import Helmet from "react-helmet";
import LazyLoad from "react-lazy-load";

// importing small images
import uwoshAdmissionsSmall from "./images/small-images/admissions.jpg";
import uwoshHomeSmall from "./images/small-images/uwosh.edu.jpg";
import gemificationSmall from "./images/small-images/gemification.jpg";
import portalV2Small from "./images/small-images/portalV2.jpg";
import virtualTourSmall from "./images/small-images/virtualtour.jpg";
import farmAndFleetBlogSmall from "./images/small-images/farmandfleetblog.jpg";

// importing modal (big) images
import uwoshAdmissionsBig from "./images/full-images/admissions.jpg";
import uwoshHomeBig from "./images/full-images/uwosh.edu.jpg";
import gemificationBig from "./images/full-images/gemification.jpg";
import portalV2Big from "./images/full-images/portalV2.jpg";
import virtualTourBig from "./images/full-images/virtualtour.jpg";
import farmAndFleetBlogBig from "./images/full-images/farmandfleetblog.jpg";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageModalVisible: false,
      imgSrc: "",
      imgAlt: ""
    };
    this.modalToggle = this.modalToggle.bind(this);
    this.activateUWOHomeModal = this.activateUWOHomeModal.bind(this);
    this.activateUWOAdmissionsModal = this.activateUWOAdmissionsModal.bind(
      this
    );
    this.activatePortalV2Modal = this.activatePortalV2Modal.bind(this);
    this.activateVirtualTourModal = this.activateVirtualTourModal.bind(this);
    this.activateGemificationModal = this.activateGemificationModal.bind(this);
    this.activateBFFModal = this.activateBFFModal.bind(this);
  }

  modalToggle() {
    if (this.state.imageModalVisible) {
      this.setState({ imgSrc: "", imgAlt: "", imageModalVisible: false });
    } else {
      this.setState({ imageModalVisible: true });
    }
  }

  activateUWOHomeModal() {
    this.setState({
      imgSrc: uwoshHomeBig,
      imgAlt: "University of Wisconsin - Oshkosh Admissions home page",
      imageModalVisible: true
    });
  }

  activateUWOAdmissionsModal() {
    this.setState({
      imgSrc: uwoshAdmissionsBig,
      imgAlt: "University of Wisconsin - Oshkosh Admissions page",
      imageModalVisible: true
    });
  }

  activatePortalV2Modal() {
    this.setState({
      imgSrc: portalV2Big,
      imgAlt: "MyUWO Portal home dashboard showing apps and modules",
      imageModalVisible: true
    });
  }

  activateVirtualTourModal() {
    this.setState({
      imgSrc: virtualTourBig,
      imgAlt:
        "Web application used to give users a virtual tour of the UW-Oshkosh campus",
      imageModalVisible: true
    });
  }

  activateGemificationModal() {
    this.setState({
      imgSrc: gemificationBig,
      imgAlt: "Slack application called gemification",
      imageModalVisible: true
    });
  }

  activateBFFModal() {
    this.setState({
      imgSrc: farmAndFleetBlogBig,
      imgAlt: "Blain's Farm and Fleet blog with product list attachment",
      imageModalVisible: true
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Joseph Kerkhof - Work</title>
          <meta
            name="Description"
            content="The work page in the portfolio for the full stack web developer Joseph Kerkhof. This page highlights all of the work that proves Joseph is an experience web developer and shows he can get things done."
          />
        </Helmet>
        <h1>Work</h1>
        <p>
          Below are examples of my work demonstrating that I can design,
          implement, and lead teams to build new and better{" "}
          <abbr title="Information Technology">IT</abbr> systems. I've worked
          for two organizations:{" "}
          <a
            href="https://www.portalmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portal Media
          </a>{" "}
          and{" "}
          <a href="https://uwosh.edu" target="_blank" rel="noopener noreferrer">
            <abbr title="University of Wisconsin - Oshkosh">UW-Oshkosh</abbr>
          </a>.
        </p>
        <h2>
          Work at{" "}
          <abbr title="University of Wisconsin - Oshkosh">UW-Oshkosh</abbr> (May
          2016-Present)
        </h2>
        <hr />
        <div className="work-items">
          <div className="work-item-title">
            <h3>
              <abbr title="University of Wisconsin - Oshkosh">UW-Oshkosh</abbr>'s
              theme and branding
            </h3>
          </div>
          <LazyLoad className="img-wrapper uwo-theme-image-1">
            <img
              src={uwoshHomeSmall}
              alt="University of Wisconsin - Oshkosh Admissions home page"
              onClick={this.activateUWOHomeModal}
            />
          </LazyLoad>
          <LazyLoad className="img-wrapper uwo-theme-image-2">
            <img
              src={uwoshAdmissionsSmall}
              alt="University of Wisconsin - Oshkosh Admissions page"
              onClick={this.activateUWOAdmissionsModal}
            />
          </LazyLoad>
          <div className="uwo-theme-description">
            <p>
              These are examples of the{" "}
              <a
                href="https://github.com/uwosh/uw-oshkosh-divi"
                target="_blank"
                rel="noopener noreferrer"
              >
                WordPress theme
              </a>{" "}
              I maintained at{" "}
              <abbr title="University of Wisconsin - Oshkosh">UW-Oshkosh</abbr>.
              This theme was used on almost every site on the{" "}
              <abbr title="University of Wisconsin - Oshkosh">UWO</abbr> campus
              incurring millions of view each year. Examples presented here
              include our{" "}
              <a
                href="https://uwosh.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <abbr title="University of Wisconsin - Oshkosh">UWO</abbr> home
                page
              </a>{" "}
              and{" "}
              <a
                href="https://uwosh.edu/admissions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admissions office
              </a>.
            </p>
          </div>
          <div className="work-item-title">
            <h3>MyUWO Portal Homepage Redesign</h3>
          </div>
          <LazyLoad className="img-wrapper">
            <img
              src={portalV2Small}
              alt="MyUWO Portal home dashboard showing apps and modules"
              onClick={this.activatePortalV2Modal}
            />
          </LazyLoad>
          <div className="portalv2-description">
            <p>
              The{" "}
              <a
                href="https://portal.housing.uwosh.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                MyUWO Portal
              </a>{" "}
              is a conglomerate of applications and systems designed to ease
              business procedures servicing the{" "}
              <abbr title="University of Wisconsin - Oshkosh">UWO</abbr> campus,
              specifically the Department of Residence Life. As this application
              grew in scale, performance of the homepage became a concern.
            </p>
            <p>
              In leading this project, I was tasked with improving the
              performance the portal as well as bringing in a application design
              - both of which were immensely successful. The design was hailed
              by Directors in the Univeristy and page speed performance was
              improved <strong>by over 5.5x</strong>.
            </p>
          </div>
          <div className="work-item-title">
            <h3>
              <abbr title="University of Wisconsin - Oshkosh">UWO</abbr> Virtual
              Tour Redesign
            </h3>
          </div>
          <LazyLoad className="img-wrapper">
            <img
              src={virtualTourSmall}
              alt="Web application used to give users a virtual tour of the UW-Oshkosh campus"
              onClick={this.activateVirtualTourModal}
            />
          </LazyLoad>
          <div className="virtual-tour-description">
            <p>
              The{" "}
              <a
                href="https://virtualtour.uwosh.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <abbr title="University of Wisconsin - Oshkosh">UWO</abbr>{" "}
                Virtual Tour
              </a>{" "}
              was not new to our campus; a virtual tour for the campus was
              already created many years ago. The goal of this redesign was to
              provide new features and refresh visuals on the old features.
            </p>
            <p>
              In addition to providing users with helpful information on a map
              of campus, we were able to provide users a{" "}
              <abbr title="Virtual Reality">VR</abbr> tour using the new{" "}
              <a
                href="https://developers.google.com/vr/develop/web/vrview-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google VR View{" "}
                <abbr title="Application Program Interface">API</abbr>
              </a>. With this{" "}
              <abbr title="Application Program Interface">API</abbr>, we
              provided users with a tour of classrooms, a walk thru campus, and
              even the field of our sports complex!
            </p>
          </div>
          <div className="work-item-title">
            <h3>Gemification</h3>
          </div>
          <LazyLoad className="img-wrapper">
            <img
              src={gemificationSmall}
              alt="Slack application called gemification"
              onClick={this.activateGemificationModal}
            />
          </LazyLoad>
          <div className="gemification-description">
            <p>
              Gemification is a Slack bot used to give appreciation toward your
              coworkers. We used it to help enhance our office environment with{" "}
              <a
                href="https://en.wikipedia.org/wiki/Gamification"
                target="_blank"
                rel="noopener noreferrer"
              >
                gamification
              </a>. If one of your coworkers helped you solve a problem or went
              above and beyond the call of duty, you could use Gemification to
              show appreciation towards that coworker by giving them a 'gem.'<br />
              You could give a coworker a gem like this:<br />
              <code>
                <span role="img" aria-label="gem emoji">
                  💎
                </span>{" "}
                @coworker for helping me finish my report! Thank you!
              </code>
              Later, you could recall a leaderboard from the bot to see who was
              currently on top further sparking office competition.
            </p>
          </div>
        </div>
        <h2>Work at PortalMedia (June 2015 - August 2015)</h2>
        <hr />
        <div className="work-items">
          <div className="work-item-title">
            <h3>Blain's Farm and Fleet Blog - Product List</h3>
          </div>
          <LazyLoad className="img-wrapper">
            <img
              src={farmAndFleetBlogSmall}
              alt="Blain's Farm and Fleet blog with product list attachment"
              onClick={this.activateBFFModal}
            />
          </LazyLoad>
          <div className="bff-blog-description">
            <p>
              <a
                href="https://www.farmandfleet.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blain's Farm and Fleet
              </a>{" "}
              wanted a way to attach items they sold in their eCommerce store to
              their blog posts. Using the WordPress{" "}
              <abbr title="Application Program Interface">API</abbr> and tying
              into the Blain's Farm and Fleet product database, I created an
              interactive way for content writers to attach products to their
              blog posts.
            </p>
          </div>
        </div>
        <Modal
          imgSrc={this.state.imgSrc}
          imgAlt={this.state.imgAlt}
          show={this.state.imageModalVisible}
          modalToggle={this.modalToggle}
        />
      </div>
    );
  }
}

export default Work;
