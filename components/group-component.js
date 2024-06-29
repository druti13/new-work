import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  groupsBlack24dp11,
  people,
  findATeacherCoachOrExpert,
  connect,
  propGap,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex-1 rounded-lg bg-grey-white box-border flex flex-col items-start justify-start py-[38px] px-[43px] gap-[32px] max-w-full text-left text-5xl text-base-black font-text-sm-bold border-[1px] border-solid border-grey-light mq750:gap-[16px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border ${className}`}
      style={groupDivStyle}
    >
      <div className="w-[608px] h-[297px] relative rounded-lg bg-grey-white box-border hidden max-w-full border-[1px] border-solid border-grey-light" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px] z-[1]"
            loading="lazy"
            alt=""
            src={groupsBlack24dp11}
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[83px] z-[1] mq450:text-lgi">
              {people}
            </h2>
          </div>
        </div>
        <div className="self-stretch relative text-lg font-light whitespace-pre-wrap z-[1]">
          {findATeacherCoachOrExpert}
        </div>
      </div>
      <button className="cursor-pointer py-2.5 pr-[29px] pl-[30px] bg-grey-white rounded-lg flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-primary-full hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum">
        <div className="relative text-sm leading-[16px] font-semibold font-text-sm-bold text-primary-full text-left inline-block min-w-[61px]">
          {connect}
        </div>
      </button>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  groupsBlack24dp11: PropTypes.string,
  people: PropTypes.string,
  findATeacherCoachOrExpert: PropTypes.string,
  connect: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default GroupComponent;
