import React from "react";

const Home = () => {
  return (
    <div>
      <h3> Hobby Tracker </h3>
      <p
        style={{
          textAlign: "justify",
          fontSize: 20,
          fontFamily: "serif",
          fontStyle: "oblique",
          padding: "50px",
          paddingRight: "100px",
        }}
      >
        Hobby Tracker is a single page application that helps you keep track of
        your hobbies. It allows you to view how much time you are spending on
        each hobby allowing you to organize the time you spend on activities.
        --- How much time do you spend using Netflix? Are you a gamer? Is
        spending hours on a Video Game healthy? What actually is a hobby?
        According to merrian-webster dictionary, a{" "}
        <a href="https://www.merriam-webster.com/dictionary/hobby">hobby</a> is
        'a pursuit outside of one's regular occupation engaged in especially for
        relaxation.'{" "}
      </p>
      <img
        style={{ float: "right", padding: "10px", marginTop: "-80px" }}
        src="https://media.giphy.com/media/4NvtQaVwUb4t0bYNY5/giphy.gif"
        height="285px"
        width="360px"
      />

      <p
        style={{
          textAlign: "justify",
          fontSize: 20,
          fontFamily: "serif",
          fontStyle: "",
          paddingLeft: "50px",
        }}
      >
        After a long hard day at work, who wouldn't want to just lean back, and
        relax? But when does relaxing become too much? There are only so many
        hours a day that we have to spend on our hobbies. How can we make sure
        that we aren't spending too much time on things that aren't necessarily
        helping us. This is where Hobby Tracker comes in. This is an application
        that plays the middle man when it comes to hobbies. The idea behind the
        app is not to discourage you not to relax, but rather track how you are
        relaxing. How many times have you heard, 'I spend so much time doing [X]
        activity, imagine if I used that time to do [insert useful skill].'
        Later followed by a 'I would of been [rich/master/professional].'
      </p>
      <img
        style={{ float: "right", padding: "10px" }}
        src="https://media.giphy.com/media/WqLH5ifAQY6UQB4n7I/giphy.gif"
        height="285px"
        width="360px"
      />
      <p
        style={{
          textAlign: "justify",
          fontSize: 20,
          fontFamily: "serif",
          paddingLeft: "50px",
        }}
      >
        Sounds familiar? Well this app aims to help give those words some
        meaning. Exactly how much time are you using on these other apps? How
        much time do you actually have in the day to dedicate to your hobbies?
        What are those hobbies? We are living in an age of entertainment. We
        have at our disposal access to whatever information we want anywhere,
        anytime.
      </p>
      <img
        style={{ float: "center", padding: "10px" }}
        src="https://media.giphy.com/media/l0Iy47CHaruyAVOgw/giphy.gif"
        height="285px"
        width="360px"
      />
      <p
        style={{
          textAlign: "justify",
          fontSize: 20,
          fontFamily: "serif",
          fontStyle: "oblique",
          paddingLeft: "50px",
        }}
      >
        Let's see how much time we are actually spending on the things we want
        to learn.
      </p>
    </div>
  );
};

export default Home;
