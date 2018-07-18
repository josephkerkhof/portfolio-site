import React, { Component } from "react";
import "./Work.css";
import Helmet from "react-helmet";
import uwoshAdmissionsSmall from "./images/small-images/admissions.jpg";
import uwoshHomeSmall from "./images/small-images/uwosh.edu.jpg";
import gemificationSmall from "./images/small-images/gemification.jpg";
import portalV2Small from "./images/small-images/portalV2.jpg";
import virtualTourSmall from "./images/small-images/virtualtour.jpg";
import farmAndFleetBlogSmall from "./images/small-images/farmandfleetblog.jpg";

class Work extends Component {
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
            <abbr title="University of Wisconsin - Oshkosh">UW-Oshkosh</abbr>'s
            theme and branding
          </div>
          <div className="uwo-theme-image-1">
            <img
              src={uwoshHomeSmall}
              alt="University of Wisconsin - Oshkosh Admissions home page"
            />
          </div>
          <div className="uwo-theme-image-2">
            <img
              src={uwoshAdmissionsSmall}
              alt="University of Wisconsin - Oshkosh Admissions home page"
            />
          </div>
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
          <div className="work-item-title">MyUWO Portal Homepage Redesign</div>
          <div>
            <img
              src={portalV2Small}
              alt="MyUWO Portal home dashboard showing apps and modules"
            />
          </div>
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
            <abbr title="University of Wisconsin - Oshkosh">UWO</abbr> Virtual
            Tour Redesign
          </div>
          <div>
            <img
              src={virtualTourSmall}
              alt="Web application used to give users a virtual tour of the UW-Oshkosh campus"
            />
          </div>
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
          <div className="work-item-title">Gemification</div>
          <div>
            <img
              src={gemificationSmall}
              alt="Screenshot of a Slack application called gemificationSmall"
            />
          </div>
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
            Blain's Farm and Fleet Blog - Product List
          </div>
          <div>
            <img
              src={farmAndFleetBlogSmall}
              alt="Blain's Farm and Fleet blog with product list attachment"
            />
          </div>
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
              <abbr title="Application Program Interface">API</abbr> I and tying
              into product databases in the Blain's Farm and Fleet system, I
              created an interactive way for content writers to attach products
              to their blog posts.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
