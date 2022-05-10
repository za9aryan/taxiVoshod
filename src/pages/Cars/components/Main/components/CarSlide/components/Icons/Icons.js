import RightSideIcon from "./RightSideIcon/RightSideIcon";
import LeftSideIcon from "./LeftSideIcon/LeftSideIcon";
import FrontSideIcon from "./FrontSideIcon/FrontSideIcon";
import RearSideIcon from "./RearSideIcon/RearSideIcon";

const Icons = ({side}) => {
    return (
        <>
            {
                side === "right" ?
                    <RightSideIcon side={side}/> :
                    side === "left" ?
                        <LeftSideIcon side={side}/> :
                        side === "front" ?
                            <FrontSideIcon side={side}/> :
                            <RearSideIcon side={side}/>
            }
        </>

    )
}

export default Icons