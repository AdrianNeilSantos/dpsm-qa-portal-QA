import LayoutUnitHead from '../../components/layout-unit-head'
import AnalyticsTable from '../../components/unit-head/dashboard/dashboard_table'
import DashboardGraph from '../../components/unit-head/dashboard/dashboard_graph'

function Dashboard() {
    return (
        <LayoutUnitHead>
            <div className="col-9">
		<br />
	<h3 align = "center">Accomplishment Count</h3>
	<div className = "form-row">
                    	<div className = "form-group col-md-4 required">
				<label className = "control-label" htmlFor ="StartTimePeriod"> From  </label>
                    		<input className = "form-control" type = "date" name = "StartTimePeriod" required />
                	</div>

			<div className = "form-group col-md-4 required">
				<label className = "control-label" htmlFor ="EndTimePeriod"> To </label>
                    		<input className = "form-control" type = "date" name = "EndTimePeriod" required />
                	</div>
	</div>

	<button className = "btn btn-info"> Change Time Period</button>
		<nav>
            		<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
				<a className="nav-item nav-link" id="graph-tab" data-toggle="tab" href="#graph" role="tab" aria-controls="graph" aria-selected="false">Overview</a>
				<a className="nav-item nav-link" id="table-tab" data-toggle="tab" href="#table" role="tab" aria-controls="table" aria-selected="false">Full List</a>
            		</div>
            	</nav>
	    	<div className="tab-content" id="nav-tabContent">
	    		<div className="tab-pane fade show active" id="graph" role="tabpanel" aria-labelledby="graph=tab"><DashboardGraph /></div>
	    		<div className="tab-pane fade" id="table" role="tabpanel" aria-labelledby="table-tab"><AnalyticsTable /></div>
            	</div>
                </div>
	<style jsx>{`
		a.nav-item:focus{
			background-color:#78b6c2;
		}
		a.nav-item:hover{
			background-color:#78b6c2;
		}
		a.active{
			background-color:#78b6c2;
		}
	`}</style>
        </LayoutUnitHead>
    )
  }
  
  export default Dashboard
