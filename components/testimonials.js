import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-grey-white flex flex-row items-start justify-start pt-4 px-0 pb-[30px] box-border shrink-0 max-w-full z-[2] mt-[-33px] text-left text-lg text-grey-darkest font-text-sm-bold mq750:pb-5 mq750:box-border ${className}`}
    >
      <div className="h-[330px] w-[1240px] relative hidden max-w-full">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-full h-full border-[1px] border-solid border-grey-light" />
        <div className="absolute top-[174px] left-[40px] tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap inline-block w-[1160px]">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <div className="absolute top-[40px] left-[529px] text-17xl font-semibold mq1050:text-10xl mq450:text-3xl">
          Add your own
        </div>
        <img
          className="absolute top-[40px] left-[459px] w-[54px] h-[54px] overflow-hidden"
          alt=""
          src="/add.svg"
        />
        <div className="absolute top-[250px] left-[40px] rounded-lg bg-grey-white box-border w-[122px] h-10 whitespace-nowrap text-sm text-primary-full border-[1px] border-solid border-primary-full">
          <div className="absolute top-[12px] left-[29px] leading-[16px] font-semibold inline-block min-w-[63px]">
            Add new
          </div>
        </div>
      </div>
      <div className="flex-1 bg-blue-2 flex flex-row items-start justify-center py-[100px] px-5 box-border max-w-full z-[3] mq750:pt-4 mq750:pb-[65px] mq750:box-border">
        <div className="w-[1240px] flex flex-row items-start justify-start p-10 box-border relative max-w-full">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-grey-white box-border border-[1px] border-solid border-grey-light" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full z-[1] mq750:gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[24px]">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px]"
                alt=""
                src="/add-1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <h2 className="m-0 relative text-5xl font-semibold font-text-sm-bold text-grey-darkest text-left mq450:text-lgi">
                  Add your own
                </h2>
              </div>
            </button>
            <div className="self-stretch relative tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </div>
            <button className="cursor-pointer py-2.5 px-7 bg-grey-white rounded-lg flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-primary-full hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum">
              <div className="relative text-sm leading-[16px] font-semibold font-text-sm-bold text-primary-full text-left inline-block min-w-[63px]">
                Add new
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
