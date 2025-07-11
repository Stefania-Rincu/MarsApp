interface InfoTemplateProps {
    title: string;
    imgSrc: string;
    p1: string;
    p2: string;
}


export function InfoTemplate(props: InfoTemplateProps) {
    return (
        <div className="nasa-card">
            <h1 className="nasa-title">{props.title}</h1>
            <img className="nasa-logo" src={props.imgSrc} alt="nasa logo"/>
            <p className="nasa-info">{props.p1}</p>
            <p className="nasa-info">{props.p2}</p>
        </div>
    )
}