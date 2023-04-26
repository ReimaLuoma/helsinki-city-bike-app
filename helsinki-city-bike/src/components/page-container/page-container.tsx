import ActionField from "../action-field/action-field"
import Nav from "../nav/nav"

const PageContainer = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-12 d-flex page-container">
                    <Nav />
                </div>
                <div className="col">
                    <ActionField />
                </div>
            </div>
        </div>
    )
}

export default PageContainer;