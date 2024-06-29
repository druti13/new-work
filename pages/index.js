import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/frame-component2";
import Testimonials from "../components/testimonials";
import Testimonials1 from "../components/testimonials1";
import End from "../components/end";
import Footer from "../components/footer";

const LandingPageSignIn = () => {
  return (
    <div className="w-full relative bg-grey-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent1 />
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FrameComponent />
        <FrameComponent2 />
        <Testimonials />
        <Testimonials1 />
      </main>
      <End />
      <Footer />
    </div>
  );
};

export default LandingPageSignIn;
