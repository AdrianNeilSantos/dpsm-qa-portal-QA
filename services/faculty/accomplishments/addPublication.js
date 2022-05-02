import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addPublication(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				let authors = []
				for (var pair of formData.entries()) {
                    if(pair[0] == 'PublicationAuthorDPSM[]' && pair[1] != facultyId) {
                    	authors.push(pair[1])
                    }
                }
                
                if(formData.get('url') == ''){
                	formData.delete('url')	
                }
                formData.append('facultyId', facultyId)
				formData.append('status', 'Pending')

               	let proof = formData.get('proof')
				const response = await axios({
				    method: 'POST',
				    url: process.env.API_URL + '/faculty/accomplishment/add/publication',
				    data: formData,
				    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
			    })
				
				let bodData = new FormData()
		    	bodData.append('facultyId', facultyId)
		    	bodData.append('publicationId', response.data.result.publicationId)
				bodData.append('proof', proof)
		        const res = await axios({
		        	method: 'POST',
				    url: process.env.API_URL + '/faculty/accomplishment/add/publisher',
				    data: bodData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		        })
		        bodData.delete('proof')

				for(var value of authors) {
		        	bodData.set('facultyId', value)
		        	const auth = await axios({
			        	method: 'POST',
					    url: process.env.API_URL + '/faculty/accomplishment/add/publisher',
					    data: bodData,
					    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			        })
		        }
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