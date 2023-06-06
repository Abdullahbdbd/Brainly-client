import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
    return (
      <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={4000}
    >
      <div data-src="https://img.freepik.com/free-vector/ramadan-kareem-islamic-holy-month-festival-background_1055-17262.jpg?w=900&t=st=1686091482~exp=1686092082~hmac=835f12061c7486253c14f4cf5b95478dee68a6c369868d917d6422fc83bf1102" />
      <div data-src="https://img.freepik.com/free-photo/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks_1340-23597.jpg?size=626&ext=jpg&uid=R105766307&ga=GA1.1.1209151801.1673868797&semt=sph" />
      <div data-src="https://img.freepik.com/premium-photo/muslim-old-man-praying-mosque-with-starry-crescent-moon-moon-night-generative-ai_618582-963.jpg?w=1060" />
      <div data-src="https://img.freepik.com/free-vector/landing-page-template-islamic-new-year-celebration_23-2150510193.jpg?w=1060&t=st=1686091230~exp=1686091830~hmac=81e0dc902d73cf19c08cbaac2c7afe46ed12834b64166a8d883080d871de7f3f" />
      <div data-src="https://img.freepik.com/free-vector/holy-kaaba-mecca-saudi-arabia-hand-drawn-sketch-vector-illustration_460848-10337.jpg?w=900&t=st=1686091699~exp=1686092299~hmac=7978f04f4fe63c8b102a4cd7664dd82dab7e240349eae53ecde8ccefea2c7272" />
      
    </AutoplaySlider>
    )
};

export default Banner;