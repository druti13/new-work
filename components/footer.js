import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-grey-white flex flex-col items-start justify-start pt-[60px] px-0 pb-0 box-border gap-[60px] max-w-full text-left text-sm text-grey-darkest font-text-sm-bold mq750:gap-[30px] mq450:pt-[39px] mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[380px] relative bg-grey-white hidden" />
      <div className="w-[1421px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1217px] flex flex-col items-start justify-start gap-[2px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0 gap-[16px]">
              <b className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[75px] z-[1]">
                Hobbycue
              </b>
              <a className="[text-decoration:none] relative tracking-[0.01em] leading-[18px] text-[inherit] inline-block min-w-[64px] z-[1]">
                About Us
              </a>
            </div>
            <div className="w-[106px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px]">
              <b className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[62px] z-[1]">
                How Do I
              </b>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[54px] whitespace-nowrap z-[1]">
                Sign Up
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <b className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[83px] z-[1]">
                Quick Links
              </b>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[53px] z-[1]">
                Listings
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[16px] max-w-full">
              <b className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[94px] z-[1]">
                Social Media
              </b>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
                <img
                  className="h-6 w-6 relative min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-60.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-61.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-62.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-63.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-59.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-58.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-57.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px] z-[1]"
                  alt=""
                  src="/group-56.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[89px] z-[1]">
                Our Services
              </div>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[90px] z-[1]">
                Work with Us
              </div>
              <a className="[text-decoration:none] relative tracking-[0.01em] leading-[18px] text-[inherit] inline-block min-w-[28px] z-[1]">
                FAQ
              </a>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[79px] z-[1]">
                Contact Us
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[91px] z-[1]">
                Add a Listing
              </div>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[91px] z-[1]">
                Claim Listing
              </div>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[90px] z-[1]">
                Post a Query
              </div>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[112px] z-[1]">
                Add a Blog Post
              </div>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[98px] z-[1]">
                Other Queries
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[73px] z-[1]">
                Blog Posts
              </div>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[88px] z-[1]">
                Shop / Store
              </div>
              <div className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[85px] z-[1]">
                Community
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start pt-12 px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <b className="relative tracking-[0.01em] leading-[18px] inline-block min-w-[99px] z-[1]">
                  Invite Friends
                </b>
                <div className="self-stretch rounded-lg bg-grey-white box-border flex flex-row items-start justify-between py-0 pr-0.5 pl-3.5 max-w-full gap-[20px] z-[1] text-xs text-darkgray border-[1px] border-solid border-primary-full mq450:flex-wrap">
                  <div className="self-stretch w-[360px] relative rounded-lg bg-grey-white box-border hidden max-w-full border-[1px] border-solid border-primary-full" />
                  <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                    <div className="relative leading-[16px] inline-block min-w-[48px] z-[1]">
                      Email ID
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-3 bg-primary-full rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-start justify-start z-[1] hover:bg-plum">
                    <div className="h-10 w-[59px] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-full hidden" />
                    <div className="relative text-xs tracking-[0.01em] leading-[16px] font-semibold font-text-sm-bold text-grey-white text-left inline-block min-w-[35px] z-[2]">
                      Invite
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="self-stretch bg-purple-3 flex flex-row items-start justify-center py-[30px] pr-5 pl-[21px] box-border max-w-full z-[1] text-left text-sm text-grey-darkest font-text-sm-bold">
        <div className="h-[78px] w-[1440px] relative bg-purple-3 hidden max-w-full" />
        <div className="relative tracking-[0.01em] leading-[18px] font-medium mix-blend-normal z-[1]">
          © Purple Cues Private Limited
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
