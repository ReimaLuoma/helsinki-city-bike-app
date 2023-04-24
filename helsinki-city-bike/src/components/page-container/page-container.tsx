import ActionField from "../action-field/action-field"
import Nav from "../nav/nav"

const PageContainer = () => {
    return (
        <div className="page-container">
            <Nav />
            <ActionField />
        </div>
    )
}

export default PageContainer;