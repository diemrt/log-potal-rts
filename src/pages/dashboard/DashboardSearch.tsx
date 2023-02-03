
export default function DashboardSearch(){

    return (
        <div className="container">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Cerca" aria-label="DashboardSearch" />
                <button className="btn btn-outline-success" type="submit">Cerca</button>
            </form>
        </div>
        
    );
}