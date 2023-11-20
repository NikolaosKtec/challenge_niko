
import 'bootstrap/dist/css/bootstrap.min.css';import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let fileReader;
let text = "";
   


function Form_file() {
    
    return(
        
        <Form className="w-75 mx-auto justify-content-center" >
            <br />
            <br />
            <br />
            <br />
        <Form.Group className="mb-3" controlId="">
            <Form.Label>Arquivo</Form.Label>
            <Form.Control type="file" accept='.txt' placeholder="Enter arquivo" onChange={e =>handleFileLoad(e)} />
            <Form.Text className="text-muted">
                insira o arquivo em formato .TXT
            </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
            <Button variant="primary" type="button" onClick={e=> submit(e)}>
            Submit
            </Button>
            {/* <p>{{text}}</p> */}
        </Form>
        
        
    );


}


// const handleFileRead = (e) => {
//     const content = fileReader.result;
//     console.log(content);
    
// }

function handleFileLoad(e){
    
    // console.log(e.target.files[0]);
    // alert('aguarde')
    // e.preventDefault();


    let regex =  /\n+[[:digit:]]/g
    fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0]);
    fileReader.onload = function(){
        console.log(fileReader.result);
        text = fileReader.result;
        console.log(text.length);
        let vTexto = text.split('\n');
        let transaction_type,data,description,value_cents,seller = "";
        let length;
        for (let i in vTexto) {
            
            
        
        length = vTexto[i].length;
        transaction_type =  vTexto[0][0];
        data = vTexto[i].substring(1,23);
        description = vTexto[i].substring(26,55);
        value_cents = vTexto[i].substring(56,66);
        seller = vTexto[i].substring(length-10,length);
        console.log(transaction_type);
        console.log(data);
        console.log(description);
        console.log(value_cents);
        console.log(seller);
        }
    }
    
}
function submit(file){
    
    
}

// const parseAndSend = (file) => {
//     const reader = new FileReader();
//     reader.onloadend = handleFileRead;
//     Text = reader.readAsText(e)
//     console.log(Text);
// }

export default Form_file;