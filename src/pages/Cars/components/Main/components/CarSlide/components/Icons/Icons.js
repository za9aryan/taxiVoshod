import RightSideIcon from "./RightSideIcon/RightSideIcon";
import LeftSideIcon from "./LeftSideIcon/LeftSideIcon";
import FrontSideIcon from "./FrontSideIcon/FrontSideIcon";
import RearSideIcon from "./RearSideIcon/RearSideIcon";

const Icons = ({side, part}) => {
    return (
        <>
            {
                side === "right" ?
                    <RightSideIcon part={part}/> :
                    side === "left" ?
                        <LeftSideIcon part={part}/> :
                        side === "front" ?
                            <FrontSideIcon part={part}/> :
                            <RearSideIcon part={part}/>
            }
        </>

    )
}

export default Icons