import ActionField from "../action-field/action-field"
import Nav from "../nav/nav"

const PageContainer = () => {
    return (
        <div className="container-fluid" data-testid='container-fluid'>
            <div className="row" data-testid='row'>
                <div className="col-lg-2 col-md-12 d-flex page-container" data-testid='col-lg-2'>
                    <Nav />
                </div>
                <div className="col" data-testid='col'>
                    <ActionField />
                </div>
            </div>
        </div>
    )
}

export default PageContainer;