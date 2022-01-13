import { useDispatch } from "react-redux"

/**
 * @return edit Form
 * @func handleSubmit - s'éxécute a l'envoi du formulaire et modifie, met à jour les datas du user
 * @func cancelForm - s'éxécute au clique du bouton "Cancel" et masque le formulaire
 * 
 */
function EditForm(props) {
    const dispatch = useDispatch()

    const cancelForm = () => {
        document.querySelector("#form-edit").style.display = "none"
        document.querySelector(".edit-button").style.display = "inline-block"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/api/v1/user/profile', {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "Authorization": "Bearer" + localStorage.getItem('token')
        },
        body: JSON.stringify({
            firstName: document.getElementById('firstname-form-edit').value,
            lastName: document.getElementById('lastname-form-edit').value
        })
        }).then(response => response.json()
        ).then((data) => {
            dispatch({type: "DATAS_ACTIONS", payload:{datasUser: data}})
            document.querySelector("#form-edit").reset()
            cancelForm()

        }).catch(error=> {
            alert("Erreur de saisie")
        })
        
    }
    return (
        <form id="form-edit"  onSubmit={handleSubmit}>
            <input type="text"  placeholder={props.firstname} id="firstname-form-edit"/>
            <input type="text" placeholder={props.lastname} id="lastname-form-edit"/>
            <br/>
            <input type="submit" value="Save"/>
            <input type="button" value="Cancel" onClick={cancelForm}/>
        </form>
    
    )
}


export default EditForm