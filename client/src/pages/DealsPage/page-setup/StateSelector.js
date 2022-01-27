function StateSelector(props) {

    console.log(props)

    return(
    <>
        <div className="row">
            <div className="col-12">
                    
                    <div className="stateSelector">
                        <h3 className="currentState">{props.stateSelectedData.stateHeadline}</h3>
                        <div className="selectableStates">
                            <a href={props.stateSelectedData.stateHref}>
                                <h4>{props.stateSelectedData.unSelectedState}</h4>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    </>
    )
}

export default StateSelector;