import ActionField from "../action-field/action-field"
import Nav from "../nav/nav"

const PageContainer = () => {
    return (
        <div className="row">
            <div className="col d-flex page-container">
                <Nav />
                <ActionField />
            </div>
            
        </div>
    )
}

export default PageContainer;