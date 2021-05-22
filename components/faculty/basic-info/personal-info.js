import Link from 'next/link'
import { MenuItem } from '@material-ui/core'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'
import PersonalInfoDependents from './personal-info-dependents'
import NameDisplay from '../../../components/name-display'
import { parseCookies } from "../../../helpers"

import updateFaculty from '../../../services/faculty/basic-info/updateFaculty'

function PersonalInfo(props) {
    let FacultyDetails = {
        lastName: props.children.lastName,
        middleName: props.children.middleName,
        permanentAddress: props.children.permanentAddress,
        presentAddress: props.children.presentAddress,
        mobile: props.children.mobile,
        landline: props.children.landline,
        email: props.children.email,
        civilStatus: props.children.civilStatus,
        religion: props.children.religion,
        emergencyContactPerson: props.children.emergencyContactPerson,
        emergencyContactNumber: props.children.emergencyContactNumber,
        suffix: props.children.suffix,
        faculty_dependents: props.children.faculty_dependents
    }
    let name = props.children.lastName + ', ' + props.children.firstName
    let dependents = Object.keys(props.children.faculty_dependents).map(key => {
        return (
            <div className = "form-row">
                <div className = "form-group col-md-4 required"> 
                    <label className = "control-label" htmlFor = "Dependent"> Name of Dependent </label>
                    <input className = "form-control" type = "text" name = "name" defaultValue = { props.children.faculty_dependents[key].name } disabled={!props.facultyFlag} required />
                </div>
                <div className = "form-group col-md-4 required">
                    <label className = "control-label" htmlFor = "DependentDateOfBirth"> Date of Birth </label>
                    <input className = "form-control" type = "date" name = "birthDate" defaultValue = { props.children.faculty_dependents[key].birthDate } disabled={!props.facultyFlag} required />
                </div>
                <div className = "form-group col-md-4 required">
                    <label className = "control-label" htmlFor = "DependentRelationship[]"> Relationship to User </label>
                    <input className = "form-control" type = "text" name = "relationship" defaultValue = { props.children.faculty_dependents[key].relationship } disabled={!props.facultyFlag} required />
                </div>
            </div>
        );
    });
    let res
    
    return (
        <div>
        <h2 align = "center"> Personal Information </h2>
        <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{name}</NameDisplay>
		<Formik
            initialValues={FacultyDetails}
            onSubmit={async (values, token) => {
                let alert = document.getElementById("alert")

                res = await updateFaculty(values, props.token)
                if(res.success == true) { 
                    alert.className ="alert alert-success"
                    values.message = res.message
                } else {
                    alert.className = "alert alert-danger"
                    if(res.error) values.message = res.error[0].message
                    else values.message = res.message
                }
                
                alert.setAttribute("style", "visibility: visible");
                $("#alert").fadeTo(5000, 500).slideUp(500, function(){
                    $("#alert").slideUp(500);
                });
                Router.push('/faculty/basic-info')
            }}
        >
            {({ values, errors, touched, isSubmitting }) => (
                <Form>
                    <div role="alert" id="alert">
                        {values.message}
                    </div>
                    {props.facultyFlag && <h6>Required</h6>}
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-3 required">
                            <label className = "control-label" htmlFor = "FirstName"> First Name </label>
                            <input className = "form-control" type = "text" name = "FirstName" defaultValue = { props.children.firstName } disabled required />
                        </div>
                        <div className = "form-group col-md-3">
                            <label htmlFor = "MiddleName"> Middle Name </label>
                            <Field className = "form-control" type = "text" name = "middleName" defaultValue = { props.children.middleName } disabled={!props.facultyFlag} />
                        </div>
                        <div className = "form-group col-md-3 required">
                            <label className = "control-label" htmlFor = "LastName"> Last Name </label>
                            <Field className = "form-control" type = "text" name = "lastName" defaultValue = { props.children.lastName } disabled={!props.facultyFlag} required />
                        </div>
                        <div className = "form-group col-md-3">
                            <label className = "control-label" htmlFor = "Suffix"> Suffix </label>
                            <Field className = "form-control" type = "text" name = "suffix" defaultValue = { props.children.suffix } disabled={!props.facultyFlag} />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "Sex"> Sex </label>
                            <select className = "form-control" name = "Sex" value = { props.children.gender } disabled required>
                                <option value = "male">Male</option>
                                <option value = "female">Female</option>
                            </select>
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "DateOfBirth"> Date of Birth </label>
                            <input className = "form-control" type = "date" name = "DateOfBirth" defaultValue = { props.children.dateOfBirth } disabled required />
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "PlaceOfBirth"> Place of Birth </label>
                            <input className = "form-control" type = "text" name = "PlaceOfBirth" defaultValue = { props.children.placeOfBirth } disabled required />
                        </div>
                    </div>
                    <br />
                    <div className = "form-group required">
                        <label className = "control-label" htmlFor = "PresentAddress"> Present Address </label>
                        <Field className = "form-control" type = "text" name = "presentAddress" defaultValue = { props.children.presentAddress } disabled={!props.facultyFlag} required />
                    </div>
                    <div className = "form-group required">
                        <label className = "control-label" htmlFor = "PermanentAddress"> Permanent Address </label>
                        <Field className = "form-control" type = "text" name = "permanentAddress" defaultValue = { props.children.permanentAddress } disabled={!props.facultyFlag} required />
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor ="CivilStatus"> Civil Status </label>
                            <Field as = "select" className = "form-control" name = "civilStatus" defaultValue = { props.children.civilStatus } disabled={!props.facultyFlag} required>
                                <option value = "single">Single</option>
                                <option value = "married">Married</option>
                                <option value = "separated">Separated (Legally)</option>
                                <option value = "divorced">Divorced</option>
                                <option value = "widowed">Widowed</option>
                            </Field>
                        </div>
                        <div className = "form-group col-md-6">
                                <label htmlFor = "Religion"> Religion </label>
                                <Field className = "form-control" type = "text" name = "religion" defaultValue = { props.children.religion } disabled={!props.facultyFlag} required />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "ContactNumber"> Contact Number (Landline) </label>
                            <Field className = "form-control" type = "tel" name = "landline" pattern = "[0-9]{8}" defaultValue = { props.children.landline } disabled={!props.facultyFlag} required />
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "ContactNumber"> Contact Number (Mobile) </label>
                            <Field className = "form-control" type = "tel" name = "mobile" pattern = "[0]{1}[9]{1}[0-9]{9}" defaultValue = { props.children.mobile } disabled={!props.facultyFlag} required />
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "EmailAddressAlt"> Personal E-mail Address </label>
                            <Field className = "form-control" type = "email" name = "emailAddressAlt" defaultValue = { props.children.email } disabled={!props.facultyFlag} />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor = "EmergencyContact"> Emergency Contact </label>
                            <Field className = "form-control" type = "text" name = "emergencyContactPerson" defaultValue = { props.children.emergencyContactPerson } disabled={!props.facultyFlag} required />
                        </div>
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor = "EmergencyContactNumber"> Emergency Contact Number </label>
                            <Field className = "form-control" type = "tel" name = "emergencyContactNumber" pattern = "[0]{1}[9]{1}[0-9]{9}" defaultValue = { props.children.emergencyContactNumber } disabled={!props.facultyFlag} required />
                        </div>
                    </div>
                    <h5 align = "center"> Dependents </h5>
                    {dependents}
                    <br />
                    { props.facultyFlag && <button type = "submit" className = "btn btn-primary" disabled = {isSubmitting}> Update </button> }
                    { props.facultyFlag && <PersonalInfoDependents /> }
                    <br />
                </Form>
            )}
        </Formik>
        <style jsx>{`
            .form-group.required .control-label:after{
                content: "*";
                color: #f00;
            }
            h6:before{
                content: "* ";
                color: #f00;
            }
            #alert {
                visibility: hidden;
            }
        `}</style>
        </div>     
    )
}

export default PersonalInfo