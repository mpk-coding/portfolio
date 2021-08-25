<?php
//
include "views/header.php";
//
?>

<body>
  <header class="navbar">
    <nav class="nav">
      <h3 class="text--display">mpk.coding@gmail.com</h3>
    </nav>
  </header>
  <main class="layout grid__container">
    <section class="content content--full background--ailsa-navy">
      <div class="container landing__display">
        <div class="landing__btn">
          <img src="img/shirt__btn.svg" alt="shirt button">
        </div>
        <h1 class=" text--display">Mark</h1>
      </div>
      <div class="container landing__text">
        <h2>This is a personal portfolio of mine.</h2>
      </div>
    </section>
    <section class="content content--full background--secondary text--light">
      <div class="container">
        <h3 class="text--thin text--center">Technologies that I am familiar with / experienced in
        </h3>
      </div>
      <div class="container skills__container">
        <div class="divider divider__top">
          <img src="img/divider__top.svg" alt="divider__top--graphic">
        </div>
        <div class="skills__content">
          <div class="skills__group">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>SCSS</span>
            <span>Bootstrap</span>
          </div>
          <div class="skills__group">
            <span>JavaScript</span>
            <span>jQuery</span>
          </div>
          <div class="skills__group">
            <span>PHP</span>
            <span>MySQL</span>
            <span>Wordpress</span>
            <span>AWS (EC2 instance)</span>
          </div>
        </div>
        <div class="divider divider__bottom">
          <img src="img/divider__bottom.svg" alt="divider__bottom--graphic">
        </div>
      </div>
      <div class="container">
        <h3 class="text--thin text--center">Accumulated through personal voyages and following Udemy courses</h3>
      </div>
    </section>
    <section class="content content--full background--white">
      <div class="container courses__container">
        <div class="courses__heading">
          <h3>Finished these Udemy courses</h3>
        </div>
        <ul class="courses__list">
          <li><a target="__blank" href="https://www.udemy.com/course/advanced-css-and-sass/">Advanced CSS and Sass:
              Flexbox, Grid,
              Animations and More!</a></li>
          <li><a target="__blank" href="https://www.udemy.com/course/the-complete-web-developer-course-2/">The Complete
              Web Developer
              Course 2.0</a></li>
        </ul>
      </div>
      <div class="popcorn__container">
        <img src="img/popcorn__cup.svg" alt="popcorn cup">
      </div>
    </section>
  </main>
  <footer class="background__videoContainer background--light">
    <div class="content content--full">
      <a target="__blank" href="https://github.com/mpk-coding?tab=repositories"
        class="myWork__link text--end">GitHub</a>
    </div>
    <video data-number="1" class="background__video" muted>
      <source src="vid/artem.mp4" type="video/mp4">
    </video>
    <video data-number="2" class=" background__video background__video--hidden" muted>
      <source src="vid/artem.mp4" type="video/mp4">
    </video>
    <div class="footer">
      <p class="copyRight">&copy; 2021 | <a target="__blank" class="copyright"
          href="mailto:mpk.coding@gmail.com">mpk.coding@gmail.com</a>
      </p>
      <div class="acreditation__container">
        <p class="acreditation__caption">Sources</p>
        <a target="__blank" class="acreditation__link" href="https://www.svgbackgrounds.com/">svgbackgrounds.com</a>
        <a target="__blank" class="acreditation__link" href="https://tartanify.com/tartan/ailsa-navy">tartanify.com</a>
        <a target="__blank" class="acreditation__link" href='https://www.freepik.com/vectors/frame'>pikisuperstar -
          www.freepik.com</a>
        <a target="__blank" class="acreditation__link" href='https://www.freepik.com/vectors/ribbon'>macrovector -
          www.freepik.com</a>
        <a target="__blank" class="acreditation__link" href='https://www.freepik.com/vectors/background'>rawpixel.com -
          www.freepik.com</a>
        <a target="__blank" class="acreditation__link" href='https://www.freepik.com/vectors/background'>rawpixel.com -
          www.freepik.com</a>
        <a target="__blank" class="acreditation__link"
          href="https://coverr.co/videos/sunrise-in-costa-rica--HM7pVL1BAT">coverr.co</a>
        <a target="__blank" href="https://www.pexels.com/pl-pl/video/odbicia-gor-na-rzece-1970045/"
          class="acreditation__link">pexels.com</a>
        <a target="__blank" href="https://www.pexels.com/pl-pl/video/jedzenie-wzor-tekstura-abstrakcyjny-6824078/"
          class="acreditation__link">pexels.com</a>
      </div>
    </div>
  </footer>
</body>