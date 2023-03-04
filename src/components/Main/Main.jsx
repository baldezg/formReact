export const Main = ({ 
    children 
}) => {
    const [ banner, form ] = children;
    return (
        <div className="wrapper">
        <div className="pane">
            {banner}
        </div>
        <div className="pane">
            {form}
        </div>
        </div>
    )
}