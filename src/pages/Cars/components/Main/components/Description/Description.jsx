import c from "./Description.module.css"

const Description = () => {

    const text = [
        {isDamage: true, name: "Есть повреждения"},
        {isDamage: false, name: "Есть повреждения"},
        {isDamage: true, name: "Есть повреждения"},
        {isDamage: false, name: "Есть повреждения"}
    ]


    return (
        <div className={c.Description}>
            <div className={c.DescriptionItem}>
                {text.map(({name, isDamage}, index) => {
                    if(index < 2){
                        return (
                            <div key={name + index} className={c.TextContainer}>
                                <div className={`${c.Circle} ${isDamage ? c.IsDamage : ""}`}/>
                                <p className={c.Text}>{name}</p>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
            <div className={c.DescriptionItem}>
                {text.map(({name, isDamage}, index) => {
                    if(index > 1){
                        return (
                            <div key={name + index} className={c.TextContainer}>
                                <div className={`${c.Circle} ${isDamage ? c.IsDamage : ""}`}/>
                                <p className={c.Text}>{name}</p>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    );
};

export default Description;