const AboutUsPage = $el => {
  if ($el.length > 0) {
    const mySlick = $el.find('.my-slick');
    mySlick.slick({
      arrows: false,
      dots: true,
    });
  }
};

export default AboutUsPage;
