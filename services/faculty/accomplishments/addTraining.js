import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addTraining(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				if(formData.get('proof') == "") {
					formData.delete('proof')
				}
				if(formData.get('endDate') == "") {
					formData.delete('endDate')
				}
				formData.append('facultyId', facultyId)
				formData.append('status', 'Pending')
				
				const response = await axios({
				    method: 'POST',
				    url: process.env.API_URL + '/faculty/accomplishment/add/training-seminar',
				    data: formData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			    })	
				return response.data
			} catch (err) {
				console.error(err)
				return err
			}
		}
	} catch (err) {
		console.error(err)
		return err
	}
}