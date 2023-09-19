import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I AM ONLY HUMAN AFTER ALL
        </p>
        <p className="a-desc">
        I'm Sachin, a passionate Front-End Developer based in Hamirpur, Himachal Pradesh. With a solid foundation in HTML, CSS, and JavaScript, I'm dedicated to enhancing user experiences and driving innovation in web projects. Currently pursuing a B.Tech in Electronics and Communication Engineering at NIT Hamirpur with a CGPA of 8.49, I've also excelled in 12th grade with an 86.6% score and 10th grade with a 9.4 CGPA. My experience includes collaborating as a Front-End Developer at Code Casa, where I contributed to responsive web applications. Beyond coding, I'm an avid cricket enthusiast, gamer, traveler, and music lover. Find me on GitHub and LeetCode, and let's create something remarkable together!
        </p>
       
      </div>
    </div>
  );
};

export default About;